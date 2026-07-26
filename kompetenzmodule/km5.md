# KM5 — Komplexe Abfragen, Optimierung, Benutzerverwaltung

**Klasse/Semester:** 3HWII, 5. Semester (WS 2026/27)
**Wochenstunden (schulautonom):** 3 — davon **Georg 2 h** (1 DS/Woche) + **Kollege 1 h**
**Zeitmodell:** 13 echte UE + 2 PLF-DS
**Bereich:** Datenbanken (**Georg**: SQL-Kern · **Kollege**: Nicht-SQL-Anteile, Vorschlag unten)
**Konkreter Semesterplan:** `3HWII/semesterplan-ws.md` · **Verbund mit SWP:** `3HWII/README.md`

## Worum geht es?

KM5 macht aus dem „SQL-Grundhandwerk" der 2. Klasse (CRUD, JOIN, GROUP BY — flüssig aus Jg II
mitgebracht) **Abfrage-Kompetenz auf produktivem Niveau**. Drei Fragen stehen im Zentrum:

1. **„Wie formuliere ich eine schwierige Frage als eine lesbare Abfrage?"** Unterabfragen
   (skalar, korreliert, `EXISTS`), CTEs als Strukturierungswerkzeug, Views als wiederverwendbare
   Sichten — der konzeptionelle Kern des Semesters.
2. **„Warum ist diese Abfrage langsam — und wie mache ich sie schnell?"** Normalformen
   (Lückenschluss aus Jg II: ① erwartet sie bereits in KM3), Indizes und
   `EXPLAIN QUERY PLAN` — vom Raten zum Messen.
3. **„Wie bleibt die Datenbank konsistent und kontrolliert?"** Transaktionen/ACID,
   DDL als Schema-Evolution, Benutzerverwaltung/DCL als Konzept (in SQLite nur beschränkt
   abbildbar → PostgreSQL-Demo).

Flankierend: **Datenimport/-export & Archivierung** (Betriebssicht) und ein Mini-Projekt als
Gesamtschau vor PLF 2. Das Semester bleibt **SQL-nah** (SQLite, `sqlite3`-CLI, Skripte) —
die Einbettung in eine Applikation kommt in KM6.

## Wofür braucht man das in der Praxis?

- **Jede echte Abfrage ist verschachtelt:** Reports, Auswertungen, Datenbereinigung — wer
  Unterabfragen/CTEs liest wie Prosa, kommt ohne Export-nach-Excel aus.
- **Normalformen sind das Qualitätsmerkmal eines Schemas:** Anomalien erkennen und begründen,
  wann (De-)Normalisierung richtig ist — Kernkompetenz für jedes DB-Design (und direkt
  relevant für den SWP-Verbund: TPH verletzt bewusst 3NF — siehe `3HWII/README.md`).
- **Optimierung schlägt Intuition:** Index oder nicht? `EXPLAIN QUERY PLAN` entscheidet —
  dieselbe Messhaltung wie `Deno.bench` in SWP.
- **Transaktionen sind überall:** Geldüberweisung, Bestellung, Storno — Atomarität ist kein
  Luxus, sondern Grundannahme jeder Geschäftsanwendung (und Voraussetzung für KM6-Transaktionen
  in Prisma).
- **Betrieb gehört dazu:** Import/Export, Backup, Archivierung, Benutzer und Rechte — die
  „unbequemen" Themen, die ein Produktivsystem vom Schulbeispiel unterscheiden.

## Inhalte

### Wissen (Fakten & Begriffe)
- Normalformen: Anomalien (Einfüge/Änderung/Löschung), 1NF (Atomarität), 2NF (partielle
  Abhängigkeit), 3NF (transitive Abhängigkeit); bewusste Denormalisierung
- Unterabfragen: Skalar-, Zeilen-, Tabellen-Subquery; Platzierung in WHERE/FROM/SELECT
- Korrelierte Subqueries, `EXISTS`/`NOT EXISTS`, `IN`/`NOT IN` (NULL-Falle)
- CTEs: `WITH name AS (...)`, mehrere CTEs, Ausblick `WITH RECURSIVE`
- Views: `CREATE VIEW`, View über View, Update-Barkeit (SQLite-Einschränkungen)
- DDL vertieft: `ALTER TABLE` (ADD/RENAME/DROP COLUMN), `DROP`, Schema-Evolution ohne
  Datenverlust, `PRAGMA table_info`
- Index-Typen, Composite-Index und Spaltenreihenfolge, Over-Indexing; `EXPLAIN QUERY PLAN`
- Transaktionen: `BEGIN`/`COMMIT`/`ROLLBACK`, ACID, Savepoints (Ausblick)
- DCL: `GRANT`/`REVOKE`/Roles (Konzept), Benutzerverwaltung; Row-Level-Security (Ausblick)
- Import/Export: `.import` CSV, `.dump`, `ATTACH DATABASE`, `VACUUM INTO`, JSON1-Extension

### Verstehen (Zusammenhänge)
- Warum Anomalien Schema-Fehler sind und keine Daten-Fehler — und warum 3NF sie verhindert
- Warum Self-JOIN und korrelierte Subquery dasselbe Problem lösen (und wann welche Form lesbarer ist)
- Warum eine CTE keine „optimierte" Subquery ist, sondern eine *lesbare*
- Warum ein Index Schreibzugriffe bremst und Lesen beschleunigt — Messung statt Bauchgefühl
- Warum eine Überweisung niemals zwei Einzel-UPDATEs sein darf (Atomarität)
- Warum SQLite keine Benutzer kennt und DCL dort nur konzeptionell lehrbar ist

### Können (mit SQLite/Deno umsetzen)
- Eine denormalisierte Tabelle schrittweise nach 3NF zerlegen und jede Stufe begründen
- Komplexe Fragestellungen als verschachtelte Subquery *und* als CTE formulieren
- `EXPLAIN QUERY PLAN` lesen, Voll- vs. Index-Scan unterscheiden, einen Composite-Index
  begründet setzen
- Ein Skript mit Transaktion schreiben, das zwei Tabellen atomar ändert
- Views als Schnittstelle für Reports einsetzen
- CSV-Import, `.dump`-Backup und `VACUUM INTO` anwenden; JSON-Daten mit `json_extract` abfragen
- (Demo) PostgreSQL via Docker: `CREATE USER`, `GRANT SELECT ON ...` zeigen und erklären

## Kollegen-Soll (Vorschlag — Absprache TBD)

Lehrstoffpunkte von KM5 **ohne SQL/DB-Kern**, Kandidaten für die Kollegen-Stunde
(Extraktionsvorschlag, siehe `3HWII/README.md` → Offene Punkte):

- **Datenimport/-export, Archivierung** (Betriebs-/Administrationssicht, CSV/JSON-Formate)
- **Benutzerverwaltung/DCL** (Konzeptlehre, PostgreSQL-Demo — falls nicht bei Georg)

## Ressourcen & Stack

| Strang | Werkzeug/Anker |
|---|---|
| DBMS | **SQLite** (`sqlite3`-CLI, VSCode-Extension) — Limit: keine Benutzer/GRANT |
| Demo (DCL) | **PostgreSQL via Docker** (1 UE, Kontrast zu SQLite) |
| Skripting | **Deno** mit `node:sqlite` für Import/Transaktions-Skripte |
| Übungsdatenbanken | `sqlite-datenbanken/w3schools.sqlite`, **Musik-Streaming-DB** (Dauerbeispiel aus Jg II, E11) |
| Verbund | ab ~Dez: gemeinsame Beispieldomäne mit SWP andeuten (`3HWII/README.md`) |
| Referenz | `Unterlagen/sql_referenz/` (CTE-Guide, Spickzettel), `Unterlagen/Buch_Datenbanken_2HWII/` |

**Mitgenommen aus KM3/KM4 (Vorwissen):** CRUD, JOIN/Self-JOIN, GROUP BY/HAVING,
DDL/Constraints (PK/FK/CHECK), N:M/Zwischentabelle, ER (bigER), Prisma-Grundlagen —
Details: `docs/lehrplan/jg2-einheiten.md`.

**Mitnahme nach KM6:** CTEs/Views für Reports, Transaktionen für `$transaction` in Prisma,
EXPLAIN für das Index-Audit, Normalformen für die TPH-vs.-TPT-Diskussion im Verbund.

**Schwachstellen-Watchlist (Diagnose aus Jg II, Wissensüberprüfung 2026-03):**
Self-JOIN-Details, `COUNT(*)` vs. `COUNT(col)`, WHERE vs. HAVING, mehrspaltiges
`ORDER BY DESC` — wird in UE 1 (Diagnose) gezielt abgeprüft und durchgehend mitgeführt.
