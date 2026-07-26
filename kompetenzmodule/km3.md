# KM3 — ER-Modellierung, Datenbankentwurf, DDL — Gerüst+

**Klasse/Semester:** 2HWII → 2AHWII, 3. Semester (WS, rückgepflegt SJ 2025/26)
**Wochenstunden:** 2 (schulautonom; offiziell 3(3) — Georg allein)
**Bereich:** Datenbanken
**Konkrete Einheiten:** `docs/lehrplan/jg2-einheiten.md` (Ist-Zustand aus dem
tatsächlich gehaltenen Unterricht) · Archiv: `ARCHIV/2025-26-2ahwii/`

## Worum geht es?

Einstieg in die Datenbankwelt: vom **konzeptionellen Datenbankentwurf** (ER-Modell,
bigER/Crowsfoot) über das **Relationenschema** (Schlüssel, Fremdschlüssel, Indizes,
referentielle Integrität) bis zur Umsetzung mit **DDL** in SQLite. Lehrplan-Kern (①):
„Aufgabenstellungen modellieren und in einem ER-Modell abbilden; ein ER-Modell in Relationen
auflösen; Tabellen und Beziehungen in einem DB-System erstellen."

**Besonderheit dieser Kohorte:** Der reale Verlauf mischte KM3- und KM4-Anteile
(CRUD/Abfragen bereits ab Herbst, Modellierung/DDL verstärkt im Frühjahr) — inhaltlich
alles abgedeckt, Sequenz weicht vom strikten Semester-Soll ab (Details:
`docs/lehrplan/jg2-einheiten.md`).

## Inhalte (Ist, SJ 2025/26)

- Setup: Git/VSCode-Workspace, `sqlite3`, `w3schools.sqlite`
- CRUD-Grundlagen (SELECT/INSERT/UPDATE/DELETE) — CLI, Editor und **Deno** (`node:sqlite`)
- DDL & Constraints: PK, FK (`PRAGMA foreign_keys=ON`), NOT NULL, UNIQUE, CHECK
- UNIQUE INDEX; DML- vs. DDL-Begrifflichkeit
- N:M-Beziehungen über Zwischentabelle, Composite PK, ON DELETE/UPDATE
- ER-Diagramme mit **bigER** (Crowsfoot-Notation), Entities vs. Relationships
- Musik-Streaming-ER: bidirektionale Übersetzung ER ↔ SQL

## Lücken / Übererfüllung

- ⚠ **Normalformen (1NF–3NF)** nur gestreift (im Rahmen von N:M/Schema) — ① erwartet sie
  in KM3 → systematischer Nachhol in **KM5** (siehe `km5.md`)
- ↑ Übererfüllung: Prisma-Grundlagen (Schema, Migrations, Client) bereits in Jg II
  berührt (eigentlich KM6-Terrain)

**Steckbrief-Ausbau:** erfolgt, falls Georg KM3/KM4 erneut unterrichtet. Nächste Stufe wäre:
Wissen/Verstehen/Können-Struktur wie `km5.md`.
