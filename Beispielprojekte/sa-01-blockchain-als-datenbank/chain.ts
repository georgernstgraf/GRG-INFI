// chain.ts — eine Blockchain als SQLite-Datenbank.
//
// Die Lesson „Blockchain als Datenbank" braucht ein Gegenstück zum
// Erklären: eine Kette, die wirklich in Tabellen liegt, wirklich gemint
// wird und deren Prüfung wirklich anschlägt, sobald jemand eine Zeile
// ändert. Genau das macht diese Datei.
//
// Aufbau:
//   block(idx, zeit, prev_hash, merkle_root, nonce, hash)
//   tx(block_idx, position, von, an, betrag)
//
// Es gibt kein UPDATE und kein DELETE im normalen Betrieb — die Kette
// wächst nur. Das „Ändern" übernimmt transaktionAendern(), und zwar
// bewusst als Angriff: Die Demo zeigt danach, was kettePruefen() findet.

import { createHash } from "node:crypto";
import { DatabaseSync } from "node:sqlite";

export type Transaktion = {
  von: string;
  an: string;
  betrag: number;
};

export type Block = {
  index: number;
  zeit: number;
  prevHash: string;
  merkleRoot: string;
  nonce: number;
  hash: string;
};

/** Hash des „Blocks vor dem ersten" — 64 Hex-Nullen. */
export const GENESIS_HASH = "0".repeat(64);

/** SHA-256 eines Textes, als 64-stelliger Hex-String. */
export function sha256(text: string): string {
  return createHash("sha256").update(text, "utf8").digest("hex");
}

/**
 * Hash einer Transaktion in kanonischer Form.
 * Feste Feldreihenfolge und ein Trenner, den kein Feldwert enthalten
 * kann: derselbe Inhalt ergibt immer denselben Hash, ein geänderter
 * Betrag einen völlig anderen.
 */
export function transaktionsHash(tx: Transaktion): string {
  return sha256(`${tx.von}|${tx.an}|${tx.betrag}`);
}

/**
 * Merkle-Wurzel über die Transaktions-Hashes eines Blocks.
 * Gepaarte Blätter werden von unten nach oben gehasht; bei ungerader
 * Anzahl wird das letzte Blatt mit sich selbst gepaart. Ein einziger
 * geänderter Betrag ändert damit die Wurzel und den Block-Hash.
 */
export function merkleRoot(txHashes: string[]): string {
  if (txHashes.length === 0) {
    return sha256("");
  }
  let ebene = [...txHashes];
  while (ebene.length > 1) {
    const naechste: string[] = [];
    for (let i = 0; i < ebene.length; i += 2) {
      const links = ebene[i];
      const rechts = ebene[i + 1] ?? links;
      naechste.push(sha256(links + rechts));
    }
    ebene = naechste;
  }
  return ebene[0];
}

/** Der Hash des Block-Headers — alles außer dem Hash selbst. */
export function blockHash(block: Omit<Block, "hash">): string {
  return sha256(
    `${block.index}|${block.zeit}|${block.prevHash}|` +
      `${block.merkleRoot}|${block.nonce}`,
  );
}

/**
 * Proof of Work: nonce so lange hochzählen, bis der Block-Hash mit
 * `schwierigkeit` Hex-Nullen beginnt. Erwartete Versuche: 16^schwierigkeit.
 */
export function mine(
  block: Omit<Block, "hash" | "nonce">,
  schwierigkeit: number,
): { nonce: number; hash: string } {
  const ziel = "0".repeat(schwierigkeit);
  let nonce = 0;
  while (true) {
    const hash = blockHash({ ...block, nonce });
    if (hash.startsWith(ziel)) {
      return { nonce, hash };
    }
    nonce++;
  }
}

/** Legt die beiden Tabellen an (idempotent). */
export function schemaAnlegen(db: DatabaseSync): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS block (
      idx         INTEGER PRIMARY KEY,
      zeit        INTEGER NOT NULL,
      prev_hash   TEXT    NOT NULL,
      merkle_root TEXT    NOT NULL,
      nonce       INTEGER NOT NULL,
      hash        TEXT    NOT NULL
    );
    CREATE TABLE IF NOT EXISTS tx (
      block_idx INTEGER NOT NULL REFERENCES block(idx),
      position  INTEGER NOT NULL,
      von       TEXT    NOT NULL,
      an        TEXT    NOT NULL,
      betrag    REAL    NOT NULL,
      PRIMARY KEY (block_idx, position)
    );
  `);
}

/** Öffnet eine In-Memory-Kette (Tests) oder eine Datei (Demo). */
export function ketteOeffnen(pfad = ":memory:"): DatabaseSync {
  const db = new DatabaseSync(pfad);
  schemaAnlegen(db);
  return db;
}

function zeileZuBlock(zeile: Record<string, unknown>): Block {
  return {
    index: Number(zeile.idx),
    zeit: Number(zeile.zeit),
    prevHash: String(zeile.prev_hash),
    merkleRoot: String(zeile.merkle_root),
    nonce: Number(zeile.nonce),
    hash: String(zeile.hash),
  };
}

/** Alle Blöcke in Kettenreihenfolge. */
export function ketteLesen(db: DatabaseSync): Block[] {
  const zeilen = db.prepare("SELECT * FROM block ORDER BY idx").all();
  return zeilen.map((z) => zeileZuBlock(z as Record<string, unknown>));
}

/** Die Transaktionen eines Blocks, nach Position. */
export function transaktionenLesen(
  db: DatabaseSync,
  blockIndex: number,
): Transaktion[] {
  const zeilen = db
    .prepare(
      "SELECT von, an, betrag FROM tx WHERE block_idx = ? ORDER BY position",
    )
    .all(blockIndex);
  return zeilen.map((z) => {
    const r = z as Record<string, unknown>;
    return {
      von: String(r.von),
      an: String(r.an),
      betrag: Number(r.betrag),
    };
  });
}

/**
 * Hängt einen Block mit diesen Transaktionen an die Kette.
 * Bewusst ohne Konsens: Ein einzelner Schreiber erzeugt hier die Kette —
 * was beim Verteilen dazukommt, steht in der Lesson.
 */
export function blockAnhaengen(
  db: DatabaseSync,
  transaktionen: Transaktion[],
  schwierigkeit = 3,
  zeit = Math.floor(Date.now() / 1000),
): Block {
  const kette = ketteLesen(db);
  const letzter = kette.at(-1);
  const index = letzter ? letzter.index + 1 : 0;
  const prevHash = letzter ? letzter.hash : GENESIS_HASH;
  const merkle = merkleRoot(transaktionen.map(transaktionsHash));

  const kopf = { index, zeit, prevHash, merkleRoot: merkle };
  const { nonce, hash } = mine(kopf, schwierigkeit);

  db.prepare(
    "INSERT INTO block (idx, zeit, prev_hash, merkle_root, nonce, hash) " +
      "VALUES (?, ?, ?, ?, ?, ?)",
  ).run(index, zeit, prevHash, merkle, nonce, hash);

  const einfuegen = db.prepare(
    "INSERT INTO tx (block_idx, position, von, an, betrag) VALUES (?, ?, ?, ?, ?)",
  );
  transaktionen.forEach((tx, position) => {
    einfuegen.run(index, position, tx.von, tx.an, tx.betrag);
  });

  return { ...kopf, nonce, hash };
}

export type PruefErgebnis = {
  ok: boolean;
  fehler: string[];
  bloecke: number;
};

/**
 * Prüft die ganze Kette gegen die Datenbank.
 * Drei Fragen je Block: Stimmen die Verweise (prev_hash)? Stimmt die
 * Merkle-Wurzel zu den gespeicherten Transaktionen? Ergibt der Header
 * mit der gespeicherten nonce noch denselben Hash?
 */
export function kettePruefen(db: DatabaseSync): PruefErgebnis {
  const kette = ketteLesen(db);
  const fehler: string[] = [];

  if (kette.length === 0) {
    return { ok: true, fehler, bloecke: 0 };
  }

  kette.forEach((block, i) => {
    const erwarteterVorgaenger = i === 0 ? GENESIS_HASH : kette[i - 1].hash;
    if (block.index !== i) {
      fehler.push(`Block ${block.index}: Index passt nicht zur Position ${i}`);
    }
    if (block.prevHash !== erwarteterVorgaenger) {
      fehler.push(
        `Block ${block.index}: prev_hash verweist nicht auf Block ${i - 1}`,
      );
    }
    const txs = transaktionenLesen(db, block.index);
    const merkle = merkleRoot(txs.map(transaktionsHash));
    if (merkle !== block.merkleRoot) {
      fehler.push(
        `Block ${block.index}: merkle_root passt nicht zu den Transaktionen`,
      );
    }
    const neu = blockHash(block);
    if (neu !== block.hash) {
      fehler.push(`Block ${block.index}: gespeicherter Hash ist falsch`);
    }
  });

  return { ok: fehler.length === 0, fehler, bloecke: kette.length };
}

/**
 * Der Angriff: einen Betrag in der Datenbank ändern.
 * Genau das, was ein relationales UPDATE dürfte — und was die
 * Merkle-Wurzel des Blocks verrät.
 */
export function transaktionAendern(
  db: DatabaseSync,
  blockIndex: number,
  position: number,
  betrag: number,
): void {
  db.prepare(
    "UPDATE tx SET betrag = ? WHERE block_idx = ? AND position = ?",
  ).run(betrag, blockIndex, position);
}

/**
 * Nakamoto-Regel: Bei zwei konkurrierenden Ketten gewinnt die längere.
 * Bei Gleichstand bleibt die zuerst gesehene Kette.
 */
export function laengsteKette(a: Block[], b: Block[]): Block[] {
  return b.length > a.length ? b : a;
}
