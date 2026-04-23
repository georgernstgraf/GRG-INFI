# Semesterplan – 2ahwii Informatik (Sommersemester 2026)

Letztes Update: 23. April 2026

## Bisher behandelte Themen (Sep 2025 – Apr 2026)

| Datum | Thema |
|-------|-------|
| Sep 2025 | Setup (Git, SQLite3, VSCode), CRUD-Grundlagen (SELECT, INSERT, UPDATE, DELETE) |
| Okt 2025 | W3Schools SQL (WHERE, LIKE, Vergleichsoperatoren), INSERT via Deno/TypeScript |
| Okt 23 | PLF-Probe (SELECT, DISTINCT, ORDER BY, AND/OR/NOT) |
| Nov 2025 | Aggregatfunktionen (COUNT, SUM, AVG, GROUP BY, HAVING), JOINs |
| Dez 2025 | Schriftliche PLF (Open Book, 18. Dez) |
| Jan 2026 | UNIQUE INDEX |
| Feb 2026 | LeetCode SQL (LC182, LC196, LC185), Self-JOIN, Duplikate finden |
| Mär 5 | Wissensüberprüfung (Schwächen: Self-JOIN-Details, COUNT(*) vs COUNT(col), WHERE vs HAVING, ORDER BY DESC mehrspaltig) |
| Mär 19 | DDL, Constraints (PK, FK, NOT NULL, UNIQUE, CHECK), PRAGMA foreign_keys |
| Apr 9 | N:M-Beziehungen, Zwischentabellen, Composite PK, ON DELETE/UPDATE |
| Apr 16 | ER-Diagramme mit bigER (Crowsfoot-Notation, Entities vs Relationships, optionale Attribute) |

---

## Wichtige Termine

- **PLF am 7. Mai 2026** – Praktische Leistungsfeststellung

---

## Semesterplan (11 Wochen)

### Woche 0 – 23. April: bigER-Abschluss

**Thema:** ER-Diagramme abschließen und festigen

**Inhalt:**
- bigER-Plugin in VSCode: Crowsfoot-Notation wiederholen
- N:M-Relationships vs. Associative Entities (wann relationship, wann entity?)
- Optionale Attribute mit `optional` kennzeichnen
- Gemeinsam: Bibliotheks-ER-Diagramm vervollständigen (Leser, Buch, Exemplar, Ausleihe, Mitarbeiter)

**Hausübung:**
- Bibliotheks-HÜ vom 9. April fertigstellen (`hausaufgabe-n-zu-m-bibliothek.sql`)
- ER-Diagramm der Bibliothek im bigER-Plugin erstellen (`buecher.erd`)
  - Entities: `mitarbeiter`, `leser`, `buch`, `exemplar`, `ausleihe`
  - Relationships: ExemplarBestand (1:N), LeserLeihe (1:N), ExemplarLeihe (1:N), Bearbeitung (Mitarbeiter 1:N Ausleihe)
  - Bonus: Buch → Exemplar (1:N) mit physischem Exemplar, Standort, Status

---

### Woche 1 – 30. April: PLF-Vorbereitung

**Thema:** Wiederholung gezielter Schwächen + Mock-PLF

**Inhalt:**
- Schwächen aus Wissensüberprüfung (Mär 5) gezielt üben:
  - WHERE vs HAVING: Ausführungsreihenfolge visualisieren (Zeilen filtern → Gruppieren → Gruppen filtern)
  - COUNT(*) vs COUNT(spalte) an kleinem Beispieldatensatz
  - Self-JOIN mit zwei Beispielen: Duplikate in `person` + Hierarchien in `mitarbeiter`
  - ORDER BY ... DESC mit Mehrfachsortierung
- Mock-PLF: vollständige Probearbeit im Unterricht

**Hausübung:**
- Mock-PLF zu Hause fertigstellen und selbst korrigieren
- Antwortschema für Freitextfragen einüben: erst SQL-Abfrage, dann Erklärung jeder Klausel, dann Sonderfälle

---

### Woche 2 – 7. Mai: PLF

**Thema:** Praktische Leistungsfeststellung

**Inhalt:**
- PLF Durchführung
- Kurze Nachbesprechung oder Einführung ins nächste Thema (falls Zeit)

**Hausübung:**
- Keine HÜ (PLF-Woche)

---

### Woche 3 – 14. Mai: ER-zu-SQL Übersetzung (Bidirektional)

**Lernziele:**
- ER-Diagramm in CREATE TABLE-Statements übersetzen
- SQL-Schema in ER-Diagramm rückübersetzen
- Zusammenhang zwischen Modellierung und Implementation verstehen

**Inhalt:**
- Vorgehen: Entity → Tabelle, Relationship → FK oder Zwischentabelle
- Von ER zu SQL: systematisch alle Entities, Attributes, Relationships abarbeiten
- Von SQL zu ER: CREATE TABLE analysieren, Relationships identifizieren
- Immer komplexere Szenarien (3-4 Entity-Domains)

**Hausübung:**
- Aufgabe A: Vorgegebenes ER-Diagramm (z.B. Online-Shop: Kunde, Produkt, Bestellung, Bestellposition) in SQL umsetzen
- Aufgabe B: Vorgegebenes SQL-Schema in bigER als ER-Diagramm modellieren

---

### Woche 4 – 21. Mai: Normalisierung (1NF → 3NF)

**Lernziele:**
- Anomalien (Einfüge-, Änderungs-, Löschungsanomalie) erkennen
- 1NF, 2NF, 3NF Schritt für Schritt anwenden
- Denormalisierung bewerten können

**Inhalt:**
- Warum normalisieren? Konkrete Anomalie-Beispiele an einer schlechten Tabelle
- 1NF: Keine wiederholenden Gruppen, atomare Werte
- 2NF: Keine partiellen Abhängigkeiten (bei zusammengesetzten Schlüsseln)
- 3NF: Keine transitiven Abhängigkeiten
- Übung: Eine denormalisierte Tabelle schrittweise normalisieren
- Kurzer Hinweis: Wann Denormalisierung sinnvoll ist (Performance)

**Hausübung:**
- Gegebene "schlechte" Tabelle (z.B. Bestellung mit Kunden- und Produktdaten in einer Tabelle) normalisieren
- Zu jedem Schritt begründen: Welche Anomalie wird dadurch behoben?

---

### Woche 5 – 28. Mai: Fortgeschrittenes SQL – CASE, COALESCE, NULL-Behandlung

**Lernziele:**
- Bedingte Logik in SQL-Abfragen verwenden (CASE WHEN)
- NULL-Werte sicher behandeln (COALESCE, IFNULL, NULLIF)
- IS NULL / IS NOT NULL in JOINs und WHERE gezielt einsetzen

**Inhalt:**
- `CASE WHEN ... THEN ... ELSE ... END` für berechnete Spalten und Kategorisierungen
- `COALESCE(wert1, wert2, ...)` – ersten Nicht-NULL-Wert liefern
- `IFNULL()`, `NULLIF()` – SQLite-spezifische Funktionen
- Praktische Übungen mit der Bibliotheksdatenbank (z.B. "offen" vs. "zurückgegeben" kategorisieren)

**Hausübung:**
- 5 Abfragen an der Bibliotheksdatenbank schreiben, die CASE und COALESCE verwenden
  - Z.B.: Bücher kategorisieren ("oft ausgeliehen" / "selten ausgeliehen" / "nie ausgeliehen")
  - Z.B.: Fehlende ISBN mit "Keine ISBN" anzeigen statt NULL

---

### Woche 6 – 4. Juni: Views & CTEs (Common Table Expressions)

**Lernziele:**
- Views erstellen und ihren Zweck erklären
- CTEs (WITH ... AS) für lesbare Abfragen verwenden
- Unterabfragen in WHERE, FROM und SELECT verstehen

**Inhalt:**
- `CREATE VIEW name AS SELECT ...` – Was ist eine View? Warum nützlich?
- Einfache Views: Häufige Abfragen als Sicht speichern
- Unterabfragen: Scalar, Row, Table Subqueries
- CTEs: `WITH aktuelle_ausleihen AS (...) SELECT ... FROM aktuelle_ausleihen`
- Übung: Verschachtelte Abfragen als CTEs umschreiben

**Hausübung:**
- View "aktuelle_ausleihen" für die Bibliothek erstellen (alle offenen Ausleihen)
- 2-3 komplexe Abfragen als CTEs schreiben (z.B. Top-Leser, nie ausgeliehene Bücher)
- Bonus: View über eine View (geschachtelte Views)

---

### Woche 7 – 11. Juni: Transaktionen & Sicherheit

**Lernziele:**
- Transaktionen starten, bestätigen und zurückrollen
- Prepared Statements in Deno/TypeScript verwenden
- SQL-Injection erkennen und verhindern

**Inhalt:**
- `BEGIN TRANSACTION`, `COMMIT`, `ROLLBACK`
- Praxisbeispiel: Geldüberweisung (alles oder nichts)
- Prepared Statements: Warum? Wie in Deno?
- SQL-Injection: Angriff demonstrieren (Little_Bobby_Tables)
- Verteidigung: Parametrisierte Queries statt String-Concatenation

**Hausübung:**
- Kleines Deno-Skript schreiben, das Prepared Statements für die Bibliothek verwendet
  - Funktion: `ausleihen(leser_id, buch_id, datum)` mit Transaktion
  - Funktion: `zurueckgeben(ausleihe_id, datum)` mit Transaktion
- SQL-Injection-Demo: Ein "verwundbares" Skript analysieren und sicher machen

---

### Woche 8 – 18. Juni: Mini-Projekt – Datenbank selbst entwerfen

**Lernziele:**
- Komplett eigenständig eine Datenbank von Grund auf entwerfen
- ER-Modellierung, SQL-Implementation und Abfragen verbinden

**Inhalt:**
- Projektvorstellung: Jeder Schüler wählt eine Domain
  - Beispiele: Sportverein, Rezeptsammlung, Schulverwaltung, Spotify-Playlist, Filmverwaltung, etc.
- Schritt 1: ER-Diagramm in bigER erstellen (mindestens 4 Entities, mindestens 1 N:M)
- Abgabe: ER-Diagramm am Ende der Stunde oder als HÜ

**Hausübung:**
- ER-Diagramm fertigstellen und als `.erd`-Datei ins Repo committen
- SQL-Schema (CREATE TABLE) erstellen mit allen Constraints
- Mindestens 10 sinnvolle Beispieldatensätze einfügen

---

### Woche 9 – 25. Juni: Mini-Projekt – Implementation & Abfragen

**Lernziele:**
- Komplexe Abfragen auf der eigenen Datenbank schreiben
- Projekt professionell strukturieren

**Inhalt:**
- Schritt 2: SQL-Schema testen, Daten einfügen
- Schritt 3: 5-8 sinnvolle Abfragen schreiben (JOINs, Aggregation, Views)
- Peer-Review: Nachbar prüft das SQL-Schema auf Fehler

**Hausübung:**
- Projekt fertigstellen:
  - `schema.sql` (CREATE TABLE + Constraints)
  - `data.sql` (INSERT mit Testdaten)
  - `queries.sql` (5-8 Abfragen mit Kommentaren)
  - `README.md` (Kurze Beschreibung der Datenbank)
  - ER-Diagramm als `.erd`-Datei

---

### Woche 10 – 2. Juli: Projektpräsentationen & Semesterabschluss

**Inhalt:**
- Jeder Schüler präsentiert seine Datenbank (5 Minuten)
  - ER-Diagramm zeigen und erklären
  - 1-2 interessante Abfragen live demonstrieren
- Peer-Feedback: SQL-Code der Mitschüler bewerten
- Semester-Rückblick: Was haben wir gelernt?
- Ausblick: Was kommt im nächsten Schuljahr? (Backend-APIs, ORMs, etc.)

**Keine Hausübung** – Ende des Semesters

---

## Bewertung (Semester)

- PLF (7. Mai 2026)
- Hausübungen (wöchentlich)
- Schulübungen / Stundenwiederholung
- Mini-Projekt (Woche 8-10)

Jeder Bereich muss positiv sein.

---

## Abgabe-Regeln

- `.sqlite` / `.db` Dateien **nicht** committen (binär, nicht diffbar)
- SQL-Aufgaben in `.sql`-Dateien speichern
- Hausübungen bis 24h vor Unterrichtsbeginn abgeben
- Pro Tag Verspätung: 10% Abzug (max. 7 Tage, danach max. 30% erreichbar)
