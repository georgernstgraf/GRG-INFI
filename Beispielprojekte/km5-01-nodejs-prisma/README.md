# Praxis-Scaffold — Node.js + Prisma 7 + SQLite

Lauffähiges Referenzprojekt zur Prepared Lesson **KM5-01** (UE „Rep & ORM-Einstieg").
Bewusst **nur** für die DB-Werkzeugkette: Der Kurs bleibt bei Deno/TypeScript; Node
kommt dort zum Einsatz, wo Prisma 7 und `npm` es brauchen.

## Einrichten (einmalig)

```bash
npm install                      # prisma@7, @prisma/client@7, adapter, dotenv
# Node ≥ 22.6 blockt Install-Scripts standardmäßig:
npm approve-scripts --all        # erlaubt better-sqlite3 + Prisma-Engines
cp .env.example .env             # DATABASE_URL="file:./dev.db"
npm run db:migrate               # prisma migrate dev --name init
npm run db:seed                  # Mini-Musik-DB befüllen
```

> **Verifiziert (Frisch-Klon):** `npm install` → `migrate` → `seed` → `npm run run` → `npm test`
> läuft durch (5/5 Tests grün). Das `postinstall`-Script ruft beim Install `prisma generate`
> auf, damit der Client sofort existiert.

> **Wichtig:** Prisma **immer auf `@7` pinnen**. `npm i prisma` (ohne Version) zieht
> aktuell die 8.0.0-RC — genau die Falle aus der Stunde vom 22.09.

## Ausführen

```bash
npm run run     # die 5 Diagnose-Queries über die Prisma-API
npm test        # node:test — 5 Tests gegen den Seed
```

## Dateien

| Datei | Zweck |
|-------|-------|
| `prisma/schema.prisma` | Modelle `Label`, `Kuenstler`, `Song` (SQLite) |
| `prisma7.config.ts` | Prisma-CLI-Konfiguration (`datasource.url` aus `.env`) |
| `src/prisma.js` | `PrismaClient` + `PrismaBetterSqlite3`-Adapter |
| `src/seed.js` | idempotenter Seed (4 Künstler, 7 Songs, 1 ohne Label) |
| `src/queries.js` | die 5 Diagnose-Queries als Prisma-API (+ `$queryRaw`-Self-JOIN) |
| `test/queries.test.js` | `node:test`, 5 Assertions |

## Warum ein Driver Adapter?

Prisma 7 hat die Rust-Query-Engine entfernt. Der Client spricht die DB **nicht mehr
selbst** an, sondern über einen nativen Treiber:

```js
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL });
export const prisma = new PrismaClient({ adapter });
```

Unter Node ist `better-sqlite3` ein gewöhnliches natives Modul — kein Deno-Sonderweg
mehr. Genau darum dieser Wechsel.
