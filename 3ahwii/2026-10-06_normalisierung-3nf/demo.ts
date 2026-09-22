// demo.ts — 3NF-Anomalie zum Anfassen (UE 2026-10-06).
// Nur Deno + node:sqlite, kein Node, kein npm:, kein node_modules.
import { DatabaseSync } from "node:sqlite";

// In-Memory-DB: nichts bleibt liegen, alles nachvollziehbar.
const db = new DatabaseSync(":memory:");

// Denormalisiert: Ort hängt transitiv an BestellNr via PLZ.
db.exec(
  `CREATE TABLE bestellung_denorm(bestell_nr INTEGER PRIMARY KEY, kunde TEXT, plz TEXT, ort TEXT)`,
);
db.prepare(`INSERT INTO bestellung_denorm VALUES (?, ?, ?, ?)`)
  .run(101, "Auer", "1020", "Wien");
db.prepare(`INSERT INTO bestellung_denorm VALUES (?, ?, ?, ?)`)
  .run(102, "Beck", "1020", "Wien");

// Änderungs-Anomalie: nur EINE der beiden Wien-Zeilen erwischt ...
db.prepare(`UPDATE bestellung_denorm SET ort = ? WHERE bestell_nr = ?`)
  .run("Wien (neu)", 101);
const widerspruch = db.prepare(
  `SELECT COUNT(DISTINCT ort) AS orte FROM bestellung_denorm WHERE plz = '1020'`,
).get() as { orte: number };
console.log(`PLZ 1020 hat ${widerspruch.orte} verschiedene Orte -> Anomalie!`);

// 3NF-Fix: Tatsache "PLZ -> Ort" steht genau einmal.
db.exec(`CREATE TABLE plz(plz TEXT PRIMARY KEY, ort TEXT)`);
db.exec(
  `CREATE TABLE bestellung(bestell_nr INTEGER PRIMARY KEY, kunde TEXT, plz TEXT REFERENCES plz(plz))`,
);
db.prepare(`INSERT INTO plz VALUES (?, ?)`).run("1020", "Wien");
db.prepare(`INSERT INTO bestellung VALUES (?, ?, ?)`).run(101, "Auer", "1020");
const orteNachFix = db.prepare(
  `SELECT COUNT(*) AS n FROM plz WHERE plz = '1020'`,
).get() as { n: number };
console.log(
  `PLZ-Tabelle hat ${orteNachFix.n} Zeile fuer 1020 -> genau einmal.`,
);

db.close();
