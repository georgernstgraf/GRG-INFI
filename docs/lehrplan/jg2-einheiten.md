# 2. Klasse – Einheitenplan (KM3 + KM4)

> **Status:** Rückgepflegt aus dem tatsächlich gehaltenen Unterricht im Schuljahr 2025/26 (Klasse 2AHWII).
> **Quelle:** [`../../ARCHIV/2025-26-2ahwii/`](../../ARCHIV/2025-26-2ahwii/) – Unterrichtsordner `YYYY-MM-DD_thema/` + [`SEMESTERPLAN.md`](../../ARCHIV/2025-26-2ahwii/SEMESTERPLAN.md) + [`Hausübungen.md`](../../ARCHIV/2025-26-2ahwii/Hausübungen.md) + [`README.md`](../../ARCHIV/2025-26-2ahwii/README.md).
> **Offizieller Lehrstoff:** siehe [`LEHRPLAN.md`](LEHRPLAN.md) – II. Jahrgang, Bereich Datenbanken (KM3 + KM4).

## Vorbemerkung

Die offizielle Aufteilung sieht **KM3 (ER-Modellierung/Relationenschema/Indizes/einfache Abfragen) im 3. Semester** und **KM4 (SQL-Abfragesprachen/Normalformen/Application) im 4. Semester** vor. Im realen Unterricht wurde **CRUD/Abfragen (KM4-Anteile) bereits ab Herbst** begonnen und die **Modellierung/DDL (KM3-Anteile) verstärkt im Frühjahr** vertieft. Inhaltlich ist alles abgedeckt, die *Sequenz* weicht also von der strikten Semester-Trennung ab. Die Einheiten unten spiegeln den tatsächlichen Verlauf wider; die KM-Bezüge formalisieren die Abdeckung.

**Fazit der Abdeckung:** 2. Klasse „sehr gut abgedeckt" – alle KM3-/KM4-Lehrstoffpunkte wurden mindestens berührt; Prisma/ORM als bewusste Übererfüllung (sic).

---

## 3. Semester – KM3 (Tatsächlicher Verlauf Herbst 2025)

### Einheit 1 – Setup & CRUD-Grundlagen
- Datum: 11.09.2025
- Archiv: [`2025-09-25_sqlite_mit_deno`](../../ARCHIV/2025-26-2ahwii/2025-09-25_sqlite_mit_deno/) (vgl. README-Eintrag)
- KM-Bezug: KM3 „einfache Datenbankabfragen" (Vorgriff) + Setup
- Inhalt: Git/VSCode-Workspace, `sqlite3`, `w3schools.sqlite`, SELECT/INSERT/UPDATE/DELETE
- HÜ: Workspace, Git-Commit, `sqlite3` testen

### Einheit 2 – SQLite mit Deno
- Datum: 25.09.2025
- Archiv: [`2025-09-25_sqlite_mit_deno`](../../ARCHIV/2025-26-2ahwii/2025-09-25_sqlite_mit_deno/)
- KM-Bezug: KM3 „einfache Datenbankabfragen" (Deno-Anbindung)
- Inhalt: `node:sqlite` in Deno, INSERT via TypeScript
- HÜ: Insert via Deno

### Einheit 3 – INSERT auf drei Wegen
- Datum: 02.10.2025
- Archiv: README-Eintrag (2025-10-02)
- KM-Bezug: KM3 „einfache Datenbankabfragen" (DML)
- Inhalt: INSERT im VSCode-Sqlite-Editor, in Konsole, in Deno
- HÜ: Screenshots der 3 Wege

### Einheit 4 – W3Schools SELECT, WHERE, LIKE, Vergleichsoperatoren
- Datum: 09.10.2025
- Archiv: README-Eintrag (2025-10-09)
- KM-Bezug: KM4 „Projektion, Selektion" (vorgezogen)
- Inhalt: W3Schools SQL bis WHERE, LIKE, `<`,`>`,`=`, `<>`
- HÜ: 5 SELECT-Statements (Kunden aus Berlin, London, Preis>20 etc.)

### Einheit 5 – PLF-Probe (SELECT, DISTINCT, ORDER BY, AND/OR/NOT)
- Datum: 23.10.2025
- Archiv: [`2025-10-23_sqlplfprobe`](../../ARCHIV/2025-26-2ahwii/2025-10-23_sqlplfprobe/)
- KM-Bezug: KM4 „Projektion, Selektion" (vorgezogen) + WHERE-Kombinationen
- Inhalt: Probe-PLF, DISTINCT, ORDER BY, boolesche Operatoren
- HÜ: PLF-Probe lösen (GitHub Classroom)

### Einheit 6 – Aggregatfunktionen SUM, AVG, LIKE (OpenTrivia)
- Datum: 06.11.2025
- Archiv: README-Eintrag (2025-11-06)
- KM-Bezug: KM4 „Aggregatfunktionen"
- Inhalt: `SUM()`, `AVG()`, `LIKE` auf `opentrivia.db`
- HÜ: 5 Statements auf OpenTrivia

### Einheit 7 – W3Schools bis COUNT und Aliase (Selbststudium)
- Datum: 13.11.2025
- Archiv: README-Eintrag (2025-11-13)
- KM-Bezug: KM4 „Aggregatfunktionen", „Projektion" (Aliase)
- Inhalt: COUNT/SUM/AVG bis Aliase
- HÜ: siehe Hausübungen.md

### Einheit 8 – SQL Joins
- Datum: 20.11.2025
- Archiv: README-Eintrag (2025-11-20, `joins`)
- KM-Bezug: KM4 „Verbund" (JOIN)
- Inhalt: JOINs (wahrscheinlich INNER JOIN auf w3schools/orders)
- HÜ: Join-Übungen

### Einheit 9 – Wiederholung / BUFFER
- Inhalt: Auffangen, Üben, Vertiefen GROUP BY / HAVING-Erstkontakt
- KM-Bezug: KM4 „Gruppierung, Aggregatfunktionen"

### Einheit 10–12 – Schriftliche PLF (Open Book) + Vorbesprechung
- Datum: 18.12.2025 (PLF)
- Archiv: SEMESTERPLAN.md (Dez 2025 – Schriftliche PLF)
- KM-Bezug: KM3+KM4 Gesamtschau
- Inhalt: PLF-Vorbereitung, Open-Book-Test am 18.12.
- HÜ: keine (PLF-Woche)

> *Hinweis: Das Wochenraster ist unvollständig dokumentiert (nicht jede Stunde im README); die hier gezeigten Einheiten sind die belegten Termine. Dazwischen liegende Stunden dienten Übung/Wiederholung.*

---

## 4. Semester – KM4 (Tatsächlicher Verlauf Frühjahr 2026)

### Einheit 1 – UNIQUE INDEX
- Datum: 29.01.2026
- Archiv: [`2026-01-29_unique_index`](../../ARCHIV/2025-26-2ahwii/2026-01-29_unique_index/)
- KM-Bezug: KM3 „Indizes"
- Inhalt: UNIQUE INDEX, `sqlite3 vacuum`, DML vs DDL Begriffe
- HÜ: siehe Hausübungen.md

### Einheit 2 – LeetCode SQL (freie Wahl)
- Datum: 19.02.2026
- Archiv: [`2026-02-19_knowledge`](../../ARCHIV/2025-26-2ahwii/2026-02-19_knowledge/)
- KM-Bezug: KM4 „Projektion, Selektion, Verbund" (Anwendung)
- Inhalt: 2 LeetCode SQL EASY lösen
- HÜ: 2 Leetcodes lösen

### Einheit 3 – Self-JOIN, Duplikate (LC182, LC196)
- Datum: 26.02.2026
- Archiv: [`2026-02-26_leetcodes`](../../ARCHIV/2025-26-2ahwii/2026-02-26_leetcodes/)
- KM-Bezug: KM4 „Verbund" (Self-JOIN)
- Inhalt: LC182 Duplicate Emails, LC196 Delete Duplicate Emails, Self-JOIN
- HÜ: 2 weitere EASY Leetcodes

### Einheit 4 – Wissensüberprüfung
- Datum: 05.03.2026
- Archiv: [`2026-03-05_knowledge`](../../ARCHIV/2025-26-2ahwii/2026-03-05_knowledge/)
- KM-Bezug: KM3+KM4 (Diagnose)
- Inhalt: Knowledge-Check; Schwächen: Self-JOIN-Details, COUNT(*) vs COUNT(col), WHERE vs HAVING, ORDER BY DESC mehrspaltig
- HÜ: keine (Wissensüberprüfung in der Stunde)

### Einheit 5 – DDL & Constraints (PK, FK, NOT NULL, UNIQUE, CHECK)
- Datum: 19.03.2026
- Archiv: [`2026-03-19_constraints`](../../ARCHIV/2025-26-2ahwii/2026-03-19_constraints/)
- KM-Bezug: KM3 „Schlüssel, Primärschlüssel, Fremdschlüssel, referentielle Integrität"
- Inhalt: `PRAGMA foreign_keys=ON`, PK/FK/NOT NULL/UNIQUE/CHECK
- HÜ: E-Commerce Inventar (categories, products + CHECK price>=0)

### Einheit 6 – N:M-Beziehungen, Zwischentabelle, Composite PK
- Datum: 09.04.2026
- Archiv: [`2026-04-09_n_m`](../../ARCHIV/2025-26-2ahwii/2026-04-09_n_m/)
- KM-Bezug: KM3 „Beziehungen, Kardinalitäten" + KM4 „Normalformen"-Vorläufer
- Inhalt: n:m über Bridge Table, Composite PK, ON DELETE/UPDATE, Indexes
- HÜ: Bibliothek (leser, buch, ausleihe, Indexes, Queries, Bonus VIEW)

### Einheit 7 – ER-Diagramme mit bigER
- Datum: 16.04.2026
- Archiv: [`2026-04-16_er`](../../ARCHIV/2025-26-2ahwii/2026-04-16_er/)
- KM-Bezug: KM3 „Datenmodellierung (konzeptioneller DB-Entwurf, Notation, Entities, Attribute, Beziehungen, Kardinalitäten)"
- Inhalt: bigER-Plugin, Crowsfoot-Notation, Entities vs Relationships, optionale Attribute
- HÜ: Bibliotheks-ER in bigER (`buecher.erd`)

### Einheit 8 – WHERE vs HAVING, Mock-PLF
- Datum: 23.04.2026
- Archiv: [`2026-04-23_where_having`](../../ARCHIV/2025-26-2ahwii/2026-04-23_where_having/)
- KM-Bezug: KM4 „Selektion, Gruppierung" (WHERE vs HAVING)
- Inhalt: Ausführungsreihenfolge, COUNT(*) vs COUNT(col), Self-JOIN-Vertiefung, Mock-PLF
- HÜ: LC180, LC586, LC596 + Mock-PLF korrigieren

### Einheit 9 – Übungen / Wiederholung
- Datum: 30.04.2026
- Archiv: [`2026-04-30_übungen`](../../ARCHIV/2025-26-2ahwii/2026-04-30_übungen/)
- KM-Bezug: KM3+KM4 (Festigung)
- Inhalt: PLF-Vorbereitung, schwierige Übungen
- HÜ: Mock-PLF fertigstellen

### Einheit 10 – Praktische Leistungsfeststellung (PLF)
- Datum: 07.05.2026
- Archiv: SEMESTERPLAN.md (PLF)
- KM-Bezug: KM3+KM4 Gesamtschau
- Inhalt: PLF Durchführung
- HÜ: keine (PLF-Woche)

### Einheit 11 – Musik-Streaming-ER (ER → SQL Übersetzung)
- Datum: 21.05.2026
- Archiv: [`2026-05-21_musik-streaming-er`](../../ARCHIV/2025-26-2ahwii/2026-05-21_musik-streaming-er/)
- KM-Bezug: KM3 „ein ER-Modell in Relationen auflösen" + KM4 „einfache Datenbankanwendung"
- Inhalt: ER-Diagramm Musik-Streaming, Bidirektionale Übersetzung ER↔SQL
- HÜ: siehe Tagesordner

### Einheit 12 – Prisma: Datenmodell (LLM-Übersetzungsplattform)
- Datum: 28.05.2026
- Archiv: [`2026-05-28_llm-translation-dm`](../../ARCHIV/2025-26-2ahwii/2026-05-28_llm-translation-dm/)
- KM-Bezug: KM4 „einfache Datenbankanwendung" + Übererfüllung (ORM)
- Inhalt: Prisma-Bootstrap, `schema.prisma`, `@@index`, Mermaid-ERD-Generator
- HÜ: Datenmodell LLM-Übersetzungsplattform (Entitäten, Schema, Indizes, ERD)

### Einheit 13 – Prisma Migrations + Client
- Datum: 11.06.2026
- Archiv: [`2026-06-11_prisma-migrations`](../../ARCHIV/2025-26-2ahwii/2026-06-11_prisma-migrations/)
- KM-Bezug: KM4 „einfache Datenbankanwendung" (ORM) + KM3 „Datenbankentwurf"
- Inhalt: `prisma migrate dev`, generiertes SQL, `generate`, `create`+`findMany`
- HÜ: `seed.ts` mit ≥5 Datensätzen, Relationen via nested create/connect

### Einheit 14 – Prisma Queries
- Datum: 18.06.2026
- Archiv: [`2026-06-18_prisma-queries`](../../ARCHIV/2025-26-2ahwii/2026-06-18_prisma-queries/)
- KM-Bezug: KM4 „Abfragen in SQL erstellen" (via ORM-Abstraktion)
- Inhalt: `findMany`, `findUnique`, `include`, `select`, `where`, `orderBy`, `take`/`skip`, Update/Delete, Löschverhalten bei Relationen
- HÜ: 5 Prisma-Queries (`queries.ts`: include, where, count/groupBy)

---

## Abdeckungstabelle (Soll vs. Ist)

| Lehrstoffpunkt (KM3/KM4) | Abgedeckt in | Status |
|---------------------------|--------------|--------|
| konzeptioneller DB-Entwurf, Notation, Entities, Attribute, Beziehungen, Kardinalitäten (KM3) | E7, E11 (bigER, Musik-ER) | ✓ |
| logischer DB-Entwurf, Relationenschema (KM3) | E11, E12 (ER→SQL, Prisma-Schema) | ✓ |
| Schlüssel, Schlüsselkandidat, Primärschlüssel (KM3) | E5 (DDL), E6 (Composite PK) | ✓ |
| Fremdschlüssel, referentielle Integrität (KM3) | E5 (FK, `PRAGMA foreign_keys`), E6 (ON DELETE) | ✓ |
| Indizes (KM3) | E1 (UNIQUE INDEX), E6 (Indexes) | ✓ |
| einfache Datenbankabfragen (KM3) | E1–E8 (durchgehend) | ✓ |
| Projektion, Selektion (KM4) | E4, E5 (PLF), E8 (WHERE/HAVING) | ✓ |
| Gruppierung, Aggregatfunktionen (KM4) | E6, E7 (SUM/AVG/COUNT) | ✓ |
| Verbund / JOIN (KM4) | E8 (Joins), E3 (Self-JOIN) | ✓ |
| Data Manipulation Language (KM4) | E2, E3 (INSERT via Deno/sqlite3) | ✓ |
| Normalformen (KM4) | streckenweise (N:M, Schema); *nicht explizit 1NF–3NF-Theorie* | ⚠ teilweise |
| Entwurf von Formularen und Berichten (KM4) | *nicht abgedeckt* (Plante SEMESTERPLAN, nicht durchgeführt) | ✗ |
| Abfragen in SQL / einfache DB-Anwendung (KM4) | E1–E14, E10 (PLF), E11–E14 (Prisma) | ✓ (Übererfüllung) |

**Bewertung:** Kern des KM3+KM4 (Modellierung, Relationenschema, Schlüssel/FK/Indizes, SQL, JOINs, Aggregation, DDL, N:M, ER) durchgehend abgedeckt. **Normalformen-Theorie** wurde nur im Rahmen von N:M/Zwischentabellen gestreift, nicht systematisch (1NF–3NF) – das ist ein acknowledgement für Jg III (KM5) oder eine bewusste Lücke. **Formulare/Berichte** entfielen zugunsten Prisma (ORM-Pfad).

---

## LERNZIELE / Erkenntnisse für Jg III (`jg3-einheiten.md`)

- **Mitnehmen als Vorwissen:** CRUD, JOIN, Self-JOIN, GROUP BY/HAVING, DDL/Constraints, N:M/Zwischentabelle, ER-Diagramm (bigER), Prisma-Grundlagen (Schema, Migrations, einfache Queries).
- **Lücke schließen:** Normalformen systematisch (wurde in Jg II nur gestreift) → in KM5/early KM6 nachholen.
- **Aufbauend:** komplexe Abfragen (Unterabfragen, CTEs) und DB-Applikation (Prisma vertieft, DB-Schnittstellen).