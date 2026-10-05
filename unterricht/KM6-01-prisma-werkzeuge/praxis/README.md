# Praxis — Node + Prisma 7 (TypeScript-Client, SQLite)

Lauffähiges Referenzprojekt zur Prepared Lesson **KM6-01** (Domäne Mediensammlung:
`Sammlung` 1:n `Medium`, `Medium` n:m `Tag`).

## Einrichten

```bash
npm install                 # prisma@7, @prisma/client@7, Adapter, dotenv, tsx
cp .env.example .env        # DATABASE_URL="file:./dev.db"
npm run db:migrate -- --name init
npm run db:generate         # TypeScript-Client nach generated/prisma
npm run db:seed
```

## Ausführen

```bash
npm test                    # Node-Testrunner über tsx (3 Tests, grün)
npm run db:status           # Migrationsstand
npm run studio              # Prisma Studio (file://./dev.db)
```

## Werkzeuge ausprobieren

```bash
# Introspection einer Altdatenbank (DB -> Schema)
sqlite3 altbestand/legacy.db < altbestand/legacy.sql
DATABASE_URL="file:./altbestand/legacy.db" npx prisma db pull --print

# Prototyping ohne Migrationen (Schema -> DB)
npm run db:push
```

## Dateien

| Datei | Zweck |
|-------|-------|
| `prisma/schema.prisma` | Modelle + TypeScript-Generator (`prisma-client`) |
| `prisma7.config.ts` | CLI-Konfiguration (Schema, Migrationspfad, URL) |
| `src/db.ts` | `PrismaClient` + `PrismaBetterSqlite3`-Adapter |
| `src/seed.ts` | idempotenter Seed (3 Sammlungen, 5 Medien, 3 Tags) |
| `test/schema.test.ts` | `node:test` über tsx (3 Assertions) |
| `altbestand/legacy.sql` | Altdatenbank für die `db pull`-Demo |

## Stolpersteine (in der Lesson behandelt)

- **TypeScript-Client Pflicht:** Generator `prisma-client` (nicht `prisma-client-js`,
  das ist CommonJS und bricht unter ESM).
- **Node statt Deno:** Prisma 7 + SQLite ist mit Deno nicht kompatibel.
- **Prisma Studio + SQLite:** braucht die Doppel-Slash-URL `file://./dev.db`
  (die Konfigurations-URL `file:./dev.db` lehnt Studio ab).
- **`@7` pinnen:** ungepinnt zieht npm die Prisma-8-Vorabversion.
