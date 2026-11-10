// chain_test.ts — beweist, was die Lesson behauptet.
//
// Jeder Test entspricht einer Aussage aus dem Lesson-Text: Hashes sind
// deterministisch, die Merkle-Wurzel deckt jede Transaktion ab, Mining
// findet eine nonce mit führenden Nullen, und jede Änderung an einer
// Zeile macht die Kette nachweisbar kaputt.

import {
  assertEquals,
  assertNotEquals,
  assertStringIncludes,
} from "@std/assert";
import {
  Block,
  blockAnhaengen,
  blockHash,
  ketteLesen,
  ketteOeffnen,
  kettePruefen,
  laengsteKette,
  merkleRoot,
  mine,
  sha256,
  transaktionAendern,
  transaktionenLesen,
  transaktionsHash,
} from "./chain.ts";

Deno.test("SHA-256 liefert den bekannten Testwert für 'abc'", () => {
  assertEquals(
    sha256("abc"),
    "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
  );
});

Deno.test("Merkle-Wurzel: leer, ein Blatt, drei Blätter (letztes doppelt)", () => {
  assertEquals(merkleRoot([]), sha256(""));
  const a = sha256("a");
  assertEquals(merkleRoot([a]), a);
  // bei ungerader Anzahl wird das letzte Blatt mit sich selbst gepaart
  assertEquals(
    merkleRoot([a, sha256("b"), sha256("c")]),
    merkleRoot([
      a,
      sha256("b"),
      sha256("c"),
      sha256("c"),
    ]),
  );
});

Deno.test("Merkle-Wurzel ändert sich, sobald ein Betrag sich ändert", () => {
  const tx1 = transaktionsHash({ von: "anna", an: "bert", betrag: 10 });
  const tx2 = transaktionsHash({ von: "anna", an: "bert", betrag: 10.01 });
  assertNotEquals(tx1, tx2);
  assertNotEquals(merkleRoot([tx1]), merkleRoot([tx2]));
});

Deno.test("Mining findet eine nonce, deren Hash mit Nullen beginnt", () => {
  const kopf = {
    index: 0,
    zeit: 1_760_000_000,
    prevHash: "0".repeat(64),
    merkleRoot: sha256("leer"),
  };
  const { nonce, hash } = mine(kopf, 3);
  assertEquals(hash.startsWith("000"), true);
  assertEquals(blockHash({ ...kopf, nonce }), hash);
});

Deno.test("Anhängen verkettet die Blöcke über prev_hash", () => {
  const db = ketteOeffnen();
  const genesis = blockAnhaengen(
    db,
    [{ von: "bank", an: "anna", betrag: 100 }],
    2,
  );
  const zweiter = blockAnhaengen(
    db,
    [{ von: "anna", an: "bert", betrag: 30 }],
    2,
  );

  assertEquals(genesis.index, 0);
  assertEquals(genesis.prevHash, "0".repeat(64));
  assertEquals(zweiter.index, 1);
  assertEquals(zweiter.prevHash, genesis.hash);
  assertEquals(ketteLesen(db).length, 2);
});

Deno.test("Transaktionen eines Blocks kommen in Einfüge-Reihenfolge zurück", () => {
  const db = ketteOeffnen();
  blockAnhaengen(db, [{ von: "bank", an: "anna", betrag: 100 }], 2);
  blockAnhaengen(db, [
    { von: "anna", an: "bert", betrag: 30 },
    { von: "bert", an: "clara", betrag: 5 },
  ], 2);

  const txs = transaktionenLesen(db, 1);
  assertEquals(txs.map((t) => t.von), ["anna", "bert"]);
  assertEquals(txs.map((t) => t.betrag), [30, 5]);
});

Deno.test("Unveränderte Kette besteht die Prüfung", () => {
  const db = ketteOeffnen();
  blockAnhaengen(db, [{ von: "bank", an: "anna", betrag: 100 }], 2);
  blockAnhaengen(db, [{ von: "anna", an: "bert", betrag: 30 }], 2);
  blockAnhaengen(db, [{ von: "bert", an: "clara", betrag: 5 }], 2);

  const ergebnis = kettePruefen(db);
  assertEquals(ergebnis.ok, true);
  assertEquals(ergebnis.fehler, []);
  assertEquals(ergebnis.bloecke, 3);
});

Deno.test("Ein geänderter Betrag fällt an der Merkle-Wurzel auf", () => {
  const db = ketteOeffnen();
  blockAnhaengen(db, [{ von: "bank", an: "anna", betrag: 100 }], 2);
  blockAnhaengen(db, [{ von: "anna", an: "bert", betrag: 30 }], 2);
  blockAnhaengen(db, [{ von: "bert", an: "clara", betrag: 5 }], 2);

  transaktionAendern(db, 1, 0, 9_999);

  const ergebnis = kettePruefen(db);
  assertEquals(ergebnis.ok, false);
  assertStringIncludes(ergebnis.fehler.join("\n"), "merkle_root");
});

Deno.test("Neu geminter Manipulations-Block bricht den Verweis des Folgeblocks", () => {
  const db = ketteOeffnen();
  blockAnhaengen(db, [{ von: "bank", an: "anna", betrag: 100 }], 2);
  blockAnhaengen(db, [{ von: "anna", an: "bert", betrag: 30 }], 2);
  blockAnhaengen(db, [{ von: "bert", an: "clara", betrag: 5 }], 2);

  // Angreifer ändert den Betrag und „repariert" Block 1 vollständig:
  // neue Merkle-Wurzel, neue nonce, neuer Hash — alles korrekt gerechnet.
  transaktionAendern(db, 1, 0, 9_999);
  const txs = transaktionenLesen(db, 1);
  const merkle = merkleRoot(txs.map(transaktionsHash));
  const alterBlock = ketteLesen(db)[1];
  const { nonce, hash } = mine(
    {
      index: 1,
      zeit: alterBlock.zeit,
      prevHash: alterBlock.prevHash,
      merkleRoot: merkle,
    },
    2,
  );
  db.prepare(
    "UPDATE block SET merkle_root = ?, nonce = ?, hash = ? WHERE idx = 1",
  )
    .run(merkle, nonce, hash);

  const ergebnis = kettePruefen(db);
  assertEquals(ergebnis.ok, false);
  assertStringIncludes(ergebnis.fehler.join("\n"), "Block 2: prev_hash");
});

Deno.test("Nakamoto-Regel: die längere Kette gewinnt, bei Gleichstand die erste", () => {
  const kurz = [{ index: 0 }, { index: 1 }] as Block[];
  const lang = [{ index: 0 }, { index: 1 }, { index: 2 }] as Block[];

  assertEquals(laengsteKette(kurz, lang), lang);
  assertEquals(laengsteKette(lang, kurz), lang);
  assertEquals(laengsteKette(kurz, [...kurz]), kurz);
});
