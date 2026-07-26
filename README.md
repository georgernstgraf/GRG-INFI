# GRG-INFI

Unterlagen, Übungen und Lösungen für den Informatik-Unterricht (Wirtschaftsingenieure – Betriebsinformatik) an der **HTL Spengergasse**.

> Schuljahr 2025/26 (Klasse 2AHWII) ist archiviert unter [`ARCHIV/2025-26-2ahwii/`](ARCHIV/2025-26-2ahwii/).
> Schuljahr 2026/27 (Klasse 3AHWII): Klassen-Drehscheibe + Semesterpläne unter [`3HWII/`](3HWII/), KM-Steckbriefe unter [`kompetenzmodule/`](kompetenzmodule/).
> Der offizielle Rahmenlehrplan und die Jahrgangs-Dokumente liegen unter [`docs/lehrplan/`](docs/lehrplan/).

---

## Beurteilung

Die Note setzt sich aus drei gleich gewerteten Bereichen zusammen:

| Bereich | Gewicht |
|---|---|
| PLF (Praxis-Leistungs-Feststellung) | 1/3 |
| Hausübungen | 1/3 |
| Mitarbeit | 1/3 |

Mitarbeit umfasst auch Schulübungen und Stundenwiederholungen; deren Qualität und
Intensität werden von der Lehrperson beurteilt.

## Hausübungen

- **Abgabe:** spätestens am nächsten Unterrichtstag **00:00 Uhr** (in der Regel eine Woche später).
- **Nachreichung:** jederzeit möglich – die erreichte Punktezahl zählt **75 %**.
- **Cutoff:** Genau **eine Woche vor dem Notenschluss, 00:00 Uhr**, ist Endtermin.
  Danach werden die Repos automatisiert ausgewertet.

## Organisatorisches

- **Toilettengang:** wortlos aufstehen, Blickkontakt mit der Lehrperson.

---

## Fach & Klasse

- **Gegenstand:** Informatik und Informationssysteme – Datenbanken & SQL
- **Klasse:** 3AHWII (3. Jahrgang, Abteilung Wirtschaftsingenieurwesen – Betriebsinformatik), SJ 2026/27
- **Lehrperson:** Georg Graf (2 h/Woche) + Kollege (1 h/Woche) — Details: [`3HWII/README.md`](3HWII/README.md)
- **Aktuelle Planung:** [`kompetenzmodule/km5.md`](kompetenzmodule/km5.md) · [`kompetenzmodule/km6.md`](kompetenzmodule/km6.md) · [`3HWII/semesterplan-ws.md`](3HWII/semesterplan-ws.md) · [`3HWII/semesterplan-ss.md`](3HWII/semesterplan-ss.md)

## Themen SJ 2025/26 (2AHWII, Archiv)

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

Eine detaillierte Aufschlüsselung findet sich im [Semesterplan](ARCHIV/2025-26-2ahwii/SEMESTERPLAN.md).

## Repository-Struktur

| Verzeichnis | Inhalt |
|-------------|--------|
| `3HWII/` | **SJ 2026/27:** Klassen-Drehscheibe 3AHWII inkl. SWP-Verbund-Doku + Semesterpläne (KM5/KM6, 13 UE + 2 PLF) |
| `kompetenzmodule/` | Didaktische KM-Steckbriefe (km5/km6 voll; km3/km4 rückgepflegt; km7–km9 Gerüste) |
| `ARCHIV/2025-26-2ahwii/` | Unterricht SJ 2025/26 (wöchentliche Ordner, Aufgaben, Lösungen, Hausübungen) – archiviert |
| `docs/lehrplan/` | Offizieller Rahmenlehrplan (Betriebsinformatik): LEHRPLAN (①-Extrakt), RIS-Recherche, METADATA, Jahrgangs-Dokumente |
| `docs/ai/` | Session-Dokumentation (HANDOFF, STATE) |
| `Leetcodes/` | SQL-LeetCode-Lösungen (EASY, z. B. Combine Two Tables, Duplicate Emails) |
| `Unterlagen/` | Lehrmaterial: Datenbank-Buch, ERD-PDFs, SQL-Injection-Demo, MS-Access-Archiv, SQL-Referenz |
| `sqlite-datenbanken/` | Gemeinsame SQLite-Datenbanken (w3schools, opentrivia) und Makefile zum Neuanlegen |
| `_Experimente/` | Experimentelle Projekte: Jupyter/Pandas, Mermaid-ERD, Prisma, nmap |

### ARCHIV/2025-26-2ahwii/ – Unterrichtsordner (Archiv SJ 2025/26)

Jeder Ordner folgt dem Schema `YYYY-MM-DD_thema/` und enthält:

- SQL-Übungsdateien (`.sql`)
- TypeScript/Deno-Skripte (`.ts`)
- Aufgabenstellungen (`.md`)
- Lösungen
- ggf. Wissensüberprüfungen und Mock-PLF

Begleitend gibt es:
- [`SEMESTERPLAN.md`](ARCHIV/2025-26-2ahwii/SEMESTERPLAN.md) – vollständiger Semesterverlauf
- [`Hausübungen.md`](ARCHIV/2025-26-2ahwii/Hausübungen.md) – archivierte Hausübungen

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
deno run --allow-read --allow-write ARCHIV/2025-26-2ahwii/2025-09-25_sqlite_mit_deno/main.ts

# Tests ausführen (wo vorhanden)
deno test

# W3Schools-DB neu anlegen
cd sqlite-datenbanken && make
```
