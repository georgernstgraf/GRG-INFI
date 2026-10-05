// db.ts — öffnet die Mini-Musik-DB in-memory aus dem Seed.
// Nur Deno + node:sqlite, kein Node, kein npm:, kein node_modules.
// Braucht --allow-read (Seed-Datei).
import { DatabaseSync } from "node:sqlite";

const seed = await Deno.readTextFile(
  new URL("./seed-musik-mini.sql", import.meta.url),
);

export function openDb(): DatabaseSync {
  const db = new DatabaseSync(":memory:");
  db.exec(seed);
  return db;
}
