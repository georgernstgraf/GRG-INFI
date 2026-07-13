# Hausübungen – 2ahwii Informatik

Neueste Einträge zuerst.

## Übersicht Sommersemester 2026

| # | Datum | Thema | Fällig ca. |
|---|-------|-------|------------|
| 11 | 18.06. | 5 Prisma-Queries `queries.ts` (include, where, count/groupBy) | 25.06. |
| 10 | 11.06. | Seed-Skript `seed.ts` (≥5 Datensätze, Relationen) | 18.06. |
| 9 | 28.05. | Prisma Datenmodell LLM-Übersetzungsplattform (Entitäten, Schema, Indizes, ERD) | 11.06. |
| — | 07.05. | **Keine HÜ** (PLF) | — |
| 8 | 30.04. | WHERE/HAVING/COUNT/Self-JOIN Übungen + Mock-PLF selbst korrigieren | 07.05. |
| 7 | 23.04. | LC 180, LC 586, LC 596 + Mock-PLF | 30.04. |
| 6 | 16.04. | ER-Diagramm im bigER Plugin (Bibliothek + Mitarbeiter) | 23.04. |
| 5 | 09.04. | N:M Bibliothek — Bridge Table, Composite PK, Indexes, Queries (50+5 Pkt) | 16.04. |
| 4 | 19.03. | DDL Constraints — E-Commerce Inventar (PK, FK, NOT NULL, CHECK) | 09.04. |
| 3 | 26.02. | 2 LeetCode SQL EASY (Self-JOIN Fokus) | 05.03. |
| 2 | 19.02. | 2 LeetCode SQL (freie Wahl) | 26.02. |

---

## Hausübung vom 18. Juni – Prisma Queries

**Thema:** Prisma Client — Abfragen vertiefen

**Aufgabe:**
5 sinnvolle Prisma-Queries schreiben (`queries.ts`):
- Mindestens 2 mit `include` (Relationen laden)
- Mindestens 1 mit `where`-Filter auf Relationen
- Mindestens 1 mit `count` oder `groupBy`
- Ergebnisse per `console.log` ausgeben

---

## Hausübung vom 11. Juni – Prisma Seed

**Thema:** Seed-Skript für die Prisma-Datenbank

**Aufgabe:**
Seed-Skript schreiben (`seed.ts`):
- Mindestens 5 sinnvolle Datensätze über mehrere Tabellen
- Relationen verwenden: nested `create` oder `connect`
- Ausführbar mit `deno run -A seed.ts`

---

## Hausübung vom 28. Mai – Prisma Datenmodell

**Thema:** Datenmodellierung einer LLM-Übersetzungsplattform mit Prisma

Siehe `2026-05-28_llm-translation-dm/uebung-datenmodell-llm-uebersetzungen.md` für die vollständige Angabe.

**Aufgaben:**
- (a) Entitäten, Attribute und Beziehungen identifizieren, ER-Diagramm skizzieren
- (b) `schema.prisma` schreiben (SQLite, Relationen, Constraints, onDelete)
- (c) `@@index`-Einträge für häufige Suchmuster hinzufügen
- (d) Zweiten Generator für ERD (Mermaid) ergänzen

---

## Hausübung vom 23. April – LeetCode + Mock-PLF

**Thema:** Vorbereitung auf die PLF am 7. Mai

**Aufgabe:**
- LeetCode 180 (Consecutive Numbers) lösen
- LeetCode 586 (Customer Placing the Largest Number of Orders) lösen
- LeetCode 596 (Classes With at Least 5 Students) lösen
- Mock-PLF fertigstellen und selbst korrigieren (siehe `2026-04-23_where_having/mock-plf/`)

---

## Hausübung vom 16. April – ER-Diagramm bigER

**Thema:** Bibliotheksverwaltung im bigER Plugin modellieren

**Aufgabe:**
- Bibliotheks-HÜ vom 9. April fertigstellen
- ER-Diagramm im bigER Plugin erstellen (`buecher.erd`)
  - Entities: `mitarbeiter`, `leser`, `buch`, `exemplar`, `ausleihe`
  - Mitarbeiter der Bibliothek: leiht aus, nimmt zurück
  - Bonus: Buch → Exemplar (1:N) mit physischem Exemplar, Standort, Status

---

## Hausübung vom 9. April – N:M Bibliothek

**Thema:** N:M-Beziehungen mit Zwischentabellen — Bibliotheksverwaltung

Siehe `2026-04-09_n_m/hausaufgabe-n-zu-m-bibliothek.sql` für die vollständige Angabe (50+5 Punkte).

**Aufgaben:**
1. Tabelle `leser` (id PK, name, email UNIQUE, mitglied_seit)
2. Tabelle `buch` (id PK, titel, autor, isbn UNIQUE, erscheinungsjahr)
3. Tabelle `ausleihe` als Zwischentabelle (Composite PK, FK mit ON DELETE RESTRICT, CHECK)
4. Indexes erstellen (Leser-Name, Buch-Titel, offene Ausleihen)
5. Beispieldaten einfügen (3 Leser, 4 Bücher, 5 Ausleihen)
6. Abfragen schreiben (alle Ausleihen, aktuell ausgeliehen, Häufigkeit, Top-Leser)
7. Bonus: VIEW `aktuelle_ausleihen`

---

## Hausübung vom 19. März – DDL & Constraints

**Thema:** Integritätsregeln (Constraints) in SQLite

Hier übst du den Umgang mit PRIMARY KEY, NOT NULL, FOREIGN KEY und CHECK Constraints.

### Aufgabe 1: E-Commerce Inventar
Erstelle ein einfaches Inventarsystem mit zwei Tabellen:

- `categories`: id (PK), name (NOT NULL)
- `products`: id (PK), name (NOT NULL), price (DEFAULT 0.0), category_id (FK, NOT NULL)

**Constraint:** Ein Produkt darf nicht ohne Kategorie existieren (`category_id NOT NULL`).

### Aufgabe 2: CHECK Constraint
Füge einen CHECK Constraint auf `price` hinzu, damit dieser niemals negativ sein kann.
*Tipp:* Recherchiere selbst, wie CHECK Constraints in SQLite funktionieren!

### Aufgabe 3: Foreign Keys testen
- Aktiviere Foreign Keys mit `PRAGMA foreign_keys = ON;`
- Versuche ein Produkt mit ungültiger `category_id` (z.B. 999) einzufügen
- Dokumentiere die Fehlermeldung

---

## Hausübung vom 26. Februar 2026

### Thema: SQL-Übungen mit LeetCode (Self-JOIN, Duplikate finden)

In der Stunde haben wir zwei LeetCode-Probleme zu doppelten E-Mail-Adressen bearbeitet:
- **LC182:** Duplicate Emails
- **LC196:** Delete Duplicate Emails

Dabei haben wir den Self-JOIN kennengelernt, um Datensätze innerhalb einer Tabelle zu vergleichen.

**Aufgabe:**
Löse zwei weitere SQL-LeetCode-Probleme der Schwierigkeitsstufe **EASY** auf [leetcode.com](https://leetcode.com/problemset/database/).

**Tipp:** Suche nach Problemen, die `SELECT`, `JOIN` oder Aggregatfunktionen verwenden.

---

## Hausübung vom 19. Februar 2026

### Thema: SQL-Praxis mit LeetCode

**Aufgabe:**
1. Suche dir zwei SQL-Probleme auf [LeetCode](https://leetcode.com/problemset/database/) aus.
2. Löse beide Probleme eigenständig.

**Empfehlung:** Wähle Probleme, die Themen behandeln, die du noch üben möchtest (z.B. `JOIN`, `GROUP BY`, `WHERE`, `ORDER BY`).

---
## =================== BEGINN SOMMERSEMESTER =================== ##
---

## Hausübung vom 13. November 2025

### Thema: W3Schools Selbststudium – Aggregatfunktionen und Aliase

**Aufgabe:**
Arbeite auf [W3Schools SQL](https://www.w3schools.com/sql/) die folgenden Abschnitte durch:
- `COUNT()`, `SUM()`, `AVG()` (Aggregatfunktionen)
- Alle Abschnitte bis einschließlich **SQL Aliases**

Teste die Beispiele und experimentiere mit den Abfragen.

---

## Hausübung vom 6. November 2025

### Thema: W3Schools – `SUM`, `AVG`, `LIKE` mit praktischer Anwendung

**Aufgabe:**
1. Studiere auf [W3Schools SQL](https://www.w3schools.com/sql/) die beiden Abschnitte:
   - `SUM()` und `AVG()` (Aggregatfunktionen)
   - `LIKE` (Mustervergleiche)

2. Verwende die **OpenTrivia-Datenbank** und erfinde **5 sinnvolle SQL-Statements**, die diese Konzepte anwenden.

**Beispiele für mögliche Fragestellungen:**
- Wie viele Fragen gibt es zu einem bestimmten Thema?
- Was ist der Durchschnittswert aller Fragen mit einem bestimmten Muster im Text?

---

## Hausübung vom 23. Oktober 2025

### Thema: Vorbereitung auf die praktische Leistungsfeststellung (PLF)

**Aufgabe:**
Löse die Aufgaben der SQL-PLF-Probe im Ordner `2025-10-23_sqlplfprobe/`.

**Optionen:**
- **GitHub Classroom:** [Assignment-Link](https://classroom.github.com/a/ZJO0mt7S)
- **Alternativ:** Kopiere den Ordner `sqlplfprobe` in dein eigenes Repo und löse die Aufgaben dort.

**Themen:** `SELECT`, `DISTINCT`, `ORDER BY`, `AND`, `OR`, `NOT`

**Testen:** Im Terminal mit `deno task test` (im entsprechenden Ordner).

---

## Hausübung vom 9. Oktober 2025

### Thema: W3Schools – `WHERE`, Vergleichsoperatoren

In der Stunde haben wir auf W3Schools die Abschnitte bis `WHERE`, `LIKE` und Vergleichsoperatoren (`<`, `>`, `=`) behandelt.

**Aufgabe:**
Schreibe SQL-Abfragen für die W3Schools-Datenbank (`w3schools.sqlite`):

1. Wie viele Customers sind aus Berlin?
2. Zeige nur `CustomerName`, `City` und `Country` von allen Kunden an.
3. Finde alle Kunden aus der Stadt London.
4. Zeige alle Produkte (`Products`), deren Preis (`Price`) größer als 20 ist.
5. Zeige alle Produkte, deren Preis **nicht gleich** 18 ist.

---

## Hausübung vom 2. Oktober 2025

### Thema: `INSERT` – Daten einfügen mit SQLite

**Aufgabe:**
Füge neue Schüler in die `students`-Tabelle ein – auf drei verschiedene Weisen:

1. **Mit VSCode und dem SQLite3-Editor:**
   - Öffne die Datenbank in VSCode
   - Führe ein `INSERT`-Statement aus
   - Mach einen Screenshot

2. **Mit SQLite3 in der Konsole:**
   - Öffne die Datenbank mit `sqlite3 dateiname.db`
   - Führe ein `INSERT`-Statement aus
   - Mach einen Screenshot

3. **Mit Deno und TypeScript (wichtigste Aufgabe!):**
   - Recherchiere, wie man SQLite in Deno verwendet
   - Schreibe ein TypeScript-Skript, das Daten per `INSERT INTO` einfügt

**Tipp:** Für Deno benötigst du das Modul `node:sqlite` (ab Deno 2.x).

---

## Hausübung vom 11. September 2025

### Thema: Entwicklungsumgebung einrichten

**Aufgabe:**
Richte deine Entwicklungsumgebung ein und stelle sicher, dass alles funktioniert:

1. **Git-Workspace in VSCode:**
   - Erstelle einen Workspace mit deinem privaten Repo und dem Lehrer-Repo
   - Teste, dass du den Workspace öffnen kannst

2. **Git-Commit und Push:**
   - Führe einen Test-Commit durch
   - Pushe zu deinem Remote-Repository
   - Stelle sicher, dass `git config --global user.name` und `user.email` korrekt gesetzt sind

3. **SQLite3 testen:**
   - Öffne die `w3schools.sqlite` Datenbank mit `sqlite3 w3schools.sqlite`
   - Führe eine einfache Abfrage aus (z.B. `.tables` oder `SELECT * FROM Customers LIMIT 5;`)

---

## Wichtige Termine

- **PLF am 7. Mai 2026** – Praktische Leistungsfeststellung
