// main_test.ts — Diagnose-Queries gegen Seed prüfen (Deno, ohne Node).
// Seed vorher laden: sqlite3 test-mini.db < seed-musik-mini.sql
import { assertEquals } from "@std/assert";
import { DatabaseSync } from "node:sqlite";

function openSeed(): DatabaseSync {
  const db = new DatabaseSync("test-mini.db");
  return db;
}

Deno.test("top-kuenstler ist Auer mit 3 tracks", () => {
  const db = openSeed();
  const row = db.prepare(`
    SELECT k.name, COUNT(*) AS tracks
    FROM kuenstler k JOIN song s ON s.kuenstler_id = k.id
    GROUP BY k.id ORDER BY tracks DESC LIMIT 1
  `).get() as { name: string; tracks: number };
  assertEquals(row.name, "Auer");
  assertEquals(row.tracks, 3);
  db.close();
});

Deno.test("count-stern vs count-spalte zeigt einen label-losen", () => {
  const db = openSeed();
  const row = db.prepare(`
    SELECT COUNT(*) AS alle, COUNT(label_id) AS mit_label FROM kuenstler
  `).get() as { alle: number; mit_label: number };
  assertEquals(row.alle, 6);
  assertEquals(row.mit_label, 5);
  db.close();
});

Deno.test("labels mit mehr als einem kuenstler", () => {
  const db = openSeed();
  const rows = db.prepare(`
    SELECT l.name FROM kuenstler k JOIN label l ON l.id = k.label_id
    GROUP BY l.id HAVING COUNT(*) > 1 ORDER BY l.name
  `).all() as { name: string }[];
  assertEquals(rows.map((r) => r.name), ["Nordklang", "Suedton"]);
  db.close();
});
