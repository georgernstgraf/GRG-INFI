# GRG-INFI

Unterlagen, Übungen und Lösungen für den Informatik-Unterricht der **Klasse 2AHWII** an der **HTL Spengergasse** (Schuljahr 2025/26).

## Fach & Klasse

- **Gegenstand:** Informatik – Datenbanken & SQL
- **Klasse:** 2AHWII (2. Jahrgang, Abteilung Wirtschaftsingenieurwese – Informatik)
- **Lehrperson:** Georg Graf

## Themen (bisher)

| Zeitraum | Themen |
|----------|--------|
| Sep 2025 | Git-Setup, SQLite, CRUD (SELECT, INSERT, UPDATE, DELETE) |
| Okt 2025 | W3Schools SQL (WHERE, LIKE, ORDER BY), INSERT via Deno/TypeScript |
| Nov 2025 | Aggregatfunktionen (COUNT, SUM, AVG), GROUP BY, HAVING, JOINs |
| Dez 2025 | Schriftliche PLF (Open Book) |
| Jän 2026 | UNIQUE INDEX |
| Feb 2026 | SQL LeetCode (Self-JOIN, Duplikate) |
| Mär 2026 | Wissenüberprüfungen, DDL & Constraints (PK, FK, NOT NULL, CHECK) |
| Apr 2026 | N:M-Beziehungen, ER-Diagramme (bigER, Crowsfoot-Notation), WHERE vs HAVING |
| Mai 2026 | PLF, ER-zu-SQL-Übersetzung, Musik-Streaming-ER (Prisma) |
| Juni 2026 (geplant) | Normalisierung (1NF–3NF), CASE/COALESCE, Views & CTEs, Transaktionen, Mini-Projekt |

Eine detaillierte Aufschlüsselung findet sich im [Semesterplan](2ahwii/SEMESTERPLAN.md).

## Repository-Struktur

| Verzeichnis | Inhalt |
|-------------|--------|
| `2ahwii/` | Wöchentliche Unterrichtsordner mit Aufgaben, Lösungen und Hausübungen |
| `Leetcodes/` | SQL-LeetCode-Lösungen (EASY, z. B. Combine Two Tables, Duplicate Emails) |
| `Unterlagen/` | Lehrmaterial: Datenbank-Buch, ERD-PDFs, SQL-Injection-Demo, MS-Access-Archiv, SQL-Referenz |
| `sqlite-datenbanken/` | Gemeinsame SQLite-Datenbanken (w3schools, opentrivia) und Makefile zum Neuanlegen |
| `_Experimente/` | Experimentelle Projekte: Jupyter/Pandas, Mermaid-ERD, Prisma, nmap |

### 2ahwii/ – Unterrichtsordner

Jeder Ordner folgt dem Schema `YYYY-MM-DD_thema/` und enthält:

- SQL-Übungsdateien (`.sql`)
- TypeScript/Deno-Skripte (`.ts`)
- Aufgabenstellungen (`.md`)
- Lösungen
- ggf. Wissensüberprüfungen und Mock-PLF

Begleitend gibt es:
- [`SEMESTERPLAN.md`](2ahwii/SEMESTERPLAN.md) – vollständiger Semesterverlauf
- [`Hausübungen.md`](2ahwii/Hausübungen.md) – archivierte Hausübungen
- [`RULES.md`](2ahwii/RULES.md) – Bewertung & Abgaberegeln

### Leetcodes/ – SQL-Algorithmen

SQL-LeetCode-Probleme mit `init.sql` (Tabellen-Setup) und `sol.sql` (Lösung). Enthält derzeit 7 Aufgaben, u. a.:

- Combine Two Tables (JOIN)
- Employees Earning More Than Manager (Self-JOIN)
- Duplicate Emails (GROUP BY)
- Recyclable and Low Fat Products

### Unterlagen/ – Lehrmaterial

- **Buch_Datenbanken_2HWII/** – 12-teiliges Datenbank-Skriptum (Grundlagen, Relationale DBMS, Normalisierung, SQL, Java, .NET)
- **ERD/** – PDFs zu ER-Modellierung (Stefan Brass, Redgate)
- **sql_injection/** – SQL-Injection-Demo (Little Bobby Tables) mit Beispielcode
- **ms_access_archiv/** – Historische Access-Übungen (Archiv)
- **sql_referenz/** – SQL-Referenzmaterial (Spickzettel, CTE-Guide, …)

### sqlite-datenbanken/

Gemeinsam genutzte SQLite-Datenbanken:

- `w3schools.sqlite` – Übungsdatenbank (Northwind-Schema)
- `opentrivia.db` – OpenTrivia-Fragen
- `some_primes.db` – Primzahlen
- `Makefile` – `make` legt w3schools neu an

### _Experimente/

Spielwiese für Technologie-Experimente:

- `jupyter-notebook/` – Pandas-Notebook
- `mermaid-erd/` – ER-Diagramme via Mermaid + Prisma
- `nmap-klumpert/` – nmap-Experimente

## Technologie-Stack

| Technologie | Verwendung |
|-------------|-----------|
| **Deno** | TypeScript-Runtime für Datenbank-Skripte |
| **SQLite** | Eingebettete Datenbank (über `node:sqlite`) |
| **bigER** | VSCode-Plugin für ER-Diagramme (Crowsfoot-Notation) |
| **Prisma** | ORM für das Musik-Streaming-ER-Projekt |
| **Mermaid** | ER-Diagramme als Markdown-Code |

## Verwendung

```bash
# SQLite-Datenbank öffnen
sqlite3 sqlite-datenbanken/w3schools.sqlite

# Deno-Skript ausführen
deno run --allow-read --allow-write 2ahwii/2025-09-25_sqlite_mit_deno/main.ts

# Tests ausführen (wo vorhanden)
deno test

# W3Schools-DB neu anlegen
cd sqlite-datenbanken && make
```

## Bewertung (Semester)

Siehe [`RULES.md`](RULES.md) und [`2ahwii/RULES.md`](2ahwii/RULES.md).
