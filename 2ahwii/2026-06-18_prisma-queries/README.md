# Prisma Queries & Relations

## Ablauf

1. **HÜ-Besprechung** (10 min)
   - Seed-Skripte anschauen
   - Nested creates vs. `connect` vergleichen

2. **Queries vertiefen** (20 min)
   - `findMany` mit `where`, `orderBy`, `take`/`skip`
   - `findUnique` — einzelnen Datensatz nach ID
   - `include` — Relationen mitladen
   - `select` — nur bestimmte Felder abfragen (Projektion)

3. **Update + Delete** (10 min)
   - `update`, `delete`, `deleteMany`
   - Löschverhalten bei Relationen (`onDelete: Cascade` vs. `SetNull`)

4. **Mini-Übung** (10 min)
   - 3-4 Abfragen auf der eigenen DB schreiben, z.B.:
     - Alle Votes eines bestimmten LLMs mit Sprache (`include`)
     - Top-3 Modelle nach Anzahl Votes (`orderBy` + `take`)
     - Alle Sprachen ohne Votes (`where` + Relation-Filter)

## HÜ bis 25. Juni

5 sinnvolle Prisma-Queries schreiben (`queries.ts`):
- Mindestens 2 mit `include` (Relationen laden)
- Mindestens 1 mit `where`-Filter auf Relationen
- Mindestens 1 mit `count` oder `groupBy`
- Ergebnisse per `console.log` ausgeben
