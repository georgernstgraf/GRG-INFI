# Normalformen — Prisma + SQLite unter Deno

Projekt-Scaffold für die Übung "Normalformen" (3AHWII). Deno-Projekt mit Prisma ORM 7 und SQLite.

## Warum dieser Setup-Weg?

Prisma 7 hat sich gegenüber Prisma 4/5 (den Zeiten der "Deno-Ärgernisse") grundlegend geändert:

| Altes Ärgernis | Status heute |
|---|---|
| Rust **Query Engine** (Binary-Download, postinstall-Scripte, Deno-Kompatibilitätsprobleme) | **Weggefallen.** Prisma 7 nutzt standardmäßig **Driver Adapters** — kein Query-Engine-Binary mehr zur Laufzeit |
| `previewFeatures = ["deno"]` Hack (Prisma 4/5) | Offiziell: `runtime = "deno"` im generator-Block, Prisma hat eigene **Deno-Guides** |
| Kein Lifecycle-Script-Support | Deno 2 unterstützt `nodeModulesDir: "auto"` + `--allow-scripts` sauber |

**Wichtig:** Prisma 7 braucht zwingend einen Driver Adapter. Für SQLite:
- `@prisma/adapter-better-sqlite3` (Standard-Weg; `better-sqlite3` ist ein natives Modul mit Build-Script)
- `@prisma/adapter-libsql` (Fallback, falls `better-sqlite3` unter Deno zickt — reiner WASM/JS-Pfad, kein natives Build-Step)

## Setup (CLI-Befehle)

> **Wichtig:** `npm:prisma` (ohne Version) löst aktuell Prisma **8.0.0-rc** auf, dessen `init`
> keine Schema-Scaffolding-Optionen mehr hat. Für dieses Projekt daher **Prisma 7 pinnen**:

```bash
# 1. Pakete installieren
deno add npm:prisma@7 npm:@prisma/client@7 npm:@prisma/adapter-better-sqlite3@7

# 2. node_modules + Lifecycle-Scripts (der kritische Schritt!)
deno install --allow-scripts

# 3. Prisma initialisieren (SQLite) — erzeugt prisma/schema.prisma,
#    prisma7.config.ts, .env und .gitignore
deno run -A npm:prisma@7 init --datasource-provider sqlite --output ../generated/prisma

# 4. Migration erstellen und Client generieren
deno task db:migrate --name init
```

## Konfiguration

### deno.json

```json
{
  "nodeModulesDir": "auto",
  "tasks": {
    "dev": "deno run --watch --allow-net --allow-read --allow-env main.ts",
    "db:migrate": "deno run -A --env-file=.env npm:prisma@7 migrate dev",
    "db:generate": "deno run -A --env-file=.env npm:prisma@7 generate",
    "db:studio": "deno run -A --env-file=.env npm:prisma@7 studio",
    "db:push": "deno run -A --env-file=.env npm:prisma@7 db push"
  },
  "imports": {
    "@std/assert": "jsr:@std/assert@1",
    "@prisma/client": "npm:@prisma/client@^7.0.0",
    "@prisma/adapter-better-sqlite3": "npm:@prisma/adapter-better-sqlite3@^7.0.0",
    "dotenv": "npm:dotenv@^17.0.0",
    "prisma": "npm:prisma@^7.0.0"
  }
}
```

### prisma/schema.prisma

```prisma
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
  runtime  = "deno" // erforderlich unter Deno
}

datasource db {
  provider = "sqlite"
}

// Beispiel-Model
model Beispiel {
  id   Int    @id @default(autoincrement())
  name String
}
```

### prisma7.config.ts

Wird von `init` erzeugt (heißt `prisma7.config.ts`, weil Prisma 8 daneben ein
`prisma.config.ts` verwenden würde). Die DB-URL steht hier, nicht im Schema:

```typescript
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"], // aus .env: DATABASE_URL="file:./dev.db"
  },
});
```

## Verwendung in main.ts

```typescript
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "./generated/prisma/client.ts"; // .ts nicht vergessen!

const adapter = new PrismaBetterSqlite3({ url: "file:./prisma/dev.db" });
export const prisma = new PrismaClient({ adapter });
```

## Fallback: libsql-Adapter

Falls `better-sqlite3` unter Deno Build-Probleme macht:

```bash
deno add npm:@prisma/adapter-libsql npm:libsql
```

```typescript
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "./generated/prisma/client.ts";

const adapter = new PrismaLibSql({ url: "file:./prisma/dev.db" });
export const prisma = new PrismaClient({ adapter });
```

## Nützliche Tasks

| Task | Befehl | Zweck |
|---|---|---|
| `deno task dev` | — | Server mit Watch-Mode starten |
| `deno task db:migrate --name <name>` | `prisma migrate dev` | Migration erstellen + Client generieren |
| `deno task db:generate` | `prisma generate` | Nur Client generieren |
| `deno task db:studio` | `prisma studio` | DB im Browser inspizieren |

## Hinweise

- **Berechtigungen:** Prisma braucht `--allow-read`, `--allow-write`, `--allow-env` → am einfachsten `-A` in den Task-Definitionen.
- **Import-Pfade:** Der generierte Client liegt in `generated/prisma/` — relative Imports brauchen unter Deno zwingend die `.ts`-Endung.
- **IDE:** Nach `prisma generate` ggf. Deno Language Server neu starten (Cmd/Ctrl+Shift+P → "Deno: Restart Language Server"), damit die Typen frisch sind.
- **Repo-Konvention:** Laut AGENTS.md nutzt das Repo sonst `node:sqlite` — Prisma via `npm:`-Specifier ist aber der offiziell unterstützte Weg unter Deno 2 und hier bewusst gewählt.
