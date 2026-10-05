// queries.ts — die vier Subquery-Formen der Lesson KM5-03 auf der Mini-Musik-DB.
// Nur Deno + node:sqlite, kein Node. Start: deno task demo
import { openDb } from "./db.ts";

const db = openDb();

// (1) Skalar in WHERE: Songs über dem Durchschnitt (ein einzelner Wert).
const ueberSchnitt = db.prepare(`
  SELECT titel, dauer_sek
  FROM song
  WHERE dauer_sek > (SELECT AVG(dauer_sek) FROM song)
  ORDER BY dauer_sek DESC
`).all();
console.log("Songs über dem Durchschnitt:", ueberSchnitt);

// (2) Skalar in SELECT: pro Zeile ein Vergleichswert in eigener Spalte.
const mitSchnitt = db.prepare(`
  SELECT titel,
         dauer_sek,
         (SELECT ROUND(AVG(dauer_sek), 1) FROM song) AS durchschnitt
  FROM song
  ORDER BY titel
`).all();
console.log("Mit Durchschnittsspalte (1 Zeile):", mitSchnitt[0]);

// (3) Tabelle in FROM: erst gruppieren, dann filtern (Alias in SQLite Pflicht).
const fleissige = db.prepare(`
  SELECT name, n
  FROM (
    SELECT k.name AS name, COUNT(*) AS n
    FROM kuenstler k JOIN song s ON s.kuenstler_id = k.id
    GROUP BY k.id
  ) AS t
  WHERE t.n >= 2
  ORDER BY t.n DESC, t.name
`).all();
console.log("Künstler mit 2+ Songs:", fleissige);

// (4) Zeile in WHERE: Tupelvergleich — Auers längster Song.
const auersLaengster = db.prepare(`
  SELECT titel, dauer_sek
  FROM song
  WHERE (kuenstler_id, dauer_sek) =
        (SELECT kuenstler_id, MAX(dauer_sek) FROM song WHERE kuenstler_id = 1)
`).get();
console.log("Auers längster Song:", auersLaengster);

db.close();
