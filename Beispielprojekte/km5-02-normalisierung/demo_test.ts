// demo_test.ts — Mini-Tests zu den drei Anomalien (Deno, ohne Node).
// Laufen mit:  deno task test
import { assertEquals } from "@std/assert";
import { DatabaseSync } from "node:sqlite";

Deno.test("1NF: Liste in der Zelle bricht die Gleichheitssuche", () => {
  const db = new DatabaseSync(":memory:");
  db.exec(
    `CREATE TABLE kunde_hobby_denorm(kunde_id INTEGER PRIMARY KEY, hobbys TEXT)`,
  );
  db.prepare(`INSERT INTO kunde_hobby_denorm VALUES (?, ?)`)
    .run(1, "Lesen, Schwimmen");
  const row = db.prepare(
    `SELECT COUNT(*) AS n FROM kunde_hobby_denorm WHERE hobbys = 'Schwimmen'`,
  ).get() as { n: number };
  assertEquals(row.n, 0); // die Zelle ist "Lesen, Schwimmen", nicht "Schwimmen"
  db.close();
});

Deno.test("2NF: partielle Abhängigkeit erlaubt widersprüchliche Titel", () => {
  const db = new DatabaseSync(":memory:");
  db.exec(
    `CREATE TABLE sp(song_id INTEGER, playlist_id INTEGER, song_titel TEXT, PRIMARY KEY(song_id, playlist_id))`,
  );
  db.prepare(`INSERT INTO sp VALUES (?, ?, ?)`).run(1, 10, "Silent Lines");
  db.prepare(`INSERT INTO sp VALUES (?, ?, ?)`).run(1, 20, "Silent Lines (neu)");
  const row = db.prepare(
    `SELECT COUNT(DISTINCT song_titel) AS n FROM sp WHERE song_id = 1`,
  ).get() as { n: number };
  assertEquals(row.n, 2);
  db.close();
});

Deno.test("3NF: transitive Abhängigkeit erlaubt widersprüchliche Orte", () => {
  const db = new DatabaseSync(":memory:");
  db.exec(`CREATE TABLE b(bestell_nr INTEGER PRIMARY KEY, plz TEXT, ort TEXT)`);
  db.prepare(`INSERT INTO b VALUES (?, ?, ?)`).run(1, "1020", "Wien");
  db.prepare(`INSERT INTO b VALUES (?, ?, ?)`).run(2, "1020", "Wien (neu)");
  const row = db.prepare(
    `SELECT COUNT(DISTINCT ort) AS n FROM b WHERE plz = '1020'`,
  ).get() as { n: number };
  assertEquals(row.n, 2);
  db.close();
});

Deno.test("3NF-Fix: PLZ -> Ort steht genau einmal", () => {
  const db = new DatabaseSync(":memory:");
  db.exec(`CREATE TABLE plz(plz TEXT PRIMARY KEY, ort TEXT)`);
  db.prepare(`INSERT INTO plz VALUES (?, ?)`).run("1020", "Wien");
  const row = db.prepare(
    `SELECT COUNT(*) AS n FROM plz WHERE plz = '1020'`,
  ).get() as { n: number };
  assertEquals(row.n, 1);
  db.close();
});
