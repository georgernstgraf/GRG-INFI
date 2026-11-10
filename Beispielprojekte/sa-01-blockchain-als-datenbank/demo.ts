// demo.ts — die Kette live: anlegen, prüfen, manipulieren, prüfen.
//
// deno task demo

import {
  blockAnhaengen,
  ketteLesen,
  ketteOeffnen,
  kettePruefen,
  merkleRoot,
  mine,
  transaktionAendern,
  transaktionenLesen,
  transaktionsHash,
} from "./chain.ts";

const db = ketteOeffnen();

console.log("1) Drei Blöcke anlegen (Schwierigkeit 3 → 3 Hex-Nullen)\n");

blockAnhaengen(db, [
  { von: "bank", an: "anna", betrag: 100 },
], 3);
blockAnhaengen(db, [
  { von: "anna", an: "bert", betrag: 30 },
  { von: "bert", an: "clara", betrag: 5 },
], 3);
blockAnhaengen(db, [
  { von: "clara", an: "dora", betrag: 2 },
  { von: "dora", an: "anna", betrag: 1 },
  { von: "anna", an: "clara", betrag: 4 },
], 3);

function ketteDrucken(): void {
  const kette = ketteLesen(db);
  for (const b of kette) {
    const txs = transaktionenLesen(db, b.index);
    console.log(
      `  Block ${b.index}: nonce=${String(b.nonce).padStart(5)} ` +
        `hash=${b.hash.slice(0, 12)}…  (${txs.length} Tx)`,
    );
  }
}

ketteDrucken();

console.log("\n2) Prüfung der unveränderten Kette");
const sauber = kettePruefen(db);
console.log(
  `   ok=${sauber.ok} · Blöcke=${sauber.bloecke} · Fehler=${sauber.fehler.length}`,
);

console.log("\n3) Angriff: Betrag in Block 1 von 30 auf 9999 ändern");
transaktionAendern(db, 1, 0, 9999);
const nachAngriff = kettePruefen(db);
console.log(`   ok=${nachAngriff.ok}`);
for (const f of nachAngriff.fehler) {
  console.log(`   · ${f}`);
}

console.log(
  "\n4) Reparaturversuch: Block 1 neu minen (Angreifer mit Rechenleistung)",
);
const txs = transaktionenLesen(db, 1);
const merkle = merkleRoot(txs.map(transaktionsHash));
const alt = ketteLesen(db)[1];
const { nonce, hash } = mine(
  { index: 1, zeit: alt.zeit, prevHash: alt.prevHash, merkleRoot: merkle },
  3,
);
db.prepare(
  "UPDATE block SET merkle_root = ?, nonce = ?, hash = ? WHERE idx = 1",
)
  .run(merkle, nonce, hash);
console.log(`   Block 1 neu: nonce=${nonce} hash=${hash.slice(0, 12)}…`);

const nachReparatur = kettePruefen(db);
console.log(`   ok=${nachReparatur.ok}`);
for (const f of nachReparatur.fehler) {
  console.log(`   · ${f}`);
}

console.log("\n5) Fazit: Reparatur kostet Block 1 UND alle Folgeblöcke.");
console.log("   Genau das ist der Preis, den ein Angreifer zahlen muss.\n");
