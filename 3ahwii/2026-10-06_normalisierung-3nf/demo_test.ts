// demo_test.ts — Mini-Tests zur 3NF-Demo (Deno, ohne Node).
import { assertEquals } from "@std/assert";
import { DatabaseSync } from "node:sqlite";

// Prüft: Kette BestellNr -> PLZ -> Ort ist nach Zerlegung eindeutig.
Deno.test("plz-tatsache steht genau einmal", () => {
  const db = new DatabaseSync(":memory:");
  db.exec(`CREATE TABLE plz(plz TEXT PRIMARY KEY, ort TEXT)`);
  db.prepare(`INSERT INTO plz VALUES (?, ?)`).run("1020", "Wien");
  const row = db.prepare(`SELECT COUNT(*) AS n FROM plz WHERE plz = '1020'`)
    .get() as { n: number };
  assertEquals(row.n, 1);
  db.close();
});

// Prüft: Denormalisiert kann dieselbe PLZ zwei Orte haben (Anomalie).
Deno.test("denormalisiert erlaubt widerspruch", () => {
  const db = new DatabaseSync(":memory:");
  db.exec(`CREATE TABLE b(nr INTEGER PRIMARY KEY, plz TEXT, ort TEXT)`);
  db.prepare(`INSERT INTO b VALUES (?, ?, ?)`).run(1, "1020", "Wien");
  db.prepare(`INSERT INTO b VALUES (?, ?, ?)`).run(2, "1020", "Wien (neu)");
  const row = db.prepare(
    `SELECT COUNT(DISTINCT ort) AS n FROM b WHERE plz = '1020'`,
  ).get() as { n: number };
  assertEquals(row.n, 2);
  db.close();
});
