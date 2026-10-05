// queries_test.ts — prüft die vier Subquery-Formen der Lesson KM5-03.
// Start: deno task test
import { assertEquals } from "@std/assert";
import { openDb } from "./db.ts";

Deno.test("Skalar in WHERE: Songs über dem Durchschnitt", () => {
  const db = openDb();
  const rows = db.prepare(`
    SELECT titel FROM song
    WHERE dauer_sek > (SELECT AVG(dauer_sek) FROM song)
    ORDER BY dauer_sek DESC
  `).all() as { titel: string }[];
  assertEquals(rows.map((r) => r.titel), [
    "Freies Feld",
    "Hafenlicht",
    "Dust Choir",
    "TalEcho",
  ]);
  db.close();
});

Deno.test("Skalar in SELECT: Durchschnittsspalte ist 212.5", () => {
  const db = openDb();
  const row = db.prepare(`
    SELECT (SELECT ROUND(AVG(dauer_sek), 1) FROM song) AS durchschnitt
  `).get() as { durchschnitt: number };
  assertEquals(row.durchschnitt, 212.5);
  db.close();
});

Deno.test("Tabelle in FROM: Künstler mit 2+ Songs", () => {
  const db = openDb();
  const rows = db.prepare(`
    SELECT name, n FROM (
      SELECT k.name AS name, COUNT(*) AS n
      FROM kuenstler k JOIN song s ON s.kuenstler_id = k.id
      GROUP BY k.id
    ) AS t
    WHERE t.n >= 2
    ORDER BY t.n DESC, t.name
  `).all() as { name: string; n: number }[];
  assertEquals(rows.map((r) => r.name), ["Auer", "Demir", "Frei"]);
  db.close();
});

Deno.test("Zeile in WHERE: Auers längster Song ist Hafenlicht", () => {
  const db = openDb();
  const row = db.prepare(`
    SELECT titel FROM song
    WHERE (kuenstler_id, dauer_sek) =
          (SELECT kuenstler_id, MAX(dauer_sek) FROM song WHERE kuenstler_id = 1)
  `).get() as { titel: string };
  assertEquals(row.titel, "Hafenlicht");
  db.close();
});
