# 3. Klasse – Einheitenplan (KM5 + KM6)

> **Status:** Einheitenplanung für das Schuljahr 2026/27 (Klasse 3AHWII). **Priorität.**
> **Offizieller Lehrstoff:** siehe [`LEHRPLAN.md`](LEHRPLAN.md) – III. Jahrgang, Bereich Datenbanken (KM5 + KM6).
> **Vorwissen:** [`jg2-einheiten.md`](jg2-einheiten.md) – CRUD, JOIN/Self-JOIN, GROUP BY/HAVING, DDL/Constraints, N:M/Zwischentabelle, ER (bigER), Prisma-Grundlagen.
> **Wochenstunden:** 3 (HTL Spengergasse, schulautonom) → ~15 Schulwochen → **~12 Einheiten** pro Semester (Netto nach Abzug von PLF/Ferien/Admin).
>
> **Wichtigste Lücke aus Jg II:** **Normalformen (1NF–3NF)** wurden nur streifenweise behandelt → werden in KM5 nachgeholt. **DB-Applikation/Einbettung** (Prisma vertieft, DB-Schnittstellen) ist der Schwerpunkt von KM6.

---

## 5. Semester – Kompetenzmodul 5

**Bildungs- und Lehraufgabe:** komplexe Abfragen in SQL erstellen und durchführen; Datenzugriff gezielt ermöglichen und verweigern.

**Lehrstoff:** Abfragesprachen (Unterabfragen, Datendefinitionssprache, Data Control Language, Abfrageoptimierung, Benutzerverwaltung, Datenimport/-export, Archivierung).

Das 5. Semester vertieft die Abfragesprache und schließt die Normalformen-Lücke. „Datenzugriff ermöglichen/verweigern" und „Benutzerverwaltung" sind in SQLite nur beschränkt abbildbar (SQLite hat keine Benutzer/GRANT-Logik wie PostgreSQL) → Konzept an SQLite lehren, ggf. Demo mit PostgreSQL/Docker.

### Einheit 5.1 – Wiederholung Jg II & Diagnose
- KM-Bezug: KM5 Anker; Auffrischung KM3/KM4
- Vorwissen: siehe `jg2-einheiten.md`
- Inhalt: SELECT/JOIN/GROUP BY/HAVING/DDL wiederholen; kurzer Diagnose-Test (Self-JOIN, COUNT(*) vs COUNT(col), WHERE vs HAVING – bekannte Schwächen); Anknüpfen an Musik-Streaming-ER (Jg II, E11) als laufende Beispieldatenbank
- HÜ: 5 Auffrischungs-Queries auf der Musik-DB

### Einheit 5.2 – Normalisierung (1NF–3NF) — Lückenschluss
- KM-Bezug: KM5 (Vorbereitung „Abfrageoptimierung"/Datenbankentwurf); schließt KM4-Lücke „Normalformen"
- Vorwissen: N:M/Zwischentabelle aus Jg II
- Inhalt: Anomalien (Einfüge-/Änderungs-/Löschungsanomalie), 1NF (Atomarität), 2NF (partielle Abhängigkeiten, bei zusammengesetzten Schlüsseln), 3NF (transitive Abhängigkeiten); eine denormalisierte Tabelle schrittweise normalisieren; wann Denormalisierung sinnvoll ist (Performance)
- HÜ: „Schlechte" Bestelltabelle normalisieren, jede Stufe begründen

### Einheit 5.3 – Unterabfragen I (Skalar, Zeile, Tabelle)
- KM-Bezug: KM5 „Unterabfragen"
- Vorwissen: Subquery-Gedanke aus Jg II Leetcode
- Inhalt: Skalar-Subquery (ein Wert), Row-Subquery (eine Zeile), Table-Subquery (in FROM); Platzierung in WHERE / FROM / SELECT
- HÜ: 3 Übungen mit Skalar-/Table-Subqueries auf Musik-DB

### Einheit 5.4 – Unterabfragen II (korreliert, EXISTS, IN)
- KM-Bezug: KM5 „Unterabfragen"
- Vorwissen: Self-JOIN (Jg II E3)
- Inhalt: korrelierte Subqueries, `EXISTS`/`NOT EXISTS`, `IN`/`NOT IN` inkl. NULL-Falle bei `NOT IN`; Selbst-JOIN vs. korrelierte Subquery (beide lösen dasselbe Problem – Vergleich)
- HÜ: 2 Aufgaben einmal als Self-JOIN, einmal als korrelierte Subquery

### Einheit 5.5 – CTEs (Common Table Expressions)
- KM-Bezug: KM5 „Unterabfragen" (lesbare Struktur)
- Vorwissen: Unterabfragen
- Inhalt: `WITH name AS (...) SELECT ...`; CTE statt verschachtelter Subquery; mehrere CTEs hintereinander; Rekursion mit `WITH RECURSIVE` (kurzer Ausblick)
- HÜ: 2 verschachtelte Abfragen als CTE umschreiben (Top-Hörer, nie gespielte Tracks)

### Einheit 5.6 – Views
- KM-Bezug: KM5 (Abfragen bündeln) +KM4 „Formulare/Berichte"-Ersatz (Sichten)
- Inhalt: `CREATE VIEW`, `DROP VIEW`, `CREATE VIEW IF NOT EXISTS`; View über View; UPDATE-able Views (SQLite-Einschränkungen); Einsatzszenarien (Sicherheit, Vereinfachung, Abwärtskompatibilität)
- HÜ: View „aktuelle Streams" + View über View (Bonus)

### Einheit 5.7 – DDL vertieft (ALTER TABLE, DROP, Schema-Evolution)
- KM-Bezug: KM5 „Datendefinitionssprache"
- Vorwissen: DDL/Constraints aus Jg II E5
- Inhalt: `ALTER TABLE ... ADD COLUMN / RENAME COLUMN / DROP COLUMN` (SQLite-Einschränkungen); `DROP TABLE`, `DROP INDEX`; Schema-Evolution ohne Datenverlust; `PRAGMA table_info`
- HÜ: Bestehende Musik-DB um 2 Spalten erweitern, Index setzen

### Einheit 5.8 – Indizes & Abfrageoptimierung (EXPLAIN QUERY PLAN)
- KM-Bezug: KM5 „Abfrageoptimierung"
- Vorwissen: UNIQUE INDEX aus Jg II E1
- Inhalt: Voll-Scan vs. Index-Scan; `EXPLAIN QUERY PLAN`; wann Index nützt, wann nicht; Composite-Index und Spaltenreihenfolge; „Over-Indexing" (zu viele Indizes) vermeiden
- HÜ: 3 langsame Queries optimieren (vorher/nachher EXPLAIN)

### Einheit 5.9 – Transaktionen & ACID
- KM-Bezug: KM5 (Vorbereitung KM6 „DB-Programme")
- Inhalt: `BEGIN TRANSACTION`, `COMMIT`, `ROLLBACK`; ACID (Atomare, Consistent, Isolated, Durable); Beispiel Geldüberweisung / Mehrzeilen-Insert als Einheit; Savepoints (Ausblick)
- HÜ: Skript mit Transaktion (zwei Tabellen atomar schreiben)

### Einheit 5.10 – DCL & Benutzerverwaltung (Konzept + PostgreSQL-Demo)
- KM-Bezug: KM5 „Data Control Language, Benutzerverwaltung"
- Inhalt: GRANT/REVOKE/Roles (an SQLite nicht direkt abbildbar) → Konzeptlehre; Mini-Demo mit PostgreSQL via Docker (`CREATE USER`, `GRANT SELECT ON ...`); Row-Level-Security als Ausblick
- HÜ: Konzept-Fragen; (optional) PostgreSQL-Container mit 2 Test-Benutzern

### Einheit 5.11 – Datenimport/-export & Archivierung
- KM-Bezug: KM5 „Datenimport/-export, Archivierung"
- Inhalt: `.import` CSV, `.dump`, `ATTACH DATABASE`, `VACUUM INTO` (Backup-Kopie); JSON1-Extension (SQLite `json_extract`); Backup-Strategien; PITR-Gedanke (Ausblick)
- HÜ: Musik-DB in CSV/json exportieren; Backup via `VACUUM INTO`

### Einheit 5.12 – Mini-Projekt / Wiederholung KM5
- KM-Bezug: KM5 Gesamtschau
- Inhalt: própria Datenbank erweitern (etwa Bibliothek von Jg II) mit komplexer Abfrage, View, CTE, optimiertem Index + Backup; Vor PLF frei
- HÜ: Projektteil abgeben (oder PLF-Vorbereitung)

> *Optional PLF im 5. Semester: wenn vorgesehen, Einheit 5.12 als PLF-Vorbereitung/Mock nutzen; sonst Mini-Projekt.*

---

## 6. Semester – Kompetenzmodul 6

**Bildungs- und Lehraufgabe:** die Vorgehensweise zur Erstellung einer Datenbankanwendung für einen Einsatzzweck erläutern; nötige Anwendungsfälle, Eingabemasken und Ausgabeformate identifizieren; Datenbankstrukturen auf Brauchbarkeit analysieren und optimieren.

**Lehrstoff:** Anwendungsfälle (Applikationsentwurf); Praktische Datenbankanwendungen (Entwicklung von DB-Programmen, Benutzerführung, Reportgenerierung, genormte DB-Schnittstellen).

Das 6. Semester bringt die Datenbank **in eine Applikation**. Primärer Stack: **Deno + Prisma** (an Jg II E12–14 anknüpfend); DB-Schnittstellen via REST/JSON. „Eingabemasken/Benutzerführung" übersetzen wir in CLI/TUI oder einfache REST-Endpunkte (kein HTML/CSS-Fokus – das ist `Softwareentwicklung und Projektmanagement`).

### Einheit 6.1 – Von ER zur Applikation (Applikationsentwurf)
- KM-Bezug: KM6 „Anwendungsfälle (Applikationsentwurf)"
- Vorwissen: ER (bigER) aus Jg II; Normalisierung aus 5.2
- Inhalt: Von Problemstellung → ER → Relationen → Schema → Applikation; Use Cases identifizieren (CRUD-Use-Cases pro Entity); Eingabemasken/Ausgabeformate pro Use Case festlegen; Skizze (Papier/Whiteboard)
- HÜ: Use-Case-Tabelle + ER für ein kleines Domainthema (z. B. Sammlungsverwaltung)

### Einheit 6.2 – Prisma vertieft: Schema-Design & Migrations-Strategie
- KM-Bezug: KM6 „DB-Programme"
- Vorwissen: Prisma-Grundlagen aus Jg II E12–13
- Inhalt: Relationen in Prisma (1:1, 1:n, n:m implizit über Join-Tabelle oder explizit); `@relation`, `onDelete`/`onUpdate`; Migrations als Versionskontrolle des Schemas; mehrere aufeinanderfolgende Migrations; Reset & Shadow-DB
- HÜ: Prisma-Schema für Sammlungs-Domain, 2 Migrations

### Einheit 6.3 – Prisma Client: CRUD + Transaktionen
- KM-Bezug: KM6 „DB-Programme"
- Vorwissen: `create`/`findMany` aus Jg II E13; Transaktionen aus 5.9
- Inhalt: `findUnique`, `update`, `delete`, `upsert`; `include` (Relationsladen), `select` (Projektion); `$transaction` (atomic, sequential); `where` mit AND/OR/Filtern; `count`/`groupBy`/`aggregate`
- HÜ: CLI-Skript `sammlung.ts` mit CRUD-Commands + 1 Transaktion

### Einheit 6.4 – Prepared Statements & Sicherheit (Raw SQL in Deno)
- KM-Bezug: KM6 „DB-Programme"; Sicherheit
- Vorwissen: `node:sqlite` aus Jg II E2
- Inhalt: Prepared Statements mit `node:sqlite` (`db.prepare`); Warum parametrisiert?; SQL-Injection-Demo (Bobby Tables); Vergleich Prisma (sicher by default) vs. Raw SQL; `PRAGMA` aus Code setzen
- HÜ: Verwundbares Skript analysieren + sicher machen

### Einheit 6.5 – DB-Schnittstellen I: REST-Grundlagen mit Deno
- KM-Bezug: KM6 „genormte DB-Schnittstellen"
- Vorwissen: HTTP-Grundlagen (ggf. kurzer Exkurs)
- Inhalt: Minimaler HTTP-Server in Deno (`Deno.serve`); Routen `GET /tracks`, `POST /tracks`, etc.; DB-Anbindung via Prisma; JSON als Format
- HÜ: 3 GET-Endpunkte für Sammlungs-Domain

### Einheit 6.6 – DB-Schnittstellen II: CRUD über REST
- KM-Bezug: KM6 „genormte DB-Schnittstellen"
- Vorwissen: 6.5
- Inhalt: POST/PUT/DELETE; Status-Codes (200/201/400/404/500); Validierung der Eingabe; Fehlerbehandlung; ein Endpunkt mit Transaktion
- HÜ: vollständige CRUD-API (7 Endpunkte) für Sammlungs-Domain

### Einheit 6.7 – Reportgenerierung
- KM-Bezug: KM6 „Reportgenerierung"
- Vorwissen: Aggregatfunktionen aus Jg II; CTEs aus 5.5
- Inhalt: Ausgabeformate: CSV, Markdown-Tabelle, JSON; Reporting-Queries (Top-N, Gruppenvergleiche, Zeitreihen); ``Deno.writeTextFile`` Export; kleinen „Dashboard"-CLI-Report
- HÜ: 3 Report-Queries + Markdown-Export

### Einheit 6.8 – Benutzerführung / CLI-TUI
- KM-Bezug: KM6 „Benutzerführung" (Eingabemasken-Äquivalent)
- Inhalt: CLI-Menü (`@cliffy/prompt` o. einfaches STDIN); Validierung/fehlerfreundliche Meldungen; Abbruch/Bestätigung bei zerstörerischen Aktionen; ASCII-Tabelle-Ausgabe
- HÜ: CLI-Frontend für die Sammlungs-API aus 6.6

### Einheit 6.9 – Datenbankstrukturen analysieren & optimieren
- KM-Bezug: KM6 „Datenbankstrukturen auf Brauchbarkeit analysieren und optimieren"
- Vorwissen: EXPLAIN aus 5.8
- Inhalt: Schema-Review anhand von Use Cases; Index-Audit; Denormalisierung bewusst einsetzen; Composite-Index; Migration zur Optimierung; „brauchbar" = Use-Case-gerecht
- HÜ: 1 Peer-Review des Nachbarn-Schemas + Optimierungsvorschläge

### Einheit 6.10 – Projekt: Teil 1 (Konzept & Schema)
- KM-Bezug: KM6 Gesamtschau
- Inhalt: Jede/r Schülerin wählt eine Domain; Abgabe: ER (bigER-Datei) + Prisma-Schema + Use-Case-Tabelle; mindestens 4 Entities, 1 n:m
- HÜ: ER + Schema committen

### Einheit 6.11 – Projekt: Teil 2 (Implementation & API)
- KM-Bezug: KM6 Gesamtschau
- Inhalt: Seed-Daten (≥10); CRUD-API + 2 Report-Endpunkte; Tests (Deno.test)
- HÜ: Implementation fertigstellen

### Einheit 6.12 – Projekt: Präsentation & Reflexion
- KM-Bezug: KM6 Gesamtschau (Evaluation)
- Inhalt: Jede/r präsentiert (5 Min): Schema, 2 interessante Abfragen, 1 Optimierung; Peer-Feedback; Reflexion: was aus KM5/KM6 bewusst fehlt – Brücke zu Jg IV (ERP)
- HÜ: keine (Projektabschluss / ggf. PLF)

> *Optional PLF/Wiederholung im 6. Semester: wenn vorgesehen, Projekt-Teil als PLF-Äquivalent nutzen.*

---

## Abdeckungstabelle (Soll vs. Plan)

| Lehrstoffpunkt KM5/KM6 | Geplant in | Status |
|------------------------|------------|--------|
| Unterabfragen (KM5) | 5.3, 5.4 | ✓ |
| Datendefinitionssprache (KM5) | 5.7 | ✓ |
| Data Control Language, Benutzerverwaltung (KM5) | 5.10 | ✓ (Konzept + PG-Demo) |
| Abfrageoptimierung (KM5) | 5.8 | ✓ |
| Datenimport/-export, Archivierung (KM5) | 5.11 | ✓ |
| Normalformen (KM4-Lücke) | 5.2 | ✓ (Lückenschluss) |
| Anwendungsfälle / Applikationsentwurf (KM6) | 6.1 | ✓ |
| Entwicklung von DB-Programmen (KM6) | 6.2–6.4 | ✓ (Prisma + Raw SQL) |
| Benutzerführung / Eingabemasken-Äquivalent (KM6) | 6.8 | ✓ (CLI) |
| Reportgenerierung (KM6) | 6.7 | ✓ |
| genormte DB-Schnittstellen (KM6) | 6.5, 6.6 | ✓ (REST/JSON) |
| Datenbankstrukturen analysieren/optimieren (KM6) | 6.9 | ✓ |
| komplexe Abfragen (KM5) | durchgehend 5.2–5.6 | ✓ |

**Notiz zur Lücke „Formulare/Berichte" (KM4):** Wurde in Jg II durch Prisma ersetzt. Konzepte (Sichten, Report-Generierung) werden in 5.6 (Views) und 6.7 (Reportgenerierung) explizit nachgeformt.

---

## 3ahwii-Verbund mit SWP (eine App – zwei Noten)

> **Querverweis:** Diese Kohorte hat parallel auch **SWP** (Softwareentwicklung und Projektmanagement, Jg III = KM5+KM6, OOP + GUI). SWP-Plan: [`GRG-SWP/docs/lehrplan/jg3-einheiten.md`](https://github.com/georgernstgraf/GRG-SWP/blob/main/docs/lehrplan/jg3-einheiten.md).

Beide Fächer laufen im **selben Deno/TypeScript/Prisma/SQLite-Stack** bei **derselben Kohorte**. Sie werden daher als **ein** Spiralcurriculum mit **gemeinsamem Abschlussprojekt** geführt: *eine* App, in beiden Fächern mit unterschiedlicher Rubrik benotet.

### Schichten-Aufteilung (wer lehrt was)

| Schicht | Fach / KM | Inhalt |
|---|---|---|
| Domäne (pure OOP) | **SWP KM5** | TS-Klassen, Vererbung, Polymorphismus, Interfaces, Generics – **DB-frei**, testgetrieben |
| Persistenz & Abfragen | **INFI KM5** | komplexe SQL, Normalformen, CTEs, Views, Transaktionen, DDL/Indizes |
| Anbindung | **INFI KM6** | Prisma vertieft, REST-API, Prepared Statements, DB-Schnittstellen |
| Präsentation + Architektur | **SWP KM6** | Deno-Desktop-GUI, Bindings, Events, MVC, Projektmanagement |

### Brücke = Repository (gemeinsames Artefakt)

SWP definiert das `interface MediumRepository { finde(id): Promise<Medium>; … }` (Vertrag, OOP, testgetrieben). **INFI implementiert es mit Prisma.** Eine Datei, zwei Fächer, zwei Noten-Rubriken:
- **INFI-Note:** Schema-Qualität, komplexe Abfragen (CTEs/Views), Datenanbindung (Prisma/REST), EXPLAIN/Optimierung.
- **SWP-Note:** OOP-Design (Vererbung/Schnittstellen sauber?), Schichtentrennung, GUI/Events, PM (Issues/Commits/Rollen).

### O/R-Mapping: Polymorphismus über Prisma (der zentrale Knackpunkt)

Prisma kennt **keine Vererbung**. Der Object-Relational-Impedance-Mismatch ist *der* pädagogische Kernpunkt des Verbunds – er wird am Repository greifbar.

**Empfohlene Strategie: TPH (Single-Table Inheritance) + Mapper.** Prisma/INFI-Seite bleibt flach (ein Modell `Medium` mit Discriminator `type` + nullable Subtyp-Spalten + CHECK); die echte Hierarchie lebt im OOP-Layer (SWP). Das Repository „pfriemelt" die Polymorphismus beim Lesen/Schreiben hinein:

```prisma
// INFI-Seite: flach, bewusst „dumm"
model Medium {
  id        Int     @id @default(autoincrement())
  type      String            // "BUCH" | "FILM" | "SPIEL" – Discriminator
  titel     String
  isbn      String?           // nur bei BUCH
  dauerMin  Int?              // nur bei FILM
  // … CHECK-Constraints sichern pro Typ die richtigen Felder
}
```
```ts
// SWP-Seite: echte Hierarchie, DB-frei, testgetrieben
abstract class Medium { abstract berechneGebuehr(verspaetetTage: number): Geld; }
class Buch extends Medium { berechneGebuehr(t) { return Geld.euro(t * 0.10); } }
class Film extends Medium { berechneGebuehr(t) { return Geld.euro(t * 0.50); } } // teurer!

// INFI implementiert das (von SWP definierte) Repository-Interface
class PrismaMediumRepository implements MediumRepository {
  async finde(id: number): Promise<Medium> {
    const row = await this.prisma.medium.findUnique({ where: { id } });
    return toDomain(row);   // <- hier wird die Polymorphismus „hineingepfriemelt"
  }
}
function toDomain(r: MediumRow): Medium {
  switch (r.type) {
    case "BUCH": return new Buch(r.titel, r.isbn);
    case "FILM": return new Film(r.titel, r.dauerMin);
  }
}
```

**Schöne INFI↔SWP-Spannung (Diskussion wert):** INFI KM5 lehrt **Normalisierung** → würde TPT (Tabellen pro Subtyp) bevorzugen (keine Null-Spalten). SWP/Prisma will's einfach → TPH. Frage an die Klasse: *„Warum verletzt der OOP-Layer hier bewusst die 3NF?"* → weil das Repository die Integrität übernimmt, nicht die Tabelle. (TPT als Alternative kurz zeigen, aber nicht umsetzen.)

### Sequenz-Abstimmung

- **5. Sem (parallel, weitgehend unabhängig):** INFI komplexe Abfragen/Normalformen/Transaktionen; SWP OOP-Grundlagen am kleinen Beispiel (`Bruch`, dann `Medium`/`Leser`). Ab ~Dez gemeinsame Beispieldomäne.
- **6. Sem (Konvergenz):** INFI liefert Prisma + REST (ab 6.5); SWP baut die Desktop-GUI aufs Repository. **Letzte ~3–4 Wochen:** gemeinsames Verbundprojekt (eine App, zwei Noten).

### Domäne – 5 Vorschläge (Schüler co-decided)

Die Domäne bewusst mit **Hierarchie + Zustandsautomat + reichen Abfragen** wählen, weil dort die O/R-Pfriemelei am lehrreichsten ist:

| # | Domäne | Vererbung (Beispiel) | State / Events |
|---|--------|----------------------|----------------|
| 1 | **Bibliothek/Mediathek** | `Medium`→`Buch`/`Film`/`Spiel` | Ausleihe: offen/überfällig/zurück |
| 2 | **Online-Shop** | `Produkt`→`Physisch`/`Digital`/`Abo` | Bestellung: Warenkorb→bezahlt→versendet→storniert |
| 3 | **Musik-Streaming** | `Playable`→`Track`/`Podcast` | Wiedergabe: spielt/pausiert/beendet |
| 4 | **Schulverwaltung/Noten** | `Person`→`SchülerIn`/`LehrerIn` | Note: offen/eingetragen/berufen |
| 5 | **Tierpension/Tierheim** | `Tier`→`Hund`/`Katze`/`Vogel` | Aufenthalt: angemeldet/anwesend/abgemeldet |

Die Schüler wählen mit (z. B. Abstimmung in der ersten 6.-Sem-Stunde); dann gilt die gewählte Domäne in **beiden** Fächern.

---

## Vorbereitung auf Jg IV (→ `jg4-einheiten.md`)

- Jg IV wechselt in die **ERP-Domäne** (SAP, Finanzbuchhaltung, Materialwirtschaft) – nicht in diesem Repo.
- Mitnehmbar aus KM6: Datenmodellierung, REST-Schnittstellen, Transaktionen – diese Konzepte bleiben relevant, auch wenn das Werkzeug (SAP) anders ist.
- Schüler spätestens am Ende 6.12 auf den Domänenwechsel hinweisen.