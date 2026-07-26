# Semesterplan 3HWII INFI — Wintersemester 2026/27

Informatik und Informationssysteme (INFI) — KM5
(BGBl. II Nr. 262/2015 idF 235/2019, Anlage 1.24; Schichten: `docs/lehrplan/LEHRPLAN.md` +
`docs/lehrplan/RIS.md`)

**Zeitmodell:** 13 echte UE (1 DS/Woche à 2 h = Georgs Anteil am 2+1-Split) + 2 PLF-DS.
Offiziell 18 Schulwochen — Ausfälle durch Feiertage/Krankheit sind einkalkuliert;
bei Glücksfall Bonus-UE (siehe unten).
**Werkzeug:** SQLite (`sqlite3`, `node:sqlite` via Deno) · PostgreSQL via Docker (DCL-Demo, UE 11)
**Didaktik:** abfrage-zentriert, Musik-Streaming-DB als Dauerbeispiel (aus Jg II)
**KM-Steckbrief:** `kompetenzmodule/km5.md` · **Verbund mit SWP:** `3HWII/README.md`

> **Vorwissen aus Jg II (KM3/KM4):** CRUD, JOIN/Self-JOIN, GROUP BY/HAVING, DDL/Constraints,
> N:M/Zwischentabelle, ER (bigER), Prisma-Grundlagen. Details: `docs/lehrplan/jg2-einheiten.md`.
> **Wichtigste Lücke:** Normalformen (① KM3) nur gestreift → UE 2 schließt sie.
> **UE 1 startet mit Diagnostik-Rep** (ohne eigene Reserve-DS — Einstieg ist Teil der UE).

---

## UE 1–2: Fundament — Rep/Diagnose & Normalisierung (Lückenschluss)

| UE | Thema | KM-Bezug (①) | Inhalt / HÜ |
|----|-------|--------------|--------------|
| 1 | **Wiederholung Jg II & Diagnose** | KM5-Anker („komplexe Abfragen"); Auffrischung KM3/KM4 | SELECT/JOIN/GROUP BY/HAVING/DDL wiederholen; kurzer Diagnose-Test (Self-JOIN, `COUNT(*)` vs. `COUNT(col)`, WHERE vs. HAVING — bekannte Schwächen); Musik-Streaming-ER (Jg II) als laufende Beispiel-DB. HÜ: 5 Auffrischungs-Queries auf der Musik-DB |
| 2 | **Normalisierung (1NF–3NF)** | KM3 „Normalformen" (**Lückenschluss**) | Anomalien (Einfüge/Änderung/Löschung), 1NF (Atomarität), 2NF (partielle Abhängigkeit), 3NF (transitive Abhängigkeit); denormalisierte Tabelle schrittweise normalisieren; wann Denormalisierung sinnvoll ist. HÜ: „schlechte" Bestelltabelle normalisieren, jede Stufe begründen |

## UE 3–6: Komplexe Abfragen (KM-Kern)

| UE | Thema | KM-Bezug ① | Inhalt / HÜ |
|----|-------|------------|--------------|
| 3 | **Unterabfragen I (Skalar, Zeile, Tabelle)** | KM5 „Unterabfragen" | Skalar-Subquery (ein Wert), Row-Subquery (eine Zeile), Table-Subquery (in FROM); Platzierung in WHERE/FROM/SELECT. HÜ: 3 Übungen Skalar-/Table-Subqueries auf Musik-DB |
| 4 | **Unterabfragen II (korreliert, EXISTS, IN)** | KM5 „Unterabfragen" | korrelierte Subqueries, `EXISTS`/`NOT EXISTS`, `IN`/`NOT IN` inkl. NULL-Falle; Self-JOIN vs. korrelierte Subquery (Vergleich). HÜ: 2 Aufgaben je einmal als Self-JOIN, einmal korreliert |
| 5 | **CTEs (Common Table Expressions)** | KM5 „Unterabfragen" (lesbare Struktur) | `WITH name AS (...)`; CTE statt verschachtelter Subquery; mehrere CTEs hintereinander; Ausblick `WITH RECURSIVE`. HÜ: 2 verschachtelte Abfragen als CTE umschreiben (Top-Hörer, nie gespielte Tracks) |
| 6 | **Views** | KM5 „komplexe Abfragen" (bündeln); ersetzt KM4 „Formulare/Berichte" (Sichten) | `CREATE VIEW` (`IF NOT EXISTS`), `DROP VIEW`; View über View; Update-Barkeit (SQLite-Einschränkungen); Einsatzszenarien (Sicherheit, Vereinfachung, Abwärtskompatibilität). HÜ: View „aktuelle Streams" + View über View (Bonus) |
| 7 | **Workshop & Festigung (Puffer)** | KM5 UE 1–6 | komplexe Abfrage selbst entwerfen (Subquery + CTE + View); Peer-Review der Normalform-Begründungen. HÜ: Workshop-Artefakt fertigstellen |

> **PLF 1 (R1)** im Anschluss an UE 7 — Stoff: UE 1–7.

## UE 8–11: Schema, Optimierung, Konsistenz, Zugriff

| UE | Thema | KM-Bezug ① | Inhalt / HÜ |
|----|-------|------------|--------------|
| 8 | **DDL vertieft (Schema-Evolution)** | KM5 „Datendefinitionssprache" | `ALTER TABLE … ADD/RENAME/DROP COLUMN` (SQLite-Einschränkungen); `DROP TABLE`/`DROP INDEX`; Schema-Evolution ohne Datenverlust; `PRAGMA table_info`. HÜ: Musik-DB um 2 Spalten erweitern, Index setzen |
| 9 | **Indizes & Abfrageoptimierung** | KM5 „Abfrageoptimierung" | Voll-Scan vs. Index-Scan; `EXPLAIN QUERY PLAN`; Composite-Index und Spaltenreihenfolge; Over-Indexing vermeiden. HÜ: 3 langsame Queries optimieren (vorher/nachher EXPLAIN) |
| 10 | **Transaktionen & ACID** | KM5 i. V. m. KM6 „DB-Programme" (Vorbereitung) | `BEGIN`/`COMMIT`/`ROLLBACK`; ACID; Geldüberweisung / Mehrzeilen-Insert als Einheit; Savepoints (Ausblick). HÜ: Skript mit Transaktion (zwei Tabellen atomar schreiben) |
| 11 | **DCL & Benutzerverwaltung (Konzept + PostgreSQL-Demo)** | KM5 „Benutzerverwaltung" (+ KM4 „Data Control Language") | GRANT/REVOKE/Roles (in SQLite nicht abbildbar) → Konzeptlehre; Mini-Demo PostgreSQL via Docker (`CREATE USER`, `GRANT SELECT ON …`); Row-Level-Security (Ausblick). HÜ: Konzept-Fragen; (optional) PG-Container mit 2 Test-Benutzern |

## UE 12–13: Betrieb & Gesamtschau

| UE | Thema | KM-Bezug ① | Inhalt / HÜ |
|----|-------|------------|--------------|
| 12 | **Datenimport/-export & Archivierung** *(Kandidat Kollegen-Stunde)* | KM5 „Datenimport/-export, Archivierung" | `.import` CSV, `.dump`, `ATTACH DATABASE`, `VACUUM INTO`; JSON1-Extension (`json_extract`); Backup-Strategien, PITR (Ausblick). HÜ: Musik-DB nach CSV/JSON exportieren; Backup via `VACUUM INTO` |
| 13 | **Mini-Projekt KM5** | KM5 Gesamtschau | eigene DB erweitern (z. B. Bibliothek aus Jg II **oder** Verbund-Domäne aus SWP UE 12) mit komplexer Abfrage, View, CTE, optimiertem Index + Backup; Abgabe vor PLF 2. HÜ: Mini-Projekt |

> **PLF 2 (R2)** im Anschluss an UE 13 — Stoff: KM5 gesamt (Schwerpunkt UE 8–13).

## Bonus-UE (optional, bei Ausfallfreiheit)

| UE | Thema | Anlass |
|----|-------|--------|
| +1 | **Window Functions** (`OVER`, `ROW_NUMBER`, `RANK`, Lauf Summen) | häufigster Wunsch bei komplexen Abfragen; ebnet KM6-Reports |

## Reservierte DS (keine Lehr-UE)

| DS | Inhalt |
|----|--------|
| R1 | **PLF 1** (nach UE 7; Normalformen, Unterabfragen, CTEs, Views) |
| R2 | **PLF 2** (nach UE 13; KM5 gesamt, Schwerpunkt UE 8–13) |

## Kollegen-Parallelnotiz (1 h/Woche, Vorschlag — TBD)

- **UE 12 (Import/Export, Archivierung)** ist der natürliche Kandidat für die Kollegen-Stunde
  (Betriebssicht, kein Abfrage-Kern) — Absprache: `3HWII/README.md` → Offene Punkte.
- Übrige Kollegen-Stunden: Vertiefung/Übung parallel zum jeweiligen UE-Stoff.

---

**Schwerpunkte:** 4 UE komplexe Abfragen (Subqueries/CTEs/Views) · 2 UE Fundament (Rep, Normalformen) ·
4 UE Schema/Optimierung/Konsistenz/Zugriff · 1 UE Betrieb · 2 UE Workshop+Projekt
**SWP-Synchronisation:** INFI bleibt SQL-nah; SWP läuft DB-frei (OOP). Ab ~Dez (SWP UE 12)
gemeinsame Beispieldomäne — INFI UE 13 kann sie im Mini-Projekt aufgreifen. Details:
`3HWII/README.md` → Sequenz-Abstimmung.
