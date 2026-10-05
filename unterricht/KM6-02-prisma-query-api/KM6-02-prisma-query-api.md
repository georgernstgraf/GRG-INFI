# Prisma 7 — Query API &amp; CRUD (<Datum>)

Lesson: `lesson.html` im selben Ordner — alle CRUD-Operationen des Prisma Client
(`create`, `find*`, `update`, `upsert`, `delete`), `where`-Filter, `select`/`include`,
Aggregate, `$transaction` und `$queryRaw`.
- Verifiziertes Praxisprojekt: [`Beispielprojekte/km6-02-prisma-query-api/`](../../Beispielprojekte/km6-02-prisma-query-api/) (`npm run db:seed`, `npm run demo`, `npm test` — 9 Tests)
- Quiz „Query Language" am Lesson-Ende

## Aufgabe

Vorhersage → `findeMedienNachTag` ergänzen → atomare `$transaction` mit absichtlichem
Abbruch → API vs. `$queryRaw` vergleichen — Abgabe nach Vorgabe der Lehrperson
(Abschnitt „Aufgabe" am Lesson-Ende).

## Housekeeping

- Lehrplan: `lehrplan/infi-hwii/LEHRPLAN.md` (KM6, Bereich Datenbanken) · Steckbrief `lehrplan/infi-hwii/kompetenzmodule/km6.md`
- KM-Bezug: KM6 „Entwicklung von DB-Programmen" (Client-API); baut auf KM6-01 (Werkzeuge/Schema) auf, nutzt KM5 (Transaktionen/ACID)
- Runtime: **Node.js + tsx**, **TypeScript-Client** (`prisma-client`), Prisma 7 · SQLite via `@prisma/adapter-better-sqlite3`
