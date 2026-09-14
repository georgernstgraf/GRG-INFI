# 3HWII — Lehrplan-Extrakt (III. Jahrgang, KM5 + KM6)

> **Klassen-Zuordnung:** `3HWII` (generisches Label, deckt 3AHWII …) ↔ **III. Jahrgang** ↔ **Kompetenzmodul 5 (5. Semester)** und **Kompetenzmodul 6 (6. Semester)**.
> **Rechtsgrundlage:** Anlage 1.24 zu BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019 — Höhere Lehranstalt für Wirtschaftsingenieure – Betriebsinformatik, Fach „Informatik und Informationssysteme".
> **Quelle (①):** konsolidierte Fassung [NOR40217058](https://www.ris.bka.gv.at/Dokumente/Bundesnormen/NOR40217058/NOR40217058.html) — getreu extrahiert aus [`../LEHRPLAN.md`](../LEHRPLAN.md) (verifiziert 2026-07-26).
> **Extraktion:** 2026-09-07 · Rechtsstand ①: unverändert seit 2015 ([`../RIS.md`](../RIS.md)).

> **Unterrichtsstand:** III. Jahrgang läuft im **SJ 2026/27** (aktuelle Klasse 3AHWII). Konkrete Semesterpläne: [`jg3-semesterplan-ws.md`](../../../unterricht/HWII-INFI/jg3-semesterplan-ws.md) und [`jg3-semesterplan-ss.md`](../../../unterricht/HWII-INFI/jg3-semesterplan-ss.md) (PMM-Stil: 13 UE + 2 PLF-DS); Klassen-Drehscheibe inkl. SWP-Verbund-Doku: [`README.md`](README.md); didaktische Steckbriefe: [`../kompetenzmodule/km5.md`](../kompetenzmodule/km5.md) und [`../kompetenzmodule/km6.md`](../kompetenzmodule/km6.md).

---

## 5. Semester — Kompetenzmodul 5 (Bereich Datenbanken)

> **Überblick:** KM5 macht aus dem SQL-Grundhandwerk des II. Jahrgangs (CRUD, JOIN,
> GROUP BY) Abfrage-Kompetenz auf produktivem Niveau. Drei Fragen stehen im Zentrum:
> Wie formuliere ich eine schwierige Frage als eine lesbare Abfrage (Unterabfragen,
> CTEs, Views)? Warum ist eine Abfrage langsam — und wie messe ich das, statt zu raten
> (Indizes, Ausführungspläne)? Und wie bleibt die Datenbank kontrolliert und
> konsistent (DDL als Schema-Evolution, Benutzerverwaltung, Transaktionen)? Flankierend
> die Betriebssicht mit Datenimport/-export und Archivierung; als didaktischer
> Lückenschluss werden die in Jg II nur gestreiften Normalformen nachgeholt. Das
> Semester bleibt SQL-nah (SQLite) — die Einbettung in eine Applikation folgt in KM6.
> Details: [`../kompetenzmodule/km5.md`](../kompetenzmodule/km5.md).

**Bildungs- und Lehraufgabe:**
- komplexe Abfragen in SQL erstellen und durchführen.

  > **Erläuterung:** „Komplex" meint hier Abfragen, die mit einer einzelnen
  > SELECT-JOIN-GROUP-BY-Kette nicht mehr zu lösen sind: Unterabfragen (skalar,
  > korreliert, `EXISTS`/`NOT EXISTS` — inklusive der `IN`/`NULL`-Falle), Common Table
  > Expressions (`WITH … AS`) zur mehrstufigen Strukturierung, Views als gespeicherte,
  > wiederverwendbare Sichten sowie Self-JOINs. „Erstellen und durchführen" heißt
  > beides: die fachliche Frage in SQL formulieren und am konkreten DBMS lauffähig
  > umsetzen — samt Prüfung, ob das Ergebnis die Frage wirklich beantwortet. Im Beruf
  > ist das täglich gefragte Kompetenz: Reports, Auswertungen und Datenbereinigung
  > bestehen aus verschachtelten Abfragen, und wer CTEs liest wie Prosa, braucht
  > keinen Export nach Excel.

**Lehrstoff:**
Abfragesprachen (Unterabfragen, Datendefinitionssprache, Abfrageoptimierung, Benutzerverwaltung, Datenimport/-export, Archivierung).

> **Erläuterung:** „Abfragesprachen" fasst SQL in seiner vollen Breite — Anfragen,
> Definition und Administration. **Unterabfragen:** in einer Abfrage geschachtelte
> Abfragen (skalar, korreliert, `EXISTS`), die eine schwierige Frage in Stufen zerlegen.
> **Datendefinitionssprache (DDL):** `CREATE`/`ALTER`/`DROP` — Schema-Evolution ohne
> Datenverlust (Spalten nachträglich ändern, Tabellen umbenennen). **Abfrageoptimierung:**
> Indizes gezielt setzen (Composite-Index, Spaltenreihenfolge, Over-Indexing als
> Anti-Muster) und mit `EXPLAIN QUERY PLAN` messen — Voll- vs. Index-Scan statt
> Bauchgefühl. **Benutzerverwaltung:** Rechtekonzept via DCL (`GRANT`/`REVOKE`, Rollen)
> — wer darf was lesen, schreiben, löschen; in SQLite nicht abgebildet, daher
> konzeptionell mit PostgreSQL-Demo. **Datenimport/-export:** CSV-Import (`.import`),
> `.dump`, `ATTACH DATABASE`, `VACUUM INTO`, JSON-Abfragen (`json_extract`).
> **Archivierung:** Backup-Strategien und Auslagerung alter Datenbestände — die
> DBA-/Betriebssicht, die ein Produktivsystem vom Schulbeispiel unterscheidet.

## 6. Semester — Kompetenzmodul 6 (Bereich Datenbanken)

> **Überblick:** KM6 dreht die Perspektive: nicht mehr „Wie frage ich Daten ab?",
> sondern „Wie wird aus einem Schema ein benutzbares Programm?" — der gesamte Weg vom
> Applikationsentwurf (Anwendungsfälle, Eingabemasken, Ausgabeformate) über die
> Entwicklung von DB-Programmen (bei uns: Deno/TypeScript mit Prisma, Prepared
> Statements gegen SQL-Injection) und die Benutzerführung bis zur Reportgenerierung
> und zu genormten DB-Schnittstellen (REST über HTTP/JSON). Das Semester mündet im
> Verbundprojekt mit SWP („eine App, zwei Noten"): INFI liefert die Persistenz- und
> Schnittstellenschicht, SWP Domänenklassen und GUI. Details:
> [`../kompetenzmodule/km6.md`](../kompetenzmodule/km6.md).

**Bildungs- und Lehraufgabe:**
- die Vorgehensweise zur Erstellung einer Datenbankanwendung für einen bestimmten Einsatzzweck erläutern;

  > **Erläuterung:** Die „Vorgehensweise" ist der Entwicklungsweg von der
  > Problemstellung zur laufenden Anwendung: Anforderungen erheben → Datenmodell (ER)
  > entwerfen → relationales Schema (Normalformen) ableiten → Anwendungsfälle
  > identifizieren → Eingabemasken und Ausgabeformate festlegen → als DB-Programm
  > implementieren → testen und in Betrieb nehmen. „Erläutern" heißt: jeden Schritt
  > benennen und begründen können, warum er vor dem nächsten kommt — etwa warum eine
  > Eingabemaske ohne fertiges Schema nicht sinnvoll umsetzbar ist. Der Zusatz „für
  > einen bestimmten Einsatzzweck" betont, dass sich der Entwurf am Use Case misst,
  > nicht an maximaler Normalisierung. Im Beruf ist dieses Methodengerüst die
  > Grundlage jeder Anwendungsentwicklung — Projekte scheitern seltener am Code als
  > an übersprungenen Entwurfsschritten.
- die für eine Datenbankanwendung notwendigen Anwendungsfälle, Eingabemasken und Ausgabeformate identifizieren.

  > **Erläuterung:** **Anwendungsfälle** (Use Cases) sind beschriebene Interaktionen
  > eines Benutzers mit der Anwendung, die ein greifbares Ergebnis liefern („Medium
  > ausleihen", „Bestellung stornieren"); **Eingabemasken** sind die Formulare bzw.
  > Programmteile, über die Daten strukturiert und geprüft in die Datenbank gelangen;
  > **Ausgabeformate** die Art der Aufbereitung für die Lesenden (Tabellen, Reports,
  > CSV-/JSON-Export). „Identifizieren" meint die Anforderungsanalyse: pro Use Case
  > ableiten, welche Masken und Formate das System braucht — eine Maske gruppiert
  > dabei Daten über mehrere Tabellen hinweg (Schnittstelle ≠ Schema). In der Praxis
  > ist das die Übersetzungsleistung zwischen Fachseite und Entwicklung und damit die
  > Grundlage jeder Aufwandsschätzung.

**Lehrstoff:**
Anwendungsfälle (Applikationsentwurf); Praktische Datenbankanwendungen (Entwicklung von DB-Programmen, Benutzerführung, Reportgenerierung, genormte DB-Schnittstellen).

> **Erläuterung:** Zum Lehrstoffbereich „Anwendungsfälle (Applikationsentwurf)": der
> Entwurf der Anwendung, bevor Code entsteht — von der Problemstellung über die
> Use-Case-Modellierung (Akteure, Szenarien, Ergebnisse) bis zur Ableitung von
> Datenstruktur, Eingabemasken und Ausgabeformaten sowie der Schichtenarchitektur
> (Präsentation – Logik – Persistenz). Methodisch baut das auf der ER-Modellierung aus
> KM3 auf; im Verbundprojekt liefert SWP die Domänenklassen, INFI den
> Persistenz-Entwurf (u. a. die TPH-gegen-TPT-Entscheidung). Use Cases sind
> UML-Standard und damit Berufssprache von Anforderungsdokumenten und
> Aufwandsschätzungen.

> **Erläuterung:** Zum Lehrstoffbereich „Praktische Datenbankanwendungen": die
> Umsetzung dessen, was das Semester inhaltlich verspricht. **Entwicklung von
> DB-Programmen:** Programme, die die Datenbank als Persistenzschicht einbinden — bei
> uns Deno/TypeScript mit Prisma (Client-API, Migrations als Schema-Versionskontrolle,
> `$transaction` für Atomarität) und Raw SQL via `node:sqlite` als Kontrast.
> **Benutzerführung:** Dialoggestaltung — Menüs, Validierung, verständliche
> Fehlermeldungen, Bestätigung bei zerstörerischen Aktionen. **Reportgenerierung:**
> aufbereitete Auswertungen (Top-N, Gruppenvergleiche) als CSV-/Markdown-/JSON-Export.
> **Genormte DB-Schnittstellen:** standardisierte Zugriffswege auf Datenbanken — SQL
> selbst ist genormt (ISO), klassische Treiber-Schichten wie ODBC/JDBC abstrahieren
> vom konkreten DBMS, und in modernen Anwendungen spricht das Frontend über REST
> (HTTP + JSON) mit der Datenbank; Parametrisierung (Prepared Statements) sichert
> dabei gegen SQL-Injection. Damit bereitet KM6 unmittelbar auf das SWP-Verbundprojekt
> und auf KM9 (Datenbankanwendung mit Web- und GUI-Applikation) vor.

---

> **Annotation:** Der Komplett-Extrakt verzeichnet hier das **Spiralcurriculum** des DB-Tracks: ER/Relationen (KM3) → SQL-Grundlagen (KM4) → **komplexe Abfragen (KM5)** → DB-Applikation (KM6); Jg II liefert das Vorwissen ([`jg2-einheiten.md`](../../../unterricht/HWII-INFI/jg2-einheiten.md), inkl. gestreifter Normalformen, die in KM5 nachgeholt werden).
