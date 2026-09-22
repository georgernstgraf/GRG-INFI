// main.ts — 5 Diagnose-Queries auf der Mini-Musik-DB (UE 2026-09-29).
// Nur Deno + node:sqlite, kein Node, kein npm:, kein node_modules.
// DB vorher anlegen: sqlite3 musik-mini.db < seed-musik-mini.sql
// Start: deno task run
import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("musik-mini.db");

// 1. Top-Künstler nach Track-Anzahl (JOIN + GROUP BY + ORDER + LIMIT).
const top = db.prepare(`
  SELECT k.name, COUNT(*) AS tracks
  FROM kuenstler k JOIN song s ON s.kuenstler_id = k.id
  GROUP BY k.id
  ORDER BY tracks DESC
  LIMIT 5
`).all();
console.log("Top-Kuenstler:", top);

// 2. Künstlerpaare desselben Labels (Self-JOIN, < gegen Doppelpaare).
const paare = db.prepare(`
  SELECT x.name AS a, y.name AS b, l.name AS label
  FROM kuenstler x
  JOIN kuenstler y ON x.label_id = y.label_id AND x.id < y.id
  JOIN label l ON l.id = x.label_id
`).all();
console.log("Label-Paare:", paare);

// 3. Labels mit mehr als einem Künstler (HAVING filtert Gruppen).
const volleLabels = db.prepare(`
  SELECT l.name, COUNT(*) AS n
  FROM kuenstler k JOIN label l ON l.id = k.label_id
  GROUP BY l.id
  HAVING COUNT(*) > 1
`).all();
console.log("Labels mit >1 Kuenstler:", volleLabels);

// 4. COUNT(*) vs. COUNT(label_id): ein Künstler hat kein Label (NULL).
const counts = db.prepare(`
  SELECT COUNT(*) AS alle, COUNT(label_id) AS mit_label FROM kuenstler
`).get() as { alle: number; mit_label: number };
console.log(`Kuenstler: ${counts.alle} gesamt, ${counts.mit_label} mit Label.`);

// 5. WHERE + HAVING kombiniert: lange Songs (>200s) je Künstler, nur Künstler mit 2+ langen Songs.
const lange = db.prepare(`
  SELECT k.name, COUNT(*) AS n
  FROM kuenstler k JOIN song s ON s.kuenstler_id = k.id
  WHERE s.dauer_sek > 200
  GROUP BY k.id
  HAVING COUNT(*) >= 2
`).all();
console.log("Kuenstler mit 2+ langen Songs:", lange);

db.close();
