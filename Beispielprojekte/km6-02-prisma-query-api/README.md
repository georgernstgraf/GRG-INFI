# Praxis — Prisma Client Query API & CRUD (TypeScript-Client, SQLite)

Lauffähiges Referenzprojekt zur Prepared Lesson **KM6-02** (Domäne Mediensammlung:
`Sammlung` 1:n `Medium`, `Medium` n:m `Tag`). Baut auf KM6-01 auf; das Schema hat
zusätzlich `Medium.bewertung` (für Aggregate und atomares `increment`).

## Einrichten

```bash
npm install
cp .env.example .env        # DATABASE_URL="file:./dev.db"
npm run db:migrate          # wendet die Migrationen an (init + bewertung)
npm run db:generate         # TypeScript-Client nach generated/prisma
npm run db:seed
```

## Ausführen

```bash
npm run demo                # führt jede CRUD-Operation einmal aus
npm test                    # Node-Testrunner über tsx (9 Tests, grün)
```

## Dateien

| Datei | Zweck |
|-------|-------|
| `src/db.ts` | `PrismaClient` + `PrismaBetterSqlite3`-Adapter |
| `src/crud.ts` | alle CRUD-Operationen als Funktionen (create/read/update/delete, Aggregate, `$transaction`, `$queryRaw`) |
| `src/demo.ts` | ruft jede Operation einmal auf und druckt das Ergebnis |
| `src/seed.ts` | idempotenter Seed (3 Sammlungen, 5 Medien, 3 Tags) |
| `test/crud.test.ts` | `node:test` über tsx — jeder CRUD-Zweig geprüft (9 Tests) |

## Stolpersteine (in der Lesson behandelt)

- **select und include nie mischen** — für Felder außerhalb von `select` gibt es keine Garantie.
- **`increment` statt `set`** beim atomaren Hochzählen (Race-Conditions).
- **`findUnique` nur auf eindeutigen Feldern** — sonst `findFirst`.
- **`$queryRaw` liefert BigInt** (`COUNT(*)` → `4n`).
- **Fehlercodes:** `P2025` (nicht gefunden), `P2002` (Unique verletzt).
