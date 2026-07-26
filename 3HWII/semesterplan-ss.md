# Semesterplan 3HWII INFI — Sommersemester 2027

Informatik und Informationssysteme (INFI) — KM6
(BGBl. II Nr. 262/2015 idF 235/2019, Anlage 1.24; Schichten: `docs/lehrplan/LEHRPLAN.md` +
`docs/lehrplan/RIS.md`)

**Zeitmodell:** 13 echte UE (1 DS/Woche à 2 h = Georgs Anteil am 2+1-Split) + 2 PLF-DS.
Offiziell 18 Schulwochen — Ausfälle einkalkuliert; bei Glücksfall Bonus-UE (siehe unten).
**Werkzeug:** Deno / TypeScript · **Prisma** (SQLite) · `node:sqlite` (Raw SQL) ·
`Deno.serve` (REST, framework-frei)
**KM-Steckbrief:** `kompetenzmodule/km6.md` · **Verbund mit SWP:** `3HWII/README.md`

> **Vorwissen aus KM5 (WS):** Unterabfragen, CTEs, Views, Normalformen, Transaktionen,
> DDL/Indizes, EXPLAIN. Prisma-Grundlagen aus Jg II (Schema, `migrate`, einfache Queries).
> **Parallel beim Kollegen (Vorschlag, TBD):** Use-Case-/Masken-Methodik, Benutzerführung
> (CLI/TUI), Reportgenerierung — siehe unten und `3HWII/README.md` → Kollegen-Soll.

---

## UE 1–4: Von ER zur Applikation — Prisma in der Tiefe

| UE | Thema | KM-Bezug (①) | Inhalt / HÜ |
|----|-------|--------------|--------------|
| 1 | **Von ER zur Applikation (Applikationsentwurf)** | KM6 „Anwendungsfälle (Applikationsentwurf)" | Von Problemstellung → ER → Relationen → Schema → Applikation; Use Cases identifizieren (CRUD pro Entity); Eingabemasken/Ausgabeformate festlegen *(Methodik-Teil: Kandidat Kollegen-Stunde)*. HÜ: Use-Case-Tabelle + ER für kleine Domäne (z. B. Sammlungsverwaltung) |
| 2 | **Prisma vertieft: Schema-Design & Migrations** | KM6 „Entwicklung von DB-Programmen" | Relationen (1:1, 1:n, n:m implizit/explizit), `@relation`, `onDelete`/`onUpdate`; Migrations als Versionskontrolle; mehrere aufeinanderfolgende Migrations; Reset & Shadow-DB. HÜ: Prisma-Schema für Sammlungs-Domäne, 2 Migrations |
| 3 | **Prisma Client: CRUD** | KM6 „Entwicklung von DB-Programmen" | `findUnique`, `update`, `delete`, `upsert`; `include` (Relationsladen) vs. `select` (Projektion); `where` mit AND/OR/Filtern. HÜ: CLI-Skript `sammlung.ts` mit CRUD-Commands |
| 4 | **Prisma Client: Aggregates & Transaktionen** | KM6 „Entwicklung von DB-Programmen" | `count`/`groupBy`/`aggregate`; `$transaction` (atomic, sequential) — Anschluss an ACID aus KM5 UE 10. HÜ: 1 Transaktion + 1 `groupBy`-Auswertung im CLI |

## UE 5–7: Sicherheit & genormte Schnittstellen

| UE | Thema | KM-Bezug ① | Inhalt / HÜ |
|----|-------|------------|--------------|
| 5 | **Prepared Statements & SQL-Injection** | KM6 „Entwicklung von DB-Programmen"; Sicherheit | Prepared Statements mit `node:sqlite` (`db.prepare`); warum parametrisiert?; SQL-Injection-Demo (Bobby Tables, `Unterlagen/sql_injection/`); Prisma (sicher by default) vs. Raw SQL. HÜ: verwundbares Skript analysieren + sicher machen |
| 6 | **DB-Schnittstellen I: REST-Grundlagen** | KM6 „genormte DB-Schnittstellen" | minimaler HTTP-Server (`Deno.serve`); Routen `GET /tracks` etc.; DB-Anbindung via Prisma; JSON als Format. HÜ: 3 GET-Endpunkte für Sammlungs-Domäne |
| 7 | **DB-Schnittstellen II: CRUD über REST** | KM6 „genormte DB-Schnittstellen" | POST/PUT/DELETE; Status-Codes (200/201/400/404/500); Validierung; Fehlerbehandlung; ein Endpunkt mit Transaktion. HÜ: vollständige CRUD-API (7 Endpunkte) |

> **PLF 1 (R1)** im Anschluss an UE 7 — Stoff: UE 1–7 (Prisma, Sicherheit, REST).

## UE 8–10: Reports, Optimierung & die Repository-Brücke (Verbund)

| UE | Thema | KM-Bezug ① | Inhalt / HÜ |
|----|-------|------------|--------------|
| 8 | **Reportgenerierung** *(Kandidat Kollegen-Stunde)* | KM6 „Reportgenerierung" | Ausgabeformate: CSV, Markdown-Tabelle, JSON; Reporting-Queries (Top-N, Gruppenvergleiche — CTEs aus KM5); `Deno.writeTextFile`-Export; kleiner „Dashboard"-CLI-Report. HÜ: 3 Report-Queries + Markdown-Export |
| 9 | **Strukturen analysieren & optimieren (+ TPH-Vorgriff)** | KM6 „Datenbankstrukturen analysieren/optimieren" i. e. S. d. Bildungsaufgabe | Schema-Review anhand von Use Cases; Index-Audit (EXPLAIN aus KM5 UE 9); Denormalisierung bewusst einsetzen; **TPH-Schema der Verbund-Domäne** (Discriminator + CHECK) — Domänenwahl gemeinsam mit SWP (SWP UE 9). HÜ: Peer-Review des Nachbarn-Schemas + TPH-Skizze |
| 10 | **Repository-Brücke: PrismaMediumRepository** | KM6 „genormte DB-Schnittstellen" + Verbund | INFI implementiert das von SWP definierte `interface MediumRepository` mit Prisma; `toDomain`-Mapper (Polymorphismus „hineinpfriemeln"); TPH vs. TPT-Diskussion. HÜ: Repository + Tests gegen das Interface |

## UE 11–13: Verbundprojekt mit SWP (eine App, zwei Noten)

> Lehrplan-Soll ①: „Anwendungsfälle … identifizieren", „Entwicklung von DB-Programmen",
> „Benutzerführung", „Reportgenerierung", „genormte DB-Schnittstellen" — Gesamtschau im Team.
> PM-Rahmung (Teams, Rollen, Issues): **SWP-Kollege (PRE)**; INFI↔SWP-Abstimmung: Georg.
> Details und Rubriken: `3HWII/README.md`.

| UE | Thema | KM-Bezug ① | Inhalt / HÜ |
|----|-------|------------|--------------|
| 11 | **Verbund: Integration & Implementation I** | KM6 Gesamtschau | Integration der Prisma-Schicht in die SWP-App (Desktop-GUI ↔ Repository); Seed-Daten (≥ 10); REST-API anbinden. HÜ: Team-Arbeit (Issues, PRs) |
| 12 | **Verbund: Implementation II & Qualität** | KM6 Gesamtschau | 2 Report-Endpunkte/Views; Tests (`Deno.test`); Performance-Check (Index-Audit anwenden); Bugfix-Runde. HÜ: Release-Stand |
| 13 | **Verbund: Präsentation & Reflexion** | KM6 Gesamtschau (Evaluation) | Demo (5 Min/Team): Schema, 2 interessante Abfragen, 1 Optimierung; Peer-Feedback; Reflexion: was aus KM5/KM6 steckt wo? — **Brücke zu Jg IV (ERP-Domänenwechsel!)**. HÜ: keine |

> **PLF 2 (R2)** im Anschluss an UE 13 — Verbundprojekt-Beitrag des/der Einzelnen als
> PLF-Äquivalent (Doppelbenotung SWP+INFI nach getrennten Rubriken; PM-Rubrik SWP-Kollege).

## Bonus-UE (optional, bei Ausfallfreiheit)

| UE | Thema | Anlass |
|----|-------|--------|
| +1 | **Benutzerführung/CLI-TUI mitführen** (`@cliffy/prompt`, ASCII-Tabellen, Bestätigungsdialoge) | falls Kollegen-Stunde anders belegt: KM6-Punkt „Benutzerführung" selbst abdecken |

## Reservierte DS (keine Lehr-UE)

| DS | Inhalt |
|----|--------|
| R1 | **PLF 1** (nach UE 7; Applikationsentwurf, Prisma, Prepared Statements, REST) |
| R2 | **PLF 2** (nach UE 13; Verbundprojekt-Anteil als PLF-Äquivalent) |

## Kollegen-Parallelnotiz (1 h/Woche, Vorschlag — TBD)

- **Use-Case-/Masken-Methodik** (UE 1, konzeptioneller Teil)
- **Benutzerführung/CLI-TUI** (KM6 „Benutzerführung" — zeitlich ~UE 8–10 passend)
- **Reportgenerierung** (UE 8)
- Absprache und Verteilung (wöchentlich/geblockt): `3HWII/README.md` → Offene Punkte.

---

**Schwerpunkte:** 4 UE Prisma in der Tiefe · 3 UE Sicherheit/Schnittstellen ·
3 UE Reports/Optimierung/Brücke · 3 UE Verbundprojekt
**SWP-Synchronisation:** SWP definiert das Repository-Interface (SWP UE 5); Domänenwahl
gemeinsam (SWP UE 9 ≙ INFI UE 9); INFI liefert die Prisma-Implementierung (UE 10), SWP
integriert (SWP UE 10–11); UE 11–13 gemeinsames Projekt. Details:
`3HWII/README.md` → Sequenz-Abstimmung.
