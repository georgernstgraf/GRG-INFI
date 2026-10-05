// demo.ts — Normalisierungs-Anomalien zum Anfassen (1NF, 2NF, 3NF).
// Nur Deno + node:sqlite, kein Node, kein npm:, kein node_modules.
// Laufen mit:  deno task demo
import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync(":memory:");

// --- 1NF: Liste in einer Zelle -------------------------------------
db.exec(
  `CREATE TABLE kunde_hobby_denorm(kunde_id INTEGER PRIMARY KEY, name TEXT, hobbys TEXT)`,
);
db.prepare(`INSERT INTO kunde_hobby_denorm VALUES (?, ?, ?)`)
  .run(1, "Auer", "Lesen, Schwimmen");

const treffer = db.prepare(
  `SELECT COUNT(*) AS n FROM kunde_hobby_denorm WHERE hobbys = 'Schwimmen'`,
).get() as { n: number };
console.log(
  `1NF: WHERE hobbys = 'Schwimmen' findet ${treffer.n} Zeilen (die Zelle ist eine Liste).`,
);

// 1NF-Fix: eine Zeile pro Wert.
db.exec(
  `CREATE TABLE hobby(kunde_id INTEGER, hobby TEXT, PRIMARY KEY(kunde_id, hobby))`,
);
db.prepare(`INSERT INTO hobby VALUES (?, ?)`).run(1, "Lesen");
db.prepare(`INSERT INTO hobby VALUES (?, ?)`).run(1, "Schwimmen");
const trefferFix = db.prepare(
  `SELECT COUNT(*) AS n FROM hobby WHERE hobby = 'Schwimmen'`,
).get() as { n: number };
console.log(`1NF-Fix: eine Zeile pro Wert -> ${trefferFix.n} Treffer.`);

// --- 2NF: partielle Abhängigkeit -----------------------------------
db.exec(
  `CREATE TABLE song_playlist_denorm(song_id INTEGER, playlist_id INTEGER, song_titel TEXT, PRIMARY KEY(song_id, playlist_id))`,
);
const insert = db.prepare(
  `INSERT INTO song_playlist_denorm VALUES (?, ?, ?)`,
);
insert.run(1, 10, "Silent Lines");
insert.run(1, 20, "Silent Lines");
db.prepare(
  `UPDATE song_playlist_denorm SET song_titel = ? WHERE song_id = 1 AND playlist_id = 10`,
).run("Silent Lines (neu)");

const titel = db.prepare(
  `SELECT COUNT(DISTINCT song_titel) AS n FROM song_playlist_denorm WHERE song_id = 1`,
).get() as { n: number };
console.log(
  `2NF: song_id 1 hat ${titel.n} verschiedene Titel (Titel hängt nur an song_id).`,
);

// 2NF-Fix: der Titel steht in der Song-Tabelle, genau einmal.
db.exec(`CREATE TABLE song(song_id INTEGER PRIMARY KEY, titel TEXT)`);
db.prepare(`INSERT INTO song VALUES (?, ?)`).run(1, "Silent Lines");
const titelFix = db.prepare(
  `SELECT COUNT(*) AS n FROM song WHERE song_id = 1`,
).get() as { n: number };
console.log(
  `2NF-Fix: der Titel steht ${titelFix.n} Mal fuer song_id 1.`,
);

// --- 3NF: transitive Abhängigkeit ----------------------------------
db.exec(
  `CREATE TABLE bestellung_denorm(bestell_nr INTEGER PRIMARY KEY, plz TEXT, ort TEXT)`,
);
db.prepare(`INSERT INTO bestellung_denorm VALUES (?, ?, ?)`).run(101, "1020", "Wien");
db.prepare(`INSERT INTO bestellung_denorm VALUES (?, ?, ?)`).run(102, "1020", "Wien");
db.prepare(
  `UPDATE bestellung_denorm SET ort = ? WHERE bestell_nr = 101`,
).run("Wien (neu)");

const orte = db.prepare(
  `SELECT COUNT(DISTINCT ort) AS n FROM bestellung_denorm WHERE plz = '1020'`,
).get() as { n: number };
console.log(
  `3NF: PLZ 1020 hat ${orte.n} verschiedene Orte (Ort hängt an PLZ).`,
);

db.close();
