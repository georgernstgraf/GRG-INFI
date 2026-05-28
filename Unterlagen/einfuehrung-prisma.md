# Einführung in Prisma

## 1. Was ist Prisma?

**Prisma** ist ein modernes Datenbank-Toolkit, das aus mehreren Komponenten besteht:

| Komponente | Aufgabe |
|-------------|---------|
| **Prisma Schema** | Deklarative Beschreibung der Datenbankstruktur (eigene Sprache) |
| **Prisma Client** | Typsicherer Datenbank-Client für TypeScript/JavaScript |
| **Prisma Migrate** | Automatische Generierung von SQL-Migrationen aus dem Schema |
| **Prisma Studio** | Grafisches Datenbank-UI (läuft im Browser) |

Im Gegensatz zu klassischen ORMs (Object-Relational Mapper) wie Hibernate oder Entity Framework bildet Prisma **keine Objekte mit Zustand** ab, sondern generiert einen **typsicheren Query-Builder**. Das bedeutet:

- **Kein "N+1"-Problem** – Prisma generiert optimierte SQL-Queries
- **Volle TypeScript-Unterstützung** – Der generierte Client kennt alle Typen
- **Klarer Workflow** – Schema → Migration → Client → Code

### Prisma im Vergleich

| Kriterium | Rohes SQL | Prisma |
|-----------|-----------|--------|
| Typsicherheit | Keine (nur Strings) | Vollständig (generierte Typen) |
| Migrationen | Manuell | Automatisch (mit Prisma Migrate) |
| Schema-Definition | CREATE TABLE (über mehrere Dateien verteilt) | Single Source of Truth (schema.prisma) |
| Relationship-Handling | Manuelle JOINs | Automatische relation queries (`include`, `select`) |
| Lernkurve | Niedrig | Mittel (Schema-Sprache lernen) |

---

## 2. Setup mit Deno und Prisma 6

### 2.1 Voraussetzungen

- **Deno 2.x** installiert
- **Node.js** (optional, nur für Prisma Studio benötigt)
- **VS Code-Erweiterung:** Prisma (offiziell)

### 2.2 deno.json konfigurieren

Das bewährte Setup aus dem Unterricht verwendet `npm:`-Spezifizierer, um Prisma 6 in Deno zu nutzen:

```json
{
  "tasks": {
    "dev": "deno run --watch main.ts"
  },
  "imports": {
    "@prisma/client": "npm:@prisma/client@^6.19.3",
    "prisma": "npm:prisma@^6.19.3",
    "model": "./prisma/client/client.ts"
  }
}
```

> **Hinweis:** Dank des `"prisma"`-Eintrags in `imports` kann Prisma direkt als `deno -A prisma <befehl>` aufgerufen werden — der `npm:`-Prefix entfällt.

**Wichtige Punkte:**
- `@prisma/client` und `prisma` werden via `npm:`-Prefix importiert
- Der Alias `"model"` zeigt auf den generierten Prisma Client (`client.ts`)
- Beide Pakete sollten **dieselbe Version** verwenden (hier `^6.19.3`)

### 2.3 VS Code-Einstellungen

Da Prisma 6 eine neue Generator-Engine verwendet, muss die VS Code-Erweiterung darauf hingewiesen werden:

```json
{
  "prisma.pinToPrisma6": true
}
```

Diese Einstellung in `.vscode/settings.json` stellt sicher, dass die Erweiterung Prisma 6-Features (wie `runtime = "deno"`) erkennt und keine Fehler anzeigt.

### 2.4 .gitignore

Folgende Dateien/Ordner sollten nicht versioniert werden:

```gitignore
prisma/client/
.env
*.db
*.sqlite
```

- `prisma/client/` – wird von `prisma generate` erzeugt
- `.env` – enthält (optional) die Datenbank-URL
- `*.db` / `*.sqlite` – binäre Datenbankdateien (nicht diffbar)
```

### 2.5 .env (Datenbank-URL)

Die Verbindungs-URL zur Datenbank wird in `.env` definiert:

```bash
DATABASE_URL="file:dev.db"
```

Diese Umgebungsvariable wird im `datasource`-Block der `schema.prisma` via `env("DATABASE_URL")` referenziert. Die `.env`-Datei ist (wie oben im `.gitignore` festgelegt) von der Versionierung ausgeschlossen – so kann jeder Entwickler seine eigene DB verwenden.

### 2.6 CLI-Grundbefehle

Dank des `"prisma"`-Imports in `deno.json` genügt die kurze Form:

```bash
# Client generieren (nach Schema-Änderung)
deno -A prisma generate

# Neue Migration erstellen
deno -A prisma migrate dev --name beschreibung

# Prisma Studio öffnen
deno -A prisma studio

# Schema formatieren
deno -A prisma format

# Schema validieren
deno -A prisma validate
```

> **Tipp:** `-A` erlaubt alle Permissions. Bei Prisma CLI ist das praktisch, da Lese-, Schreib- und Umgebungsvariablen-Zugriff benötigt werden.

---

## 3. Prisma Schema Language

### 3.1 Aufbau einer Schema-Datei

Eine `schema.prisma`-Datei besteht aus maximal drei Blöcken:

1. **`datasource`** – Datenbank-Verbindung
2. **`generator`** – Client-Generierung
3. **`model`** – Tabellen-Definitionen (beliebig viele)

```prisma
// 1. Datenquelle
datasource db {
    provider = "sqlite"
    url      = env("DATABASE_URL")
}

// 2. Generator
generator client {
    provider = "prisma-client"
    output   = "client"
    runtime  = "deno"
}

// 3. Modelle
model Kuenstler {
    id   Int     @id
    name String
}
```

### 3.2 Datasource

Die `datasource` definiert, mit welcher Datenbank gearbeitet wird:

```prisma
datasource db {
    provider = "sqlite"               // Datenbank-Typ
    url      = env("DATABASE_URL")    // Verbindungs-URL (aus .env)
}
```

**Unterstützte Provider:**

| Provider | Verbindungs-URL (Beispiel) |
|----------|---------------------------|
| `sqlite` | `file:meine.db` |
| `postgresql` | `postgresql://user:pass@host:5432/db` |
| `mysql` | `mysql://user:pass@host:3306/db` |
| `mongodb` | `mongodb://...` |

Im Unterricht verwenden wir ausschließlich **SQLite** (Datei-basiert, kein Server nötig).

### 3.3 Generator (Client)

Der Generator erzeugt den Prisma Client-Code:

```prisma
generator client {
    provider = "prisma-client"  // Immer gleich
    output   = "client"         // Output-Ordner (relativ zu prisma/)
    runtime  = "deno"           // Prisma 6: Code für Deno generieren
}
```

**Wichtig:** `runtime = "deno"` ist ein Prisma 6-Feature! Ohne diese Zeile würde Prisma Node.js-Code generieren, der in Deno nicht läuft.

Der generierte Client liegt dann in `prisma/client/client.ts` und wird via Import-Map als `"model"` importiert:

```typescript
import { PrismaClient } from "model";
```

### 3.4 Generator für ERD (Mermaid / PlantUML)

Neben dem Prisma Client kann man **mehrere Generatoren** in einer Schema-Datei definieren. Der `prisma-erd-generator` erstellt automatisch ein ERD-Diagramm aus dem Schema:

```prisma
generator client {
    provider = "prisma-client"
    runtime  = "deno"
    output   = "client"
}

generator erd {
    provider = "prisma-erd-generator"
    runtime  = "deno"
    output   = "./erd.md"
    format   = "mermaid"
}

datasource db {
    provider = "sqlite"
    url      = env("DATABASE_URL")
}
```

**Verfügbare Formate:**

| Format | Beschreibung |
|--------|--------------|
| `mermaid` | ERD im Mermaid.js-Format (direkt in Markdown einbettbar) |
| `plantuml` | ERD als PlantUML-Diagramm |

**Ausführung:**

```bash
# installiert prisma-erd-generator via npm:
deno -A prisma generate
```

Dazu muss `prisma-erd-generator` in der `deno.json` importiert werden:

```json
{
  "imports": {
    "prisma-erd-generator": "npm:prisma-erd-generator@^2.1.0"
  }
}
```

> **Achtung:** `prisma-erd-generator` ist ein externes Paket und muss bei Bedarf nachinstalliert werden. Es wird nicht im Lieferumfang von Prisma mitgeliefert.

### 3.5 Modelle & Felder

Ein **Modell** entspricht einer Tabelle in der Datenbank. Ein **Feld** entspricht einer Spalte.

```prisma
model Nutzer {
    id           Int      @id @default(autoincrement())
    benutzername String
    email        String
    premium      Boolean
    comment      String?
    playlists    Playlist[]
}
```

#### Daten-Typen

| Prisma-Typ | SQLite-Typ | Beschreibung |
|------------|------------|--------------|
| `String` | `TEXT` | Zeichenkette |
| `Int` | `INTEGER` | Ganzzahl |
| `Float` | `REAL` | Gleitkommazahl |
| `Boolean` | `BOOLEAN` | Wahr/Falsch (gespeichert als 0/1) |
| `DateTime` | `DATETIME` | Datum + Uhrzeit (ISO 8601) |
| `Json` | `TEXT` | JSON-Objekt (SQLite: als String) |

#### Feld-Modifikatoren

| Modifikator | Bedeutung | Beispiel |
|-------------|-----------|----------|
| `?` | Optional (nullable) | `String?` → kann `NULL` sein |
| `[]` | Liste (für Relationen) | `Playlist[]` → One-to-Many |

### 3.6 Attribute

Attribute werden mit `@` geschrieben und modifizieren Felder oder Modelle.

#### Feld-Attribute

| Attribut | Bedeutung | Beispiel |
|----------|-----------|----------|
| `@id` | Primärschlüssel | `id Int @id` |
| `@default(autoincrement())` | Auto-Increment | `id Int @id @default(autoincrement())` |
| `@default(now())` | Aktuelles Datum | `erstellt DateTime @default(now())` |
| `@unique` | Eindeutig (UNIQUE) | `email String @unique` |
| `@map("spalten_name")` | Abweichender Spaltenname | `name String @map("Name")` |
| `@relation(...)` | Fremdschlüssel-Beziehung | `nutzer Nutzer? @relation(...)` |

#### Modell-Attribute

| Attribut | Bedeutung | Beispiel |
|----------|-----------|----------|
| `@@unique([a, b])` | Zusammengesetzter UNIQUE-Constraint | `@@unique([authorId, title])` |
| `@@index([field])` | Index für Performance | `@@index([email])` |
| `@@map("tabellen_name")` | Abweichender Tabellenname | `@@map("users")` |

### 3.7 Relationen

Relationen definieren, wie Tabellen miteinander in Verbindung stehen.

#### 1:N (One-to-Many)

Ein Benutzer hat mehrere Playlists, eine Playlist gehört zu einem Benutzer:

```prisma
model Nutzer {
    id        Int        @id @default(autoincrement())
    playlists Playlist[]
}

model Playlist {
    id      Int      @id @default(autoincrement())
    nutzer  Nutzer?  @relation(fields: [nutzerId], references: [id])
    nutzerId Int?
}
```

**Erklärung:**
- `Nutzer.playlists: Playlist[]` – die "Eins"-Seite: ein Nutzer hat viele Playlists
- `Playlist.nutzer: Nutzer?` – die "Viele"-Seite: eine Playlist hat genau einen Nutzer (optional, daher `?`)
- `Playlist.nutzerId: Int?` – der Fremdschlüssel (muss denselben Typ haben wie `Nutzer.id`)
- `@relation(fields: [nutzerId], references: [id])` – verbindet Fremd- und Primärschlüssel

**Generiertes SQL:**

```sql
CREATE TABLE "Playlist" (
    "nutzerId" INTEGER,
    CONSTRAINT "Playlist_nutzerId_fkey"
        FOREIGN KEY ("nutzerId") REFERENCES "Nutzer"("id")
        ON DELETE SET NULL ON UPDATE CASCADE
);
```

#### N:M (Many-to-Many) – implizit

Ein Song kann in vielen Playlists sein, eine Playlist hat viele Songs:

```prisma
model Song {
    id        Int        @id @default(autoincrement())
    playlists Playlist[]
}

model Playlist {
    id    Int    @id @default(autoincrement())
    songs Song[]
}
```

Prisma erzeugt automatisch eine **Join-Tabelle** mit dem Namen `_PlaylistToSong`:

```sql
CREATE TABLE "_PlaylistToSong" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Playlist"("id") ON DELETE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Song"("id") ON DELETE CASCADE
);

CREATE UNIQUE INDEX "_PlaylistToSong_AB_unique" ON "_PlaylistToSong"("A", "B");
CREATE INDEX "_PlaylistToSong_B_index" ON "_PlaylistToSong"("B");
```

> **Wichtig:** Bei impliziten N:M-Relationen müssen **beide** Seiten ein `[]`-Feld haben. Die Join-Tabelle ist automatisch und muss nicht selbst definiert werden.

#### N:M (Many-to-Many) – explizit (mit Zusatzfeldern)

Wenn die Join-Tabelle eigene Felder haben soll (z.B. `position`, `createdAt`), definiert man sie als eigenes Modell mit zwei 1:N-Relationen:

```prisma
model Song {
    id         Int               @id @default(autoincrement())
    playlisteintraege PlaylistEintrag[]
}

model Playlist {
    id         Int               @id @default(autoincrement())
    playlisteintraege PlaylistEintrag[]
}

model PlaylistEintrag {
    id         Int      @id @default(autoincrement())
    position   Int
    song       Song     @relation(fields: [songId], references: [id])
    songId     Int
    playlist   Playlist @relation(fields: [playlistId], references: [id])
    playlistId Int

    @@unique([songId, playlistId])
}
```

---

## 4. Migrationen

### 4.1 Was sind Migrationen?

Eine **Migration** beschreibt eine Änderung des Datenbank-Schemas – von der ersten Tabelle bis zur letzten Spalten-Änderung. Jede Migration ist eine einzelne `.sql`-Datei, die die Änderungen enthält.

Prisma vergleicht den aktuellen Zustand der Datenbank mit dem Schema (`schema.prisma`) und generiert automatisch die nötigen SQL-Befehle.

### 4.2 Arbeitsablauf

```
Schema ändern → Migration erstellen → Migration anwenden → Client generieren
```

**Befehl:**

```bash
deno -A prisma migrate dev --name beschreibung
```

- `migrate dev` – erzeugt eine neue Migration und wendet sie an
- `--name` – eine kurze Beschreibung der Änderung (z.B. `nutzer_comment_added_column`)

### 4.3 Beispiel: Init-Migration

Ausgangsschema (gekürzt):

```prisma
model Nutzer {
    id           Int      @id @default(autoincrement())
    benutzername String
    email        String
    premium      Boolean
}
```

Migration `20260521133127_init/migration.sql`:

```sql
-- CreateTable
CREATE TABLE "Nutzer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "benutzername" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "premium" BOOLEAN NOT NULL
);
```

Prisma erzeugt aus dem Schema automatisch das passende `CREATE TABLE`-Statement.

### 4.4 Beispiel: ALTER TABLE (Spalte hinzufügen)

Nachträgliche Änderung am Schema:

```prisma
model Nutzer {
    ...
    comment String?  // neu: optionales Kommentar-Feld
}
```

Migration `20260521135702_nutzer_comment_added_column/migration.sql`:

```sql
-- AlterTable
ALTER TABLE "Nutzer" ADD COLUMN "comment" TEXT;
```

Nur die tatsächliche Änderung wird migriert – bestehende Daten bleiben erhalten. Da `comment` optional ist (`String?`), ist kein `DEFAULT`-Wert nötig.

### 4.5 Migration Lock File

`prisma/migrations/migration_lock.toml` wird automatisch erstellt:

```toml
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "sqlite"
```

Dieses File stellt sicher, dass alle Migrationen mit demselben Datenbank-Provider erstellt wurden. Es sollte **immer** im Git mitverfolgt werden.

### 4.6 Wichtige Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `migrate dev --name x` | Neue Migration erstellen + anwenden (Entwicklung) |
| `migrate deploy` | Ausstehende Migrationen anwenden (Produktion) |
| `migrate reset` | Datenbank löschen + alle Migrationen neu anwenden |
| `migrate status` | Zeigt an, ob alle Migrationen angewendet sind |

### 4.7 Wann eine neue Migration?

Jedes Mal, wenn du das Schema änderst:

```
Feld hinzufügen        → neue Migration
Feld löschen           → neue Migration
Typ ändern             → neue Migration
Neues Modell           → neue Migration
Relation ändern        → neue Migration
```

**Nicht** bei:

- Änderungen an `seed.ts` (keine Schema-Änderung)
- Änderungen an `deno.json` (keine Schema-Änderung)
- Neuen Query-Abfragen (betrifft nur Code, nicht Schema)

---

## 5. Prisma Client & CRUD

### 5.1 Client importieren

Nachdem `prisma generate` ausgeführt wurde, kann der Client importiert werden:

```typescript
import { PrismaClient } from "model";
const prisma = new PrismaClient();
```

Der Alias `"model"` wird in `deno.json` auf `./prisma/client/client.ts` gemappt.

### 5.2 CRUD-Operationen

#### Create – Datensatz anlegen

```typescript
const user = await prisma.nutzer.create({
  data: {
    benutzername: "MaxMustermann",
    email: "muster@max.com",
    premium: true,
  },
});
```

#### Find Many – mehrere Datensätze lesen

```typescript
const users = await prisma.nutzer.findMany({
  where: { premium: true },
  orderBy: { benutzername: "asc" },
});
```

#### Find Unique – einzelnen Datensatz lesen (nach ID)

```typescript
const user = await prisma.nutzer.findUnique({
  where: { id: 1 },
});
```

#### Update – Datensatz aktualisieren

```typescript
const user = await prisma.nutzer.update({
  where: { id: 1 },
  data: { email: "neue@email.com" },
});
```

#### Delete – Datensatz löschen

```typescript
await prisma.nutzer.delete({
  where: { id: 1 },
});
```

#### Include – Relationen mitladen

```typescript
const user = await prisma.nutzer.findUnique({
  where: { id: 1 },
  include: { playlists: true },
});
// Ergebnis enthält: user.playlists – Array aller Playlists des Nutzers
```

### 5.3 Seed-Skript

Ein Seed-Skript befüllt die Datenbank mit Testdaten. Es wird mit `deno run -A seed.ts` ausgeführt:

```typescript
import { PrismaClient } from "model";
const prisma = new PrismaClient();

await prisma.nutzer.create({
  data: {
    id: 1,
    benutzername: "MaxMustermann",
    email: "muster@max.com",
    premium: true,
    comment: "Dies ist ein Kommentar zu Max Mustermann.",
  },
});

console.log("Seed abgeschlossen.");
```

> **Hinweis:** Deno unterstützt `await` auf oberster Ebene – kein `async function main()` nötig.

---

## 6. Befehls-Referenz

### Prisma CLI

Dank des `"prisma"`-Imports in `deno.json` werden Prisma-Befehle so ausgeführt:

```bash
deno -A prisma <befehl>
```

| Befehl | Beschreibung | Wann verwenden? |
|--------|--------------|-----------------|
| `generate` | Generiert den Prisma Client aus dem Schema | Nach jeder Schema-Änderung |
| `migrate dev --name x` | Erstellt + wendet eine neue Migration an | Bei Schema-Änderung (Entwicklung) |
| `migrate deploy` | Wendet ausstehende Migrationen an | Produktion / Deployment |
| `migrate reset` | Löscht DB + führt alle Migrationen neu aus | Nur bei Entwicklungs-DB |
| `migrate status` | Zeigt Migrations-Status | Um zu prüfen, ob DB aktuell ist |
| `studio` | Öffnet Prisma Studio (GUI) | Daten abfragen / bearbeiten |
| `format` | Formatiert die schema.prisma | Vor dem Commit |
| `validate` | Prüft das Schema auf Fehler | Nach größeren Änderungen |

### Typischer Workflow

```bash
# 1. Schema ändern (in prisma/schema.prisma)

# 2. Migration erstellen + anwenden
deno -A prisma migrate dev --name mein_feature

# 3. Client generieren
deno -A prisma generate

# 4. Seed (optional)
deno run -A seed.ts

# 5. Code schreiben und testen
deno task dev
```

---

## 7. Zusammenfassung

- **Prisma** ist ein modernes Datenbank-Toolkit mit Schema, Client, Migrate und Studio
- Die **Schema Language** beschreibt die gesamte Datenbankstruktur in einer Datei
- **Relationen** werden deklarativ definiert – Prisma erzeugt automatisch JOIN-Tabellen für N:M
- **Migrationen** werden automatisch aus Schema-Änderungen generiert
- Der **Prisma Client** ist typsicher und unterstützt `create`, `read`, `update`, `delete`
- **Prisma 6** bietet `runtime = "deno"` für nativen Deno-Support
- **Mehrere Generatoren** können gleichzeitig verwendet werden (Client + ERD via `prisma-erd-generator`)
