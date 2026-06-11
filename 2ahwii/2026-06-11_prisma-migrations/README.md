# Prisma Migrations + erster CRUD

## Ablauf

1. **HÜ-Besprechung** (10 min)
   - Datenmodell-Lösungen vergleichen (LLM-Übersetzungsplattform)
   - Häufige Fehler: Relationen, @@unique, Fremdschlüssel-Typen

2. **Migrations** (20 min)
   - `deno -A prisma migrate dev --name init` — erste Migration erstellen
   - Generiertes SQL in `prisma/migrations/` anschauen
   - Zweite Migration: Feld hinzufügen (z.B. `description String?` bei einem Modell)
   - `deno -A prisma migrate status` — Migrations-Status prüfen

3. **Generate + erster Client-Code** (15 min)
   - `deno -A prisma generate` — Client generieren
   - `PrismaClient` importieren (`import { PrismaClient } from "model";`)
   - Live coden: `create` + `findMany`

4. **Übung** (5 min)
   - Eigenes Schema aus HÜ migrieren
   - 2-3 Datensätze per `create` einfügen

## HÜ bis 18. Juni

Seed-Skript schreiben (`seed.ts`):
- Mindestens 5 sinnvolle Datensätze über mehrere Tabellen
- Relationen verwenden: nested `create` oder `connect`
- Ausführbar mit `deno run -A seed.ts`
