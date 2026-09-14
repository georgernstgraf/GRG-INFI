# LEHRPLAN – Informatik und Informationssysteme (Wirtschaftsingenieure Betriebsinformatik)

> **Quelle:** Anlage 1.24 zu BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019 (Höhere Lehranstalt für Wirtschaftsingenieure – Betriebsinformatik).
> Rechtliche Grundlagen und Quellenverweise siehe [`METADATA.md`](../METADATA.md); Rechtsstand und Schichten-Vergleich siehe [`RIS.md`](RIS.md).
> Diese Datei ist der **getreue Extrakt des offiziellen Lehrstoffs (①)** für alle Jahrgänge (I–V) — am **2026-07-26 gegen die konsolidierte Fassung (NOR40217058) verifiziert und korrigiert** (Abweichungen der Vorversion: [`RIS.md`](RIS.md) §6). Eine spätere Session kann nur anhand dieser Datei weitere Jahrgangs-Pläne generieren (siehe Anleitung am Ende).
> **Erläuterungs-Ebene:** Alle `> **Überblick:**`- und `> **Erläuterung:**`-Blockquotes sind didaktische Annotationen (was der Inhalt inhaltlich IST, mit Anwendungs- und Berufsbezug) — klar getrennt vom wortwörtlichen Gesetzestext. Substanz: KM-Steckbriefe [`kompetenzmodule/`](kompetenzmodule/) + [`RIS.md`](RIS.md).

---

## Fach: Informatik und Informationssysteme

Wochenstunden (HTL Spengergasse, schulautonom): I 2 · II 2 · III 3 · IV 2 · V 4.

### Übergeordnete Bildungs- und Lehraufgabe (Absolventenprofil, Auszug)

Im Bereich **Angewandte Informatik** kennen die Absolventinnen und Absolventen Hardware-Komponenten und deren Funktion und können IT-Arbeitsumgebungen einrichten. Sie können Office-Applikationen anwenden, Richtlinien des Datenschutzes und der Datensicherheit berücksichtigen. Sie können Algorithmen in einer Programmiersprache umsetzen und kennen das Konzept der objektorientierten Programmierung. Sie können erweiterte Funktionen der Tabellenkalkulation anwenden. Sie können aus einer Problemstellung ein Datenmodell entwerfen und dieses in einem Datenbanksystem umsetzen sowie Betriebsdaten erfassen und auswerten. Sie können Netzwerkressourcen nutzen und im Netzwerk auftretende Probleme identifizieren.

Im Bereich **Enterprise Resource Planning (ERP)** können sie den Aufbau und die Einsatzgebiete gängiger ERP-Systeme erläutern, Stammdaten anlegen sowie Beschaffungs-, Produktions- und Vertriebsprozesse abbilden und Auswertungen erstellen. Sie können auf Basis einer Auftragssimulation Maßnahmen zur Reduzierung von Durchlaufzeit bzw. Produktkosten treffen.

Im Bereich **Informationssysteme** können sie Workflows für firmeninterne Abläufe und für Kunden-/Lieferantenbeziehungen erstellen sowie aus einer Prozessbeschreibung Geschäftsprozessmodelle erstellen und simulieren.

Im Bereich **Datenbanken** können sie aus einer Problemstellung ein Datenmodell entwerfen und dieses in einem Datenbanksystem umsetzen. Sie können Datenbestände mit Hilfe von Abfragesprachen auswerten, die für eine Datenbankanwendung notwendigen Anwendungsfälle, Eingabemasken und Ausgabeformate identifizieren sowie eine Datenbankanwendung implementieren.

---

## I. Jahrgang (1. und 2. Semester) — KM –

> **Überblick:** Der erste Jahrgang (2 Wochenstunden, ohne Kompetenzmodul-Nummer) vermittelt die
> Grundausbildung im Bereich **Angewandte Informatik**: Wie ist ein Rechner aufgebaut und wie
> verwaltet ein Betriebssystem Dateien und Programme? Wie schützt man Daten, wie erstellt man
> Dokumente, Präsentationen und Tabellenkalkulationen, wie publiziert und kommuniziert man im
> Web — und welche rechtlichen und gesellschaftlichen Folgen hat die Digitalisierung? Der
> Jahrgang ist bewusst werkzeug- und anwendungsorientiert; alles Folgende baut darauf auf: Die
> Datenbank-Laufbahn ab Jg II (KM3–KM6) setzt Datenschutzbewusstsein, Datei-/Systemverständnis
> und v. a. das relationale Denken aus der Tabellenkalkulation voraus, Jg IV/V (ERP) die
> Berechnungs- und Auswertungskompetenz.

**Bildungs- und Lehraufgabe (Bereich Angewandte Informatik):**
- Daten vor Beschädigung und unberechtigtem Zugriff schützen, gesetzliche Rahmenbedingungen informieren und berücksichtigen;
  > **Erläuterung:** „Datensicherheit" meint die physische und logische Unversehrtheit von Daten:
  > Backup-Konzepte (z. B. die 3-2-1-Regel — drei Kopien, zwei Medien, eine extern), Passwort-Qualität,
  > Verschlüsselung und Vergabe von Zugriffsrechten schützen vor Verlust und vor unberechtigtem
  > Zugriff. „Gesetzliche Rahmenbedingungen" sind in Österreich v. a. die DSGVO (Verarbeitung
  > personenbezogener Daten, Auskunfts- und Meldepflichten) sowie Urheber- und Lizenzrecht bei
  > Software. Berufsbezug: Alle in IT- oder Büroberufen Tätigen treffen täglich auf
  > Datenschutzpflichten (Verschwiegenheit, verlorene USB-Sticks, Phishing-Mails) — Verstöße
  > gefährden den Job und das Unternehmen, Ransomware-Attacken ganze Betriebe.
- Daten eingeben, bearbeiten, formatieren, drucken sowie Dokumente (inkl. Seriendokumente) erstellen und bearbeiten;
  > **Erläuterung:** Das ist das Handwerk der **Textverarbeitung**: Zeichen-, Absatz- und
  > Seitenformatierung, Formatvorlagen statt Direktformatierung (Layout gehört in Vorlagen, nicht in
  > tausend einzelne Mausklicks), druckfertige Ausgabe bis hin zur PDF-Erzeugung.
  > **Seriendokumente** verbinden eine Briefvorlage (statischer Teil) mit einer Datenquelle
  > (Tabelle mit Empfängern) zu personalisierter Massenpost — dieselbe Idee wie später bei
  > Report-Generierung in Datenbanken: Trennung von Layout und Daten. Berufsbezug: Angebote,
  > Protokolle und Berichte sind Dauerbegleiter jedes Büro- und IT-Arbeitsplatzes.
- Präsentationen erstellen, das Internet nutzen, im Web publizieren und über das Netz kommunizieren;
  > **Erläuterung:** Vier Tätigkeitsfelder: **Präsentationen** (Foliendesign, Visualisierung,
  > Vortragstechnik — weniger Text, mehr Aussage), **Internetnutzung** (Dienste wie WWW, E-Mail,
  > Cloud-Speicher; Recherche und Quellenbewertung), **Publikation im Web** (einfache Webauftritte
  > über CMS oder HTML — die preiswerteste Vermarktungsfläche für Firmen) und **Kommunikation über
  > das Netz** (E-Mail-Konventionen/Netiquette, Zusammenarbeit über Plattformen). Berufsbezug:
  > Projektergebnisse und später die Diplomarbeit müssen präsentiert werden; wer nicht überzeugen
  > kann, dessen gute Arbeit bleibt unsichtbar.
- in Tabellenkalkulationen Berechnungen durchführen, Entscheidungsfunktionen einsetzen, Diagramme erstellen, Daten austauschen und Datenbestände auswerten;
  > **Erläuterung:** Die **Tabellenkalkulation** ist das zentrale Werkzeug des ersten Jahrgangs:
  > Zellbezüge (relativ vs. absolut — `$`-Notation) und Funktionen wie `SUMME`, `WENN` und
  > `SVERWEIS` machen aus einer Tabelle ein Rechenblatt; „Entscheidungsfunktionen" meint
  > Verzweigungen im Formularfluss (`WENN`/`ODER`/`UND`). Diagramme erfordern die Wahl des
  > richtigen Typs (Säule für Vergleich, Linie für Zeitverlauf, Kreis nur bedingt); Datenaustausch
  > über CSV/Import-Filter, Auswertung über Sortieren, Filtern und Pivot-Tabellen. Konzeptionell
  > ist das der Vorläufer der relationalen Tabellen ab KM3 — und beruflich die Basis jeder
  > Kalkulation, auf die Kostenrechnung und Controlling in Jg IV/V aufbauen.
- die gesellschaftlichen Auswirkungen von Informationstechnologien erkennen und zu aktuellen IT-Themen Stellung nehmen.
  > **Erläuterung:** Das ist der reflektierende Anteil des Gegenstands: Wie verändert IT die
  > Arbeitswelt (Automatisierung, Plattformökonomie), wo gefährdet sie Privatsphäre und Demokratie
  > (Überwachung, Filterblasen, KI-Bias), wo schafft sie Teilhabe? Ziel ist die **begründete
  > Stellungnahme** — eine Behauptung mit Argumenten und Quellen, nicht die Meinung. Das trainiert
  > dieselbe Kompetenz wie die Matura-Kompetenz „Stellung nehmen aus dem Kontext". Berufsbezug:
  > Technische Entscheidungen (Datenweitergabe, KI-Einsatz, Automatisierung) haben immer auch
  > ethische und rechtliche Seiten, für die Informatiker:innen in Unternehmen Mitverantwortung tragen.

**Lehrstoff (Bereich Angewandte Informatik):**
Hardwarekomponenten, Betriebssysteme, Datensicherheit, Textverarbeitung und Präsentation, Publikation und Präsentation im Web, Tabellen und Diagramme, rechtliche und gesellschaftliche Aspekte im Umfeld der Informationstechnik.

> **Erläuterung:** Der Bereich **Angewandte Informatik** im ersten Jahrgang ist eine
> Werkzeugkunde mit Systemverständnis: **Hardwarekomponenten** (CPU, RAM, Massenspeicher,
> Ein-/Ausgabe — wie funktioniert ein Rechner physikalisch), **Betriebssysteme** (Dateisystem,
> Prozesse, Benutzer — was verwaltet die Software unter den Anwendungen), **Datensicherheit**
> (Backups, Passwörter, Verschlüsselung, DSGVO), **Textverarbeitung und Präsentation**
> (Formatvorlagen, Seriendokumente, Foliendesign) sowie **Publikation und Präsentation im Web**
> (Webauftritt, Netiquette, Zusammenarbeit). **Tabellen und Diagramme** führen ins
> Tabellenkalkulations-Denken (Bezüge, Funktionen, Auswertung), das konzeptionelle Vorstufe der
> Datenbanken ab Jahrgang II ist. **Rechtliche und gesellschaftliche Aspekte** rahmen alles ein —
> von Urheberrecht bis zur Automatisierungsdebatte. In der Spengergasse läuft dieser Jahrgang als
> „rawData/Office"-Jahrgang ohne eigenen Klassenordner in diesem Repo.

---

## II. Jahrgang — Bereich Datenbanken

### 3. Semester – Kompetenzmodul 3

> **Überblick:** KM3 ist der Einstieg in die Datenbankwelt und der Anfang des viersemestrigen
> DB-Spiralcurriculums (KM3 Modellieren → KM4 Abfragen → KM5 komplexe Abfragen → KM6
> DB-Anwendung). Der Weg führt von der Problemstellung über das **Entity-Relationship-Modell**
> (konzeptioneller Entwurf: Was sind die Dinge der Welt, ihre Attribute und Beziehungen?) zum
> **Relationenschema** (logischer Entwurf: Normalformen, Schlüssel, Fremdschlüssel) und endet in
> der Anlage der Tabellen in einem konkreten Datenbanksystem (**DDL**). Im Unterricht (SJ 2025/26,
> rückgepflegt) wurde KM3 mit KM4 verzahnt und mit bigER/Crowsfoot-Notation, SQLite und Deno
> (`node:sqlite`) umgesetzt; Normalformen wurden systematisch erst in KM5 nachgeholt.
> Details: [`kompetenzmodule/km3.md`](kompetenzmodule/km3.md).

**Bildungs- und Lehraufgabe:**
- Aufgabenstellungen modellieren und in einem Entity-Relationship (ER)-Modell abbilden;
  > **Erläuterung:** Die ER-Modellierung ist **konzeptionelle Datenmodellierung**: Aus einer
  > (meist textuellen) Problemstellung werden **Entities** (die Dinge, über die Daten gespeichert
  > werden sollen — Kunde, Artikel, Rechnung), **Attribute** (ihre Eigenschaften) und
  > **Beziehungen** (Kunde *kauft* Artikel) herausgearbeitet und grafisch notiert; die
  > **Kardinalität** (1:1, 1:n, n:m) legt fest, wie viele Entitäten je Seite an der Beziehung
  > hängen. Das ER-Modell ist bewusst noch datenbankunabhängig — es ist die gemeinsame Sprache
  > zwischen Fachabteilung und Entwickler:in. Berufsbezug: Jedes Datenbankprojekt (und jede
  > Diplomarbeit) beginnt genau hier; ein falsches ER-Modell rächt sich in jeder späteren Stufe.
- ein ER-Modell in Relationen auflösen;
  > **Erläuterung:** Das „Auflösen" ist die regelhafte Übersetzung des ER-Modells in das
  > **Relationenschema** (Tabellenform): Jedes Entity wird eine Tabelle, jedes Attribut eine
  > Spalte; 1:n-Beziehungen werden über **Fremdschlüssel** realisiert, n:m-Beziehungen über eine
  > eigene **Beziehungstabelle** (Zwischentabelle), deren Primärschlüssel meist aus beiden
  > Fremdschlüsseln zusammengesetzt ist. Weil diese Mapping-Regeln algorithmisch sind, lässt sich
  > die Übersetzung in beide Richtungen üben — im Unterricht z. B. am Dauerbeispiel
  > Musik-Streaming-DB (ER ↔ SQL). Das Ergebnis ist ein Schema-Entwurf, bevor eine Zeile DDL
  > geschrieben wird.
- Tabellen und Beziehungen in einem Datenbanksystem (DBS) erstellen.
  > **Erläuterung:** Die Umsetzung ins System ist der **physische Entwurf**: Mit der Data
  > Definition Language (`CREATE TABLE`, Datentypen, `ALTER`) werden Tabellen angelegt und über
  > Constraints (**Primärschlüssel**, **Fremdschlüssel**, `NOT NULL`, `UNIQUE`, `CHECK`) die
  > Beziehungen und Gültigkeitsregeln erzwungen — inkl. `ON DELETE`-Verhalten und in SQLite der
  > Aktivierung via `PRAGMA foreign_keys=ON`. „Abfragegeneratoren" (grafische Designer) sind eine
  > Alternative zur Skript-DDL, im Unterricht wird bewusst SQL geschrieben. Berufsbezug: Das
  > Anlegen eines sauberen Schemas inkl. referentieller Integrität ist der Unterschied zwischen
  > „einer Excel-Datei" und einer echten Datenbank.

**Lehrstoff:**
Datenmodellierung (konzeptioneller Datenbankentwurf, Notation, Entities, Attribute, Beziehungen, Kardinalitäten, Generalisierung, Aggregation); Datenbankentwurf (logischer Datenbankentwurf, Normalformen, Relationenschema, Schlüssel, Schlüsselkandidat, Primärschlüssel, Fremdschlüssel, Indizes, referentielle Integrität); Data Definition Language (physischer Datenbankentwurf, Abfragegeneratoren, SQL).

> **Erläuterung:** Der Bereich **Datenmodellierung** ist der konzeptionelle Entwurf: Welcher
> **Notation** (Chen mit Rauten, Crowsfoot mit Krallen — im Unterricht bigER) folgt das Diagramm,
> und welche Sprachmittel gibt es? Neben Entities, Attributen, Beziehungen und Kardinalitäten
> sind das die Verfeinerungen **Generalisierung** (IS-A-Hierarchie: `Kunde` als Generalisierung
> von `Firmenkunde`/`Privatkunde`) und **Aggregation** (eine Beziehung zwischen Beziehungen wird
> selbst zum Entity — z. B. „Lieferung" als Aggregat aus Bestellung und Artikel). Diese
> Konzepte tragen Anforderungsanalyse mit Kund:innen, die Fachbegriffe sprechen, aber keine
> Tabellen kennen.
>
> **Erläuterung:** Der Bereich **Datenbankentwurf** (logischer Entwurf) überführt das ER-Modell
> in ein **Relationenschema** und prüft dessen Qualität mit den **Normalformen**: 1NF verlangt
> atomare Attributwerte, 2NF beseitigt partielle, 3NF transitive Abhängigkeiten — jede Stufe
> verhindert konkret benennbare **Anomalien** beim Einfügen, Ändern und Löschen. Zentrale Begriffe
> sind **Schlüsselkandidat** (jede Spaltengruppe, die eine Zeile eindeutig identifiziert), daraus
> der gewählte **Primärschlüssel**, sowie **Fremdschlüssel** als Verweise auf andere Tabellen.
> **Indizes** sind Zugriffspfade für schnelles Suchen (mit dem Trade-off: Lese-Beschleunigung gegen
> Schreib-Bremse), und **referentielle Integrität** garantiert, dass Fremdschlüssel immer auf
> existierende Zeilen zeigen — kein Bestellpositionssatz ohne zugehörige Bestellung.
>
> **Erläuterung:** Der Bereich **Data Definition Language** ist der **physische Entwurf**: Das
> Schema wird in der DDL des konkreten Systems (hier: SQL, im Unterricht SQLite) angelegt —
> `CREATE TABLE` mit Datentypen und Constraints, `ALTER TABLE` für Änderungen, `DROP` für das
> Entfernen. „Abfragegeneratoren" meinen grafische Werkzeuge, die aus einem Entwurf DDL erzeugen
> (Visio-Style Designer); bewusst wird im Unterricht SQL von Hand geschrieben, weil man das
> Erzeugte lesen und prüfen können muss. Die drei Bereiche dieses Lehrstoffs sind zugleich die
> drei Entwurfsebenen der Datenbanktheorie — konzeptionell → logisch → physisch.

### 4. Semester – Kompetenzmodul 4

> **Überblick:** KM4 dreht das DB-Modul von der Struktur zur **Abfragesprache**: Die in KM3
> angelegten Tabellen werden mit SQL befragt und gefüllt — Projektion/Selektion als Grundoperationen,
> Gruppierung und Aggregatfunktionen für Auswertungen, der **Verbund** (JOIN) als Methode, Daten
> aus mehreren Tabellen zusammenzuführen, dazu DML (Daten schreiben) und DCL (Rechte verwalten).
> Zweiter Strang: die **einfache Datenbankanwendung** — laut Lehrstoff Entwurf von Formularen und
> Berichten; in der Schulumsetzung SJ 2025/26 als ORM-Pfad mit Prisma realisiert (Formulare-/Berichte-
> Anteil wurde konzeptionell in KM5/KM6 nachgeformt). Details: [`kompetenzmodule/km4.md`](kompetenzmodule/km4.md).

**Bildungs- und Lehraufgabe:**
- Abfragen in SQL erstellen und durchführen;
  > **Erläuterung:** SQL ist eine **deklarative** Sprache: Man beschreibt, *welche* Daten man
  > haben will, nicht *wie* man sie Schritt für Schritt beschafft — das DBMS erzeugt den
  > Ausführungsplan. Die Grundoperationen entsprechen der relationalen Algebra: **Projektion**
  > (Spaltenauswahl, `SELECT`), **Selektion** (Zeilenfilter, `WHERE` inkl. `LIKE`, boolesche
  > Operatoren), **Gruppierung** mit `GROUP BY`/`HAVING` und **Aggregatfunktionen**
  > (`COUNT`, `SUM`, `AVG`, …), sowie der **Verbund** (`JOIN`, auch Self-JOIN) über Fremdschlüssel-
  > Beziehungen. Wer das beherrscht, kann jede im Betrieb anfallende Frage („Welcher Kunde hat
  > 2025 am meisten umgesetzt?") direkt am Datenbestand beantworten — die Auswertung bleibt in der
  > Datenbank statt im Excel-Export.
- eine einfache Datenbankanwendung erstellen.
  > **Erläuterung:** Über Einzelabfragen hinaus geht es um ein kleines **Programm rund um die
  > Datenbank**: Nutzersicht für Personen, die kein SQL können. Der offizielle Lehrstoff denkt
  > dabei an **Formulare** (Eingabemasken mit Validierung) und **Berichte** (formatierte
  > Auswertungen); die Schulumsetzung ging den ORM-Pfad mit **Prisma** (Schema, Migrationen,
  > Client-API wie `findMany`/`include`) — dieselbe Idee, moderner Stack: Die Anwendung redet
  > typsicher mit der Datenbank statt über handgestrickte SQL-Strings. Damit ist dieser Punkt der
  > direkte Vorgriff auf KM6 (DB-Programme, Schnittstellen) und der Grundpfeiler des späteren
  > SWP-Verbundprojekts.

**Lehrstoff:**
Abfragesprachen (Projektion, Selektion, Gruppierung, Aggregatfunktionen, Verbund, Data Manipulation Language, Data Control Language); Entwurf von Formularen und Berichten.

> **Erläuterung:** Der Bereich **Abfragesprachen** systematisiert SQL nach seinen Bausteinen:
> **Projektion** (Spalten) und **Selektion** (Zeilen) sind die Basisoperatoren, **Gruppierung**
> mit `GROUP BY`/`HAVING` und **Aggregatfunktionen** bauen Auswertungen, der **Verbund** (JOIN)
> navigiert Beziehungen. Die **Data Manipulation Language** schreibt Daten (`INSERT`, `UPDATE`,
> `DELETE` — das „CRUD" ohne R für Read), die **Data Control Language** verwaltet Zugriffe
> (`GRANT`/`REVOKE`; in SQLite nur konzeptionierbar, da SQLite keine Benutzer kennt — praktisch
> relevant in PostgreSQL & Co.). Der Klammerinhalt ist zugleich der rote Faden des Semesters:
> vom einfachen `SELECT` bis zum kontrollierten Schreibzugriff.
>
> **Erläuterung:** Der Bereich **Entwurf von Formularen und Berichten** meint die Nutzersicht
> einer Datenbankanwendung: **Formulare** sind Eingabemasken, die plausible Werte erzwingen
> (Pflichtfelder, Wertelisten, Typprüfung — Validierung vor dem Schreibzugriff) und die
> Bedienung ohne SQL-Kenntnis ermöglichen; **Berichte** sind formatierte Auswertungen mit
> Gruppierungen, Summenzeilen und Drucklayout. Im Unterricht wurde dieser Bereich durch die
> Prisma-/CLI-Umsetzung ersetzt und in KM5 (Views als Sichten) bzw. KM6 (Reportgenerierung,
> Benutzerführung) wieder aufgegriffen — beruflich bleibt er aktuell: Klassische
> Business-Software (ERP-Reports, Access-Ära) lebt genau von diesem Formular/Bericht-Duo.

---

## III. Jahrgang — Bereich Datenbanken

### 5. Semester – Kompetenzmodul 5

> **Überblick:** KM5 hebt das SQL-Grundhandwerk der 2. Klasse (CRUD, JOIN, GROUP BY) auf
> **Abfrage-Kompetenz für den Betrieb**: (1) schwierige Fragen als lesbare verschachtelte
> Abfragen formulieren — Unterabfragen, CTEs, Views; (2) das Schema qualitativ beherrschen und
> Performance messen statt raten — Normalformen-Lückenschluss aus Jg II, Indizes,
> `EXPLAIN QUERY PLAN`; (3) die Datenbank als kontrolliertes, administrierbares System behandeln —
> Transaktionen/ACID, Benutzerverwaltung, Datenimport/-export, Archivierung. Das Semester ist
> **aktiv unterrichtet (SJ 2026/27)**, SQL-nah (SQLite, `sqlite3`-CLI, Skripte); ab ~Dez
> angedeuteter Verbund mit SWP (gemeinsame Beispieldomäne). Details:
> [`kompetenzmodule/km5.md`](kompetenzmodule/km5.md) · Semesterplan:
> `unterricht/HWII-INFI/jg3-semesterplan-ws.md`.

**Bildungs- und Lehraufgabe:**
- komplexe Abfragen in SQL erstellen und durchführen.
  > **Erläuterung:** „Komplex" heißt: Die Frage lässt sich nicht mehr in einer flachen
  > `SELECT`-Zeile beantworten, sondern muss **verschachtelt oder mehrstufig** gedacht werden —
  > z. B. „Kunden, die *kein* Produkt der Kategorie X gekauft haben". Werkzeuge dafür sind
  > **Unterabfragen** (skalar, korreliert, `EXISTS`/`NOT EXISTS` — mit der `NULL`-Falle bei
  > `NOT IN`), **Common Table Expressions** (`WITH … AS`) als Strukturierungswerkzeug für
  > Lesbarkeit und **Views** als wiederverwendbare Sichten. Der Kern der Kompetenz ist
  > Umdenken: nicht das Ergebnis in Excel nachbearbeiten, sondern die Frage *in* der Abfrage
  > lösen. Berufsbezug: Auswertungs- und Datenbereinigungsanfragen in Betrieben sind praktisch
  > immer mehrstufig — wer CTEs liest wie Prosa, wird in jedem Data-Job gebraucht.

**Lehrstoff:**
Abfragesprachen (Unterabfragen, Datendefinitionssprache, Abfrageoptimierung, Benutzerverwaltung, Datenimport/-export, Archivierung).

> **Erläuterung:** Der Bereich **Abfragesprachen** in KM5 vertieft und erweitert das KM4-Repertoire
> um den Betriebs- und Entwurfsalltag einer Datenbank: **Unterabfragen** (inkl. korrelierter Form
> und `EXISTS`) lösen verschachtelte Fragestellungen; die **Datendefinitionssprache** wird als
> Schema-Evolution verstanden (`ALTER TABLE`, `DROP`, Änderungen ohne Datenverlust — das Schema
> ist lebendig, nicht einmalig); **Abfrageoptimierung** verbindet Indizes (Composite-Index,
> Spaltenreihenfolge, Over-Indexing) mit der Messhaltung des `EXPLAIN QUERY PLAN` (Voll- vs.
> Index-Scan lesen statt raten); **Benutzerverwaltung** umfasst Rechte- und Rollenkonzepte (DCL;
> in SQLite nur konzeptionell, via PostgreSQL-Demo erlebbar); **Datenimport/-export** und
> **Archivierung** sind die Betriebsthemen (`.import` CSV, `.dump`, `VACUUM INTO`, Backup-Strategien),
> die ein Produktivsystem vom Schulbeispiel unterscheiden. Flankierend gehören Transaktionen/ACID
> zum Verständnis (Warum eine Überweisung niemals zwei Einzel-`UPDATE`s sein darf) — laut Steckbrief
> Teil des Semesterplans; beruflich ist gerade dieser Bundle „Optimierung + Betrieb" das
> Tagesgeschäft von DBA-nahen Rollen.

### 6. Semester – Kompetenzmodul 6

> **Überblick:** KM6 bringt die Datenbank **in die Anwendung**: Aus dem Schema wird ein
> benutzbares Programm. Erst die Methodik — von der Problemstellung über ER und Schema zu
> **Anwendungsfällen**, Eingabemasken und Ausgabeformaten — dann die Umsetzung: DB-Programme mit
> **Prisma** (Schema-Design, Migrationen, Client-API), abgesicherte Zugriffe über Prepared
> Statements (SQL-Injection!), **REST/JSON als genormte DB-Schnittstelle** und
> Reportgenerierung (CSV/Markdown-Export). Das Semester (SS 2027) mündet im **Verbundprojekt mit
> SWP** („eine App, zwei Noten": INFI implementiert das von SWP definierte
> Repository-Interface); der individuelle Verbund-Beitrag gilt als PLF-Äquivalent. Details:
> [`kompetenzmodule/km6.md`](kompetenzmodule/km6.md) · Verbund-Doku: [`3HWII/README.md`](3HWII/README.md).

**Bildungs- und Lehraufgabe:**
- die Vorgehensweise zur Erstellung einer Datenbankanwendung für einen bestimmten Einsatzzweck erläutern;
  > **Erläuterung:** Gefordert ist die **Methodik als erzählbarer Prozess** — die Software-
  > Engineering-Miniatur des DB-Tracks: (1) Problemstellung analysieren, (2) konzeptionell
  > modellieren (ER), (3) logisch entwerfen (Relationen, Normalformen), (4) physisch anlegen
  > (Schema, Constraints), (5) Anwendungsfälle und Masken/Formate ableiten, (6) implementieren,
  > (7) mit Testdaten prüfen. „Für einen bestimmten Einsatzzweck" betont, dass die Entscheidungen
  > (Normalisierungsgrad, Schnittstellen, Ausgabeformate) sich am Use Case messen lassen, nicht an
  > der Regel — dieselbe Haltung wie „brauchbar heißt use-case-gerecht, nicht maximal normalisiert".
  > Berufsbezug: Diese Vorgehensweise ist der Kern jedes Werkstudenten- und Junior-Entwickler-Jobs
  > im Backend-Bereich.
- die für eine Datenbankanwendung notwendigen Anwendungsfälle, Eingabemasken und Ausgabeformate identifizieren.
  > **Erläuterung:** Das ist die Schnittstelle zwischen Datenmodell und Mensch: **Anwendungsfälle**
  > (Use Cases) beschreiben, *wer* mit der Anwendung *was* tun will (Bestellung anlegen, Bestand
  > abfragen) — sie bestimmen Funktionen und Rechte; **Eingabemasken** sind die Formulare dafür
  > (Validierung, sinnvolle Feldreihenfolge, Bestätigung bei zerstörerischen Aktionen);
  > **Ausgabeformate** legen fest, wie Ergebnisse erscheinen (Liste, Report, CSV/JSON-Export,
  > Diagramm). Das Identifizieren geschieht systematisch aus den Anforderungen — im Verbundprojekt
  > konkret: SWP liefert Domäne und Use Cases, INFI leitet daraus Prisma-Schema und REST-Endpunkte
  > ab. Berufsbezug: Anforderungsanalyse „von der Ablaufbeschreibung zur Maske" ist der Alltag im
  > Gespräch mit Fachabteilungen.

**Lehrstoff:**
Anwendungsfälle (Applikationsentwurf); Praktische Datenbankanwendungen (Entwicklung von DB-Programmen, Benutzerführung, Reportgenerierung, genormte DB-Schnittstellen).

> **Erläuterung:** Der Bereich **Anwendungsfälle (Applikationsentwurf)** ist die konzeptionelle
> Vorstufe vor dem Coden: Use Cases identifizieren und als Entwurfselemente des
> **Applikationsentwurfs** nutzen — jede Funktion der Anwendung wird auf einen Anwendungsfall
> zurückgeführt, jede Maske und jedes Ausgabeformat auf einen Use-Case-Schritt. Das schlägt die
> Brücke von der Datenmodellierung (KM3) zur Programmarchitektur: Datenmodell + Use Cases =
> Anwendungsdesign.
>
> **Erläuterung:** Der Bereich **Praktische Datenbankanwendungen** ist der Umsetzungsteil:
> **Entwicklung von DB-Programmen** (im Stack: TypeScript/Deno mit Prisma als ORM — Schema,
> Migrationen als „Schema-Git", Client-API inkl. `$transaction` für Atomarität; der Kontrast dazu:
> Raw SQL via `node:sqlite` mit Prepared Statements gegen SQL-Injection); **Benutzerführung**
> (Menüs, Validierung, verständliche Fehlermeldungen, Bestätigungsdialoge); **Reportgenerierung**
> (Auswertungen als CSV-/Markdown-/JSON-Export, Reporting-Queries wie Top-N und Gruppenvergleiche);
> **genormte DB-Schnittstellen** (standardisierte Zugriffe auf Datenbanken — SQL-Standard,
> Treiber-APIs, im Unterricht als REST/JSON mit `Deno.serve` umgesetzt: jede App und jedes
> Drittsystem spricht so mit der Datenbank). Damit ist der DB-Track des Fachs abgeschlossen —
> Jg IV wechselt die Domäne, die Konzepte (Modellierung, Transaktionsdenken, Schnittstellen)
> bleiben.

---

## IV. Jahrgang — Bereich Enterprise Resource Planning (ERP)

> **Domänenwechsel:** Ab Jg IV wechselt das Fach von der Datenbank-Domäne in die ERP-Domäne (SAP, Finanzbuchhaltung, Materialwirtschaft). Der offizielle Lehrstoff (KM7+KM8) ist hier dokumentiert; eine detaillierte Einheitenplanung liegt in `unterricht/HWII-INFI/jg4-einheiten.md` als Stub.

### 7. Semester – Kompetenzmodul 7

> **Überblick:** KM7 ist der **Domänenwechsel** des Fachs: Von der selbstgebauten Datenbank zur
> **integrierten Unternehmenssoftware**. Erst das Verständnis der Gattung — was ein
> **ERP-System** ist, welche Anbieter und Module es gibt, wie es organisiert ist — dann die erste
> betriebswirtschaftliche Kernanwendung darin: **Finanzbuchhaltung** (verbuchen nach den Regeln
> der doppelten Buchhaltung, Konten, Bilanz und GuV, Reports). Konzeptionell knüpfen
> Stammdaten-/Prozess-/Transaktionsdenken aus KM3–KM6 an; die Werkzeuge wechseln auf ein
> ERP-System (an der HTL Spengergasse: SAP-ähnliche Übungsumgebung — bei Konkretisierung zu
> klären, siehe [`kompetenzmodule/km7.md`](kompetenzmodule/km7.md)). Einheitenplanung:
> `unterricht/HWII-INFI/jg4-einheiten.md` (Stub).

**Bildungs- und Lehraufgabe (Bereich ERP):**
- den Aufbau und die Einsatzgebiete gängiger ERP-Systeme in Unternehmen erläutern;
  > **Erläuterung:** **ERP (Enterprise Resource Planning)** ist die Gattung der integrierten
  > Standardsoftware, die alle Kernprozesse eines Unternehmens auf **einer gemeinsamen
  > Datenbasis** abbildet — Beschaffung, Produktion, Vertrieb, Finanzwesen, Personal. „Integriert"
  > heißt: Eine erfasste Bestellung ist sofort für Logistik, Buchhaltung und Controlling sichtbar;
  > niemand tippt Daten doppelt. Der „Aufbau" umfasst die **Modulstruktur** (bei SAP: FI
  > Finanzwesen, MM Materialwirtschaft, PP Produktion, SD Vertrieb, CO Controlling …), die
  > **Organisationseinheiten** (Mandant, Buchungskreis, Werk, Lager — die Hierarchie, in der das
  > System Daten strukturiert) und die Benutzeroberfläche (Transaktionen). „Gängige Systeme" sind
  > v. a. SAP S/4HANA, Oracle, Microsoft Dynamics — im deutschsprachigen Raum dominiert SAP.
  > Einsatzgebiete: von der Einzelfirma bis zum Konzern; der Berufsalltag der
  > Wirtschaftsingenieur:innen (Key-User, Prozessberatung, Controlling) spielt sich weitgehend
  > in solchen Systemen ab.
- einfache Geschäftsfälle im ERP-System verbuchen und entsprechende Reports erstellen.
  > **Erläuterung:** Ein **Geschäftsfall** ist ein wirtschaftlicher Vorgang mit Geldwert —
  > Einkauf auf Rechnung, Barverkauf, Banküberweisung, Lohnzahlung. „Verbuchen" heißt nach den
  > Regeln der **doppelten Buchführung**: Jeder Vorgang verändert mindestens zwei Konten, jeder
  > Buchungssatz hat Soll- und Habenseite, und die Summenbalance bleibt immer gewahrt („es steht
  > nichts im Nirgendwo"). Im ERP-System läuft das über Belege: Buchungssatz erzeugen, Konto
  > finden, Betrag und Gegenkonto erfassen. **Reports** sind die Systemauswertungen — Kontenblatt,
  > offene Posten, Summen- und Saldenliste bis hin zu Bilanz und GuV — und damit die Antworten auf
  > die Standardfragen des Managements („Was schulden wir wem?", „Wie steht das Konto?").

**Lehrstoff (Bereich ERP):**
ERP-Systeme (Systeme und Anbieter, Module, Organisationseinheiten, Benutzeroberfläche, Reports); Finanzbuchhaltung (Konten, Kontenplan, Buchungen, Kreditoren- und Debitorenbuchhaltung, Bilanz und GuV-Rechnung, Auswertungen und Analysen).

> **Erläuterung:** Der Bereich **ERP-Systeme** behandelt die Gattung als solche: die **Systeme
> und Anbieter**-Landschaft (SAP als Marktführer im DACH-Raum, Oracle, Microsoft Dynamics,
> aber auch spezialisierte Mittelstandssoftware), den **modularen Aufbau** (Funktionsblöcke je
> Abteilungs-/Prozessbereich, die auf gemeinsamen Stammdaten und Bewegungsdaten aufsetzen), die
> **Organisationseinheiten** (Mandant → Buchungskreis → Werk/Lager als Datenhierarchie — sie
> entscheidet, was das System wo sieht), die **Benutzeroberfläche** (Transaktionscodes,
> Navigation, Selektionen — berühmt-berüchtigt ihre Lernkurve) sowie die **Reports** als
> integrierte Auswertungsmöglichkeit je Modul. Ziel ist Gattungsverständnis statt
> Einzelproduktschulung: Wer ein System verstanden hat, findet sich in jedem zurecht.
>
> **Erläuterung:** Der Bereich **Finanzbuchhaltung** ist das betriebswirtschaftliche Herzstück
> des Semesters: **Konten** sind die „Schubladen", auf denen Vorgänge gesammelt werden; der
> **Kontenplan** ist die systematische Gliederung (Bestandskonten für Vermögen/Schulden,
> Erfolgskonten für Aufwand/Ertrag, in Österreich nach dem Gliederungsschema des UGB geordnet).
> **Buchungen** folgen der Soll/Haben-Logik der doppelten Buchführung. Die
> **Kreditorenbuchhaltung** verwaltet Verbindlichkeiten gegenüber Lieferanten,
> die **Debitorenbuchhaltung** Forderungen gegenüber Kunden — beide mit offenen Posten und
> Zahlungsabwicklung. **Bilanz** (Vermögen vs. Kapital zu einem *Stichtag*) und
> **GuV-Rechnung** (Erträge vs. Aufwendungen über eine *Periode* → Gewinn/Verlust) sind die
> beiden Abschluss-Dokumente; **Auswertungen und Analysen** verdichten sie zu
> Managementinformationen (Kennzahlen wie Umsatzrendite, Liquiditätsgrade). Der
> Berufsbezug ist unmittelbar: Rechnungswesen-Kenntnisse auf Systemebene sind
> Eintrittskarte in Finance- und Controlling-Rollen.

### 8. Semester – Kompetenzmodul 8

> **Überblick:** Das zweite ERP-Semester dreht sich um **Stammdaten und logistische Prozesse**:
> die komplette **Beschaffungskette** der Materialwirtschaft (vom Bedarf über Bestellung und
> Wareneingang bis zur Rechnungsprüfung und Zahlung) und die **Produktionsplanung und -steuerung**
> (Stücklisten, Arbeitspläne, Terminierung, Vor-/Nachkalkulation, Fertigungsauftrag,
> Betriebsdatenerfassung). Das Lernziel ist ein einziges, aber großes: Stammdaten anlegen und die
> Prozessketten im System *abbilden* — also die ERP-Logik selbst durchlaufen. Damit ist die
> Grundlage für Jg V gelegt (Vertrieb und Kostenrechnung schließen die Wertschöpfungskette ab).
> Details: [`kompetenzmodule/km8.md`](kompetenzmodule/km8.md) · Einheitenplanung:
> `unterricht/HWII-INFI/jg4-einheiten.md` (Stub).

**Bildungs- und Lehraufgabe (Bereich ERP):**
- Stammdaten in einem ERP-System anlegen und die entsprechenden Beschaffungs-, Produktions- und Vertriebsprozesse abbilden.
  > **Erläuterung:** **Stammdaten** sind die zeitlich relativ stabilen Basisdaten des Systems —
  > Materialstämme (Was für ein Artikel? Preis, Maßeinheit, Dispositionsparameter),
  > Lieferanten- und Kundenstämme, Stücklisten und Arbeitsplätze — im Unterschied zu den
  > kurzlebigen **Bewegungsdaten** (Bestellungen, Buchungen, Rückmeldungen). Regel: Einmal
  > gepflegte Stammdaten fließen in jeden Prozess; fehlerhafte Stammdaten vergiften das ganze
  > System („garbage in, garbage out"). „Prozesse abbilden" heißt, die Ketten im System
  > durchspielen: **Beschaffung** (Bedarf → Bestellung → Wareneingang → Rechnungsprüfung →
  > Zahlung), **Produktion** (Planung → Fertigungsauftrag → Rückmeldung → Kalkulation) und
  > **Vertrieb** (Anfrage bis Zahlungseingang — Vertiefung in Jg V). Berufsbezug: Die Pflege von
  > Stammdaten und das Abbilden von Prozessen ist die klassische Einstiegs- und
  > Key-User-Rolle am Schnittpunkt von Fachabteilung und IT.

**Lehrstoff (Bereich ERP):**
Materialwirtschaft (Beschaffungsprozess, Materialstammdaten, Lieferantenstammdaten, Bedarfsermittlung, Bestellung, Wareneingang, Rechnungsprüfung, Zahlungsausgang); Produktionsplanung und -steuerung (Produktionsprozess, Bedarfsplanung, Bedarfsermittlung, Dispositionsarten, Erzeugnisgliederung, Stücklisten, Arbeitsplatzstammdaten, Arbeitsplan, Terminierung, Strategien zur Durchlaufzeitreduzierung, Vorkalkulation, Planauftrag, Fertigungsauftrag, Betriebsdatenerfassung, Rückmeldungen, Nachkalkulation, Auswertungen und Analysen).

> **Erläuterung:** Der Bereich **Materialwirtschaft** modelliert die **Beschaffungskette**
> („procure-to-pay"): **Materialstammdaten** und **Lieferantenstammdaten** sind die Basis; die
> **Bedarfsermittlung** entscheidet, *was* und *wie viele* beschafft werden muss (aus Kundenaufträgen,
> Prognosen oder Mindestbeständen — entsprechend den **Dispositionsarten**); die **Bestellung**
> löst den Vorgang beim Lieferanten aus; der **Wareneingang** verbucht Menge und Lagerort (und
> erzeugt gleichzeitig die Verbindlichkeit); die **Rechnungsprüfung** gleicht Rechnung gegen
> Bestellung und Wareneingang ab („3-Way-Match" — erst wenn alle drei übereinstimmen, wird
> gezahlt); der **Zahlungsausgang** schließt die Kette und bucht die Verbindlichkeit aus.
> Berufsbezug: Diese Kette mit Belegen und Prüfschritten wiederholt sich in jedem
> beschaffenden Unternehmen — das Verständnis der Kontrolllogik (nichts wird gezahlt, das nicht
> dreifach belegt ist) ist Kern des Wirtschaftsingenieurberufs.
>
> **Erläuterung:** Der Bereich **Produktionsplanung und -steuerung (PPS)** ist die Steuerung der
> Fertigung im System: Die **Bedarfsplanung/Bedarfsermittlung** leitet aus Primärbedarf
> (Kundenaufträge, Prognosen) über die **Erzeugnisgliederung** und **Stücklisten** (Strukturbäume:
> aus welchen Komponenten und Mengen besteht das Erzeugnis?) den Sekundärbedarf ab (Bedarfsauflösung);
> **Arbeitsplatzstammdaten** (Maschinen, Kapazität, Kostensätze) und **Arbeitspläne** (Reihenfolge
> der Arbeitsvorgänge mit Zeiten) beschreiben das *Wie* der Fertigung; die **Terminierung**
> plant Anfangs-/Endtermine (und **Strategien zur Durchlaufzeitreduzierung** — Parallelschritte,
> Überlappung, Losgrößen — greifen genau dort an); die **Vorkalkulation** kalkuliert die
> geplanten Kosten (Material + Arbeit + Gemeinkosten über Stundensätze), der **Planauftrag**
> und der **Fertigungsauftrag** wandeln den Plan in den konkreten Fertigungsvorgang, die
> **Betriebsdatenerfassung** (BDE) und **Rückmeldungen** liefern Ist-Zeiten und Ist-Mengen
> zurück, und die **Nachkalkulation** vergleicht Ist gegen Plan (wo entsteht Verlust?).
> **Auswertungen und Analysen** schließen den Regelkreis — dieses Zusammenspiel aus Plan,
> Ausführung, Rückmeldung und Abgleich ist der Inbegriff des „regelkreisorientierten"
> Wirtschaftsingenieur-Denkens und wird in Jg V (Auftragssimulation, Kostenrechnung)
> zusammengeführt.

---

## V. Jahrgang – Kompetenzmodul 9

> **Überblick:** KM9 (9.+10. Semester, mit 4 Wochenstunden die höchste Stundung des Fachs) ist
> das **Abschlussmodul** und bündelt drei Bereiche: **Informationssysteme** —
> Entscheidungsunterstützung für das Management (Datawarehouse, Datamining, KI-Systeme),
> Betriebsdatenerfassung, Workflows und elektronischen Zahlungsverkehr, im 10. Semester
> Geschäftsprozessmodellierung mit Simulation; **Datenbanken** — die implementierte
> DB-Anwendung als Web-/GUI-Applikation (direkter Anschluss an KM6 und den SWP-Verbund); **ERP**
> — Vertrieb (9. Semester) und Kostenrechnung/Controlling samt Auftragssimulation (10. Semester).
> Das Maturajahr integriert also alle drei Domänen des Faches und ist natürlicher Anker für
> Diplomarbeit und Matura. Details: [`kompetenzmodule/km9.md`](kompetenzmodule/km9.md).

> **Domäne:** Informationssysteme (Datawarehouse, Datamining, KI, Geschäftsprozessmodellierung), **Datenbanken** (Datenbankanwendung implementieren; Web- und GUI-Applikationen) und ERP (Vertrieb, Kostenrechnung). Einheitenplanung in `unterricht/HWII-INFI/jg5-einheiten.md` als Stub.

### 9. Semester

**Bildungs- und Lehraufgabe (Bereich Informationssysteme):**
- Informationssysteme zur Entscheidungsunterstützung beschreiben und über ihre Einsatzbereiche Bescheid wissen;
  > **Erläuterung:** **Entscheidungsunterstützungssysteme** (das Feld Business Intelligence)
  > fassen Daten aus vielen operativen Quellen zu entscheidungsrelevanten Informationen zusammen —
  > sie antworten nicht auf „Verbuche diesen Vorgang", sondern auf „Wie entwickeln sich die
  > Umsätze nach Region?" und „Wo kündigt sich ein Lieferengpass an?". Die Systemfamilie reicht
  > vom **Datawarehouse** (themenzentrierte, historische, integrierte Datenbasis, getrennt von
  > den operativen Systemen) über OLAP-Analysen (Würfel-Denken: Dimensionen wie Zeit/Region/Produkt
  > frei kombinierbar) bis zu **Datamining** und **KI-Systemen** (Muster in Massendaten). Das
  > Lernziel verlangt zweierlei: Systeme *beschreiben* können (Aufbau, Wirkungsweise) und ihre
  > *Einsatzbereiche* kennen (Management-Reporting, Marketing, Betrugserkennung) — die
  > Wirtschaftsingenieur-Rollen Controlling und Business Analyst leben von genau diesem
  > Überblick.
- Betriebsdaten erfassen und auswerten;
  > **Erläuterung:** **Betriebsdatenerfassung (BDE)** sammelt die Daten der Wertschöpfung am Ort
  > ihres Entstehens: Welche Menge lief von welcher Maschine in welcher Zeit, wo gab es Störungen,
  > welcher Mitarbeiter hat gerüstet? Erfassung erfolgt über BDE-Terminals, Scanner oder direkt
  > Sensoren/Maschinen (die Brücke zur Automatisierungstechnik). Die **Auswertung** macht daraus
  > Kennzahlen (OEE = Anlagenverfügbarkeit × Leistung × Qualität, Stückzeiten, Störstatistiken),
  > die drei Adressaten haben: die PPS als Rückmeldegröße (Nachkalkulation in KM8), das
  > Controlling (Kostenanalyse in Semester 10) und die Entlohnung (Akkord/Prämie). Das ist der
  > Regelkreis „Plan → Ausführung → Ist-Daten → Analyse" in Reinform — das Datamaterial, aus dem
  > jedes Datawarehouse (voriges Lernziel) gespeist wird.
- Datenmodelle und Workflows für firmeninterne Abläufe, für Kunden- und Lieferantenbeziehungen erstellen;
  > **Erläuterung:** Ein **Workflow** ist ein formal definierter Ablauf: Wer (Rolle) macht was
  > (Schritt) in welcher Reihung und mit welchen Daten/Belegen — vom Urlaubsantrag über die
  > Rechnungsfreigabe bis zum Beschaffungsvorgang. „Datenmodelle und Workflows erstellen" heißt:
  > erst die beteiligten Daten strukturieren (welches Datum muss wo erfasst sein, damit der Schritt
  > möglich ist), dann den Ablauf als Sequenz von Schritten, Bedingungen und Verantwortlichkeiten
  > festlegen. **Firmenintern** (Ablaufschritte zwischen Abteilungen) und **für Kunden- und
  > Lieferantenbeziehungen** (extern: Auftragsbestätigung an den Kunden, Lieferavise an den
  > Lieferanten) unterscheiden sich in der Kommunikationsrichtung, nicht im Prinzip. Das ist die
  > konzeptionelle Vorstufe zur Geschäftsprozessmodellierung (BPMN, Semester 10) und zugleich
  > die abstrakte Beschreibung genau jener ERP-Prozessketten, die in Jg IV durchlaufen wurden.
- elektronische Zahlungssysteme anwenden und über rechtliche und sicherheitstechnische Aspekte Bescheid wissen.
  > **Erläuterung:** **Elektronische Zahlungssysteme** sind alle Verfahren, mit denen Geld
  > digital bewegt wird: Kartenzahlung (Kredit-/Debitkarte mit EMV-Chip), SEPA-Überweisung und
  > -Lastschrift, Online-Wallets (PayPal, Apple/Google Pay) bis zu Kryptowährungen (konzeptuell).
  > „Anwenden" meint sowohl die Nutzung als Konsument als auch die Anbindung aus Sicht eines
  > Anbieters (Webshop integriert Zahlungsdienstleister). **Rechtliche Aspekte**: das
  > Zahlungsdiensteaufsichtsgesetz bzw. die EU-Zahlungsdienste-Richtlinie PSD2 (Starke
  > Kundenauthentifizierung, Haftung), Fernabsatz-/E-Commerce-Regeln (Widerrufsrecht) und
  > Datenschutz. **Sicherheitstechnische Aspekte**: Transportverschlüsselung (TLS), Tokenisierung
  > statt Klartextdaten, 3-D Secure als Zusatzauthentifizierung und Betrugsmuster (Phishing,
  > Kartenskimming). Berufsbezug: Wer einen Webshop oder eine App betreibt, muss die
  > Zahlungsanbindung rechtssicher und sicherheitsbewusst gestalten — hier fallen IT und
  > Betriebswirtschaft unmittelbar zusammen.

**Bildungs- und Lehraufgabe (Bereich Datenbanken):**
- eine Datenbankanwendung implementieren.
  > **Erläuterung:** Das ist die Krönung des DB-Spiralcurriculums: KM3 modellierte, KM4 fragte
  > ab, KM5 optimierte, KM6 entwarf die Anwendung — jetzt wird sie **implementiert**, also als
  > lauffähige, von Nutzer:innen bedienbare Anwendung fertiggestellt: Datenmodell im System,
  > Programmlogik (CRUD, Validierung, Rechte), Benutzeroberfläche (Web oder GUI), Fehler-
  > und Grenzfallbehandlung, Testdaten. Der offizielle Lehrstoff ergänzt: „Web- und
  > GUI-Applikationen" — im Anschluss an den Unterrichtsstack also die Weiterführung des
  > KM6-Verbunds (Prisma/REST) als vollständige Web-Anwendung bzw. als Desktop-GUI. Das ist
  > zugleich die natürlichste Diplomarbeits- und Matura-Anknüpfung des Fachs.

**Bildungs- und Lehraufgabe (Bereich ERP):**
- Stammdaten in einem ERP-System anlegen und die entsprechenden Beschaffungs-, Produktions- und Vertriebsprozesse abbilden.
  > **Erläuterung:** Das Lernziel wiederholt KM8 wörtlich — im 9. Semester aber mit dem
  > **Fokus auf den Vertrieb**: Die Stammdatenpflege erweitert sich um **Kundenstämme** und
  > **Konditionen** (Preise, Rabatte, Zahlungskonditionen), und die abzubildende Prozesskette
  > wird die **Auftragsabwicklung** vom Kundenauftrag über die Verfügbarkeitsprüfung,
  > Kommissionierung und Auslieferung bis zur Faktura und zum Zahlungseingang („order-to-cash").
  > Damit läuft die Kohorte die komplette Wertschöpfungskette im System: Beschaffung (KM8) +
  > Produktion (KM8) + Vertrieb (hier) — die Voraussetzung für die Auftragssimulation und
  > Kostenrechnung im 10. Semester, die alle drei Ketten kombinieren.

**Lehrstoff (Bereich Informationssysteme):**
Informationssysteme zur Entscheidungsunterstützung (Datawarehouse, Datamining, Künstliche-Intelligenz-Systeme, Einsatzbereiche); Betriebsdatenerfassung (Geräte, Funktion, Anwendungsgebiete); Datenmodelle und Workflows für firmeninterne und externe Abläufe; elektronischer Zahlungsverkehr (Zahlungsmethoden, Anforderungen, Produkte).

> **Erläuterung:** Der Bereich **Informationssysteme zur Entscheidungsunterstützung** behandelt
> die BI-Werkzeuge im Einzelnen: Das **Datawarehouse** ist die zentrale, historisierte und
> integrierte Analyse-Datenbank (Daten aus vielen Quellen, typischerweise im **Sternschema**
> organisiert: Faktentabellen um Dimensionstabellen), gespeist über Extraktion und Transformation (ETL);
> **Datamining** sucht automatisch Muster in Massendaten — Assoziationsregeln (Warenkorbanalyse:
> „Wer Bier kauft, kauft Chips"), Klassifikation (Kunde wird Zahlungsausfall riskieren?) und
> Clustering (Kundensegmente bilden); **Künstliche-Intelligenz-Systeme** reichen von
> regelbasierten Expertensystemen bis zum maschinellen Lernen (heute: LLM-basierte Assistenz);
> **Einsatzbereiche** sind Management-Reporting, Marketing, Risikomanagement und Betrugs-
> erkennung. Berufsbezug: Das Sternschema und die Frage „Welche Kennzahl über welche
> Dimensionen?" ist der Alltag des Data Engineer / BI-Entwicklers.
>
> **Erläuterung:** Der Bereich **Betriebsdatenerfassung** konkretisiert das gleichnamige Lernziel
> nach den drei Lehrplan-Fragen: **Geräte** (BDE-Terminals, Barcode-/RFID-Scanner, Sensoren,
> Maschinenanbindung), **Funktion** (Erfassung von Zeiten, Mengen, Störungen und Personen am Ort
> des Geschehens, direkt ins System statt nachträglich vom Zettel) und **Anwendungsgebiete**
> (Fertigungsrückmeldung für die PPS, Leistungs- und Störstatistik, Lohnermittlung,
> Qualitätssicherung). In KM8 tauchte die BDE als Rückmeldeelement der Fertigung auf — hier wird
> sie als eigenes Systemfeld mit eigener Gerätetechnik betrachtet.
>
> **Erläuterung:** Der Bereich **Datenmodelle und Workflows für firmeninterne und externe
> Abläufe** vertieft das Workflow-Lernziel des Semesters: Für jeden Ablauf (intern wie extern)
> sind die benötigten Daten (Formulare, Belege, Zustände) zu modellieren und der Ablauf als
> Schrittfolge mit Rollen, Bedingungen und Übergängen zu definieren. Das ist die konzeptionelle
> Vorstufe zu den **Modellierungswerkzeugen** des 10. Semesters (BPMN/EPC), dort kommen Notation
> und Simulation dazu — hier steht das Denken in Ablauf + Daten im Vordergrund.
>
> **Erläuterung:** Der Bereich **elektronischer Zahlungsverkehr** gliedert sich in
> **Zahlungsmethoden** (Karte, SEPA-Überweisung/-Lastschrift, Wallets, Kontaktlos, ggf.
> Krypto), **Anforderungen** (Sicherheit, Rechtssicherheit, Verfügbarkeit, Kosten,
> Interoperabilität — die Kriterien, nach denen ein Handelnder das Verfahren wählt) und
> **Produkte** (konkrete Dienstleistungen und Dienstleister: Acquirer, Zahlungsdienstleister
> wie Stripe/PayPal, Bank-App-TAN-Verfahren). Der systematische Blick (Methode → Anforderung →
> Produkt) ist typisch Wirtschaftsingenieur: nicht ein Verfahren kennenlernen, sondern die
> Bewertungsdimensionen beherrschen, mit denen man jedes neue Verfahren (und jede Novelle der
> PSD2) einordnen kann.

**Lehrstoff (Bereich Datenbanken):**
Praktische Datenbankanwendungen, Web- und GUI-Applikationen.

> **Erläuterung:** Der Bereich umfasst die beiden Umsetzungsformen der implementierten
> DB-Anwendung: **Praktische Datenbankanwendungen** (das Projekt als Ganzes — Anforderung,
> Schema, Programmlogik, Tests; im Anschluss an KM6 mit Prisma/REST und Repository-Pattern) und
> **Web- und GUI-Applikationen** (die beiden clientseitigen Erscheinungsformen: die Web-App mit
> Browser-Frontend über HTTP/JSON — ausbaubar aus dem KM6-REST-Server — und die Desktop-Applikation
> mit grafischer Oberfläche, Fenstern und Event-Handling). Beide knüpfen an die Schulumsetzung
> an (Deno/TypeScript; die 3HWII-Verbund-App als Weiterführungs-Kandidatin, siehe
> [`kompetenzmodule/km9.md`](kompetenzmodule/km9.md)) und sind die realistische Basis für die
> Diplomarbeit: kaum ein DA-Projekt kommt ohne Datenbank und Benutzeroberfläche aus.

**Lehrstoff (Bereich ERP):**
Vertrieb (Vertriebsprozess, Kundenstammdaten, Preise und Konditionen, Kundenanfrage, Angebotsbearbeitung, Kundenauftrag, Kommissionierung und Auslieferung, Faktura, Zahlungseingang).

> **Erläuterung:** Der Bereich **Vertrieb** bildet die Kundenseite der Wertschöpfungskette ab
> („order-to-cash"): **Kundenstammdaten** (Ansprechpartner, Zahlungsverhalten, Rabatt- und
> Zahlungskonditionen) sind die Basis; **Preise und Konditionen** werden im System als
> Konditionssätze geführt (Listenpreise, Kundenrabatte, Skonto, Lieferkonditionen — das System
> findet automatisch den passenden Preis). Der **Vertriebsprozess** selbst läuft als
> Belegkette: **Kundenanfrage** → **Angebotsbearbeitung** (Kalkulation + Angebotsvalidität) →
> **Kundenauftrag** (mit Verfügbarkeitsprüfung gegen Lager/Produktion) → **Kommissionierung und
> Auslieferung** (Warenentnahme, Lieferschein, Buchung des Lagerabgangs) → **Faktura**
> (Rechnungserstellung, Erlösbuchung) → **Zahlungseingang** (Debitorenkonto ausgleichen, ggf.
> Mahnwesen). Das ist exakt das Gegenstück zur Beschaffungskette aus KM8 — zusammen ergeben
> beide den vollständigen Waren- und Geldfluss eines produzierenden Unternehmens.

### 10. Semester

**Bildungs- und Lehraufgabe (Bereich Informationssysteme):**
- aus einer Prozessbeschreibung Geschäftsprozessmodelle erstellen und simulieren.
  > **Erläuterung:** Ein **Geschäftsprozess** ist eine Kette von Aktivitäten, die ein
  > Unternehmensziel erreicht (Angebot erstellen, Auftrag abwickeln, Reklamation behandeln) —
  > die **Prozessbeschreibung** ist ihr narrativer Text. Das **Modell** (übliche Notationen:
  > BPMN mit Ereignissen, Aufgaben, Gateways und Verantwortlichkeits-Pools; alternativ EPC)
  > macht daraus eine prüfbare, standardisierte Grafik: Wer macht was, in welcher Reihenfolge,
  > wo verzweigt der Ablauf? Die **Simulation** treibt das Modell mit Zahlen (Ankünfte,
  > Bearbeitungszeiten, Ressourcen): Wie lange dauert der Prozess im Mittel? Wo staut es sich,
  > wenn der Auftragseingang verdoppelt wird? Damit lassen sich Engpässe und Änderungen am
  > Modell prüfen, bevor die Organisation geändert wird — das ist die Kernaufgabe von
  > Prozessmanagement- und Business-Analyst-Rollen und schließt konzeptionell an die Workflows
  > des 9. Semesters und die ERP-Prozessketten von Jg IV an.

**Bildungs- und Lehraufgabe (Bereich Datenbanken):**
- eine Datenbankanwendung implementieren.
  > **Erläuterung:** Das Lernziel des 9. Semesters gilt unverändert auch im letzten Semester:
  > Die **Implementierung** der DB-Anwendung wird hier nicht neu eingeführt, sondern
  > fortgeführt und vollendet — typischerweise im Rahmen von Diplomarbeit/Matura-Projekt oder
  > als abgerundete Web-/GUI-Applikation mit sauberer Schnittstelle (REST), Persistenz (Prisma
  > bzw. SQL) und durchdachter Benutzeroberfläche. Prüfungsrelevant ist die ganze Kette:
  > vom Datenmodell über die Abfragen bis zur fertigen, demonstrierbaren Anwendung — die
  > Zusammenfassung des DB-Tracks KM3–KM9 in einer präsentierbaren Leistung.

**Bildungs- und Lehraufgabe (Bereich ERP):**
- auf Basis einer im ERP-System durchgeführten Auftragssimulation Maßnahmen zur Reduzierung der ermittelten Durchlaufzeit bzw. der kalkulierten Produktkosten treffen.
  > **Erläuterung:** Die **Auftragssimulation** ist die Gesamtschau des ERP-Tracks: Ein
  > Kundenauftrag wird im System komplett durchlaufen (Vertrieb → Verfügbarkeitsprüfung →
  > Beschaffung/Produktion mit Terminierung und Kalkulation), und das System ermittelt
  > **Durchlaufzeit** (vom Auftragseingang bis zur Auslieferung) und **Produktkosten** (aus
  > Vorkalkulation: Material, Arbeitsplätze mit Stundensätzen, Gemeinkosten). Darauf aufbauend
  > werden **Maßnahmen** getroffen und in ihrer Wirkung bewertet: Durchlaufzeit senken durch
  > Losgrößen-, Reihenfolge- oder Überlappungsoptimierung, andere Dispositionsart, Prozess-
  > parallelisierung (die Strategien aus KM8!); Kosten senken durch Materialalternative,
  > günstigeren Arbeitsplatz/Lieferant oder Mengeneffekte. Das ist reales
  > Industrial-Engineering- und Optimizer-Denken — Hypothese aufstellen, im System durchspielen,
  > Vorher-Nachher-Kalkulation vergleichen und begründen. Es verlangt gleichzeitig Buchhaltung,
  > Materialwirtschaft, PPS und Vertriebswissen und ist damit das integrativste Lernziel des
  > gesamten Lehrplans.

**Lehrstoff (Bereich Informationssysteme):**
Modellierungswerkzeuge zur Beschreibung und Modellbildung von Geschäftsprozessen (Aufbau, Simulation und Analyse eines Modells).

> **Erläuterung:** Der Bereich **Modellierungswerkzeuge** behandelt die Werkzeugklasse für
> Geschäftsprozessmanagement: Editoren und Suites (z. B. BPMN-Modelleure bis hin zu
> Process-Mining- und Simulationswerkzeugen), im Zentrum laut Lehrplan-Klammer der
> Lebenszyklus eines Modells — **Aufbau** (Prozess aus einer Beschreibung korrekt in Notation
> übersetzen: Ereignisse, Aufgaben, Gateways, Schwimmbahnen/Verantwortlichkeiten), **Simulation**
> (das Modell mit Ankunfts- und Bearbeitungszeiten, Ressourcen und Mengen „fahren" lassen und
> Kennzahlen wie Durchlaufzeit, Auslastung, Stau erheben) und **Analyse** (Schwachstellen
> interpretieren: Engpässe, unnötige Wartezeiten, Medienbrüche — und Verbesserungen am Modell
> erproben). Das ist die methodische Vertiefung des Lernziels und der fallpraktische
> Werkzeugkasten des Prozessmanagement-Berufs.

**Lehrstoff (Bereich ERP):**
Kostenrechnung und Controlling (Kostenarten, Kostenstellen, innerbetriebliche Leistungsverrechnung, Personal- und Maschinenstundensätze, Produktkostenkalkulation, Auswertungen und Analysen).

> **Erläuterung:** Der Bereich **Kostenrechnung und Controlling** ist das betriebswirtschaftliche
> Schlussstück: Die **Kostenartenrechnung** gliedert, *was* an Kosten anfällt (Löhne, Material,
> Abschreibung, Energie); die **Kostenstellenrechnung** ordnet zu, *wo* sie entstehen (Fertigung,
> Verwaltung, Vertrieb — Kostenstellen sind die „Verbrauchsorte" im System); die
> **innerbetriebliche Leistungsverrechnung** verteilt Vorleistungen zwischen Kostenstellen
> (die Reparaturwerkstatt verrechnet ihre Stunden an die Fertigung), bis aus Gemeinkosten
> **Personal- und Maschinenstundensätze** je Arbeitsplatz entstehen (Kosten pro Stunde Mensch
> bzw. Maschine — genau die Sätze, mit denen in KM8 und in der Auftragssimulation kalkuliert
> wird). Die **Produktkostenkalkulation** setzt alles zusammen (Materialeinzelkosten +
> Fertigungszeiten × Stundensätze + Gemeinkostenzuschläge → Preisuntergrenze und Preisfindung);
> **Auswertungen und Analysen** vergleichen Plan-/Ist- und Soll/Ist-Kosten und beantworten die
> Controlling-Frage „Wo verdient oder verliert das Unternehmen Geld?". Damit schließt sich der
> Kreis zur Finanzbuchhaltung aus KM7: FiBu dokumentiert gegen Außen, Kostenrechnung steuert
> nach innen.

---

## Didaktische Hinweise (aus Anlage 1, zusammengefasst)

- Siehe BGBl. II Nr. 262/2015 **Anlage 1** (Allgemeiner Teil) „Didaktische Grundsätze" für die allgemeine Methodik (Handlungsorientierung, Projektbezug, fächerübergreifender Unterricht, Digitalisierung).
- Fachspezifisch (Betriebsinformatik): starker Praxisbezug, Einsatz realer Werkzeuge (SQLite, IDEs, ER-Tools, Prisma), projektartige Aufgaben, Spiralcurriculum (Konzepte in höheren Jahrgängen vertiefen).
- Aufbau des Datenbank-Tracks (Jg II → III) als **Spiralcurriculum**: ER/Relationen → SQL-Grundlagen → komplexe Abfragen → DB-Applikation/Einbettung in programme.

---

## Anleitung: So wird ein Jahrgangs-Plan generiert

**Struktur (seit 2026-09-07, Skill-Standard-Layout):** Pro Jahrgang, den Georg
unterrichtet, gibt es einen **Klassenordner** `lehrplan/<KLASSE>/` (z. B. [`3HWII/`](3HWII/))
mit [`<KLASSE>.lehrplan.md`](3HWII/3HWII.lehrplan.md) (klassenrelevanter ①-Extrakt) — der
aktuelle Ordner zusätzlich mit `README.md` (Klassen-Drehscheibe) und
`unterricht/HWII-INFI/jgN-semesterplan-{ws,ss}.md` (**13 echte UE + 2 PLF-DS** pro Semester, Tabellenformat).
Didaktische **KM-Steckbriefe** liegen in [`kompetenzmodule/`](kompetenzmodule/). Die
`jgN-einheiten.md` stehen unter `unterricht/HWII-INFI/` als Gerüste für nicht konkret
geplante Jahrgänge (derzeit Jg IV/V) bzw. als historische Ist-Doku (Jg II).

Um z. B. `unterricht/HWII-INFI/jg4-einheiten.md` oder `unterricht/HWII-INFI/jg5-einheiten.md` zu befüllen, genügt diese Datei plus `METADATA.md`:

1. **Offiziellen Lehrstoff übernehmen:** Kopiere den Lehrstoff des jeweiligen Semesters (KM) aus dieser Datei in den Kopf des Jahrgangs-Dokuments als „Soll".
2. **Steckbrief + Semesterplan anlegen:** KM-Steckbrief in `kompetenzmodule/` (Struktur wie `kompetenzmodule/km5.md`), Semesterplan unter `unterricht/HWII-INFI/` (Format wie `jg3-semesterplan-ws.md`, 13 UE + 2 PLF).
3. **Vorwissen verankern:** Verweise auf den jeweils vorherigen Jahrgang (z. B. baut Jg III beim DB-Track auf `unterricht/HWII-INFI/jg2-einheiten.md` auf).
4. **Bewertungsrahmen:** Halte dich an die Abgabe-/Beurteilungsregeln aus dem Wurzel-`README.md` des Repos (PLF/HÜ/Mitarbeit je 1/3); konkrete PLF-Termine sind schulspezifisch.
5. **Bei Domänenwechsel (Jg IV ERP, Jg V IS):** explizit kennzeichnen, dass andere Expertise/Werkzeuge (SAP-System, ERP-Software) nötig sind; ggf. nur Gerüst belassen.
6. **Sprache & Stil:** deutsche Kommentare, SQL in GROSSBUCHSTABEN, 2/4 Leerzeichen Einrückung (siehe `AGENTS.md`).
7. **Nach Erstellung nicht vergessen:** Links in `METADATA.md` (Tabelle „Dateien in diesem Verzeichnis") und `kompetenzmodule/README.md` (Steckbrief-Status) aktualisieren.

### Konventionen für eine Einheit

```
### Einheit N – <Thema>
- KM / Lehrplan-Bezug: <genauer Lehrstoffpunkt aus LEHRPLAN.md>
- Vorwissen: <welche frühere Einheit/Jahrgang>
- Inhalt: <geplanter Unterrichtsstoff, Stichpunkte>
- Hausübung: <Aufgabe oder „keine">
```

---

## Status der Einheitenplanung

| Jahrgang | Status | Datei |
|----------|--------|-------|
| I. | *(nicht geplant – Jg I ist rawData/Office, kein DB)* | — |
| II. (KM3+KM4) | **Rückgepflegt aus Unterricht SJ 2025/26** (erledigt, Referenz) | [`2HWII/2HWII.lehrplan.md`](2HWII/2HWII.lehrplan.md) + `unterricht/HWII-INFI/jg2-einheiten.md` + [`kompetenzmodule/km3.md`](kompetenzmodule/km3.md), [`km4.md`](kompetenzmodule/km4.md) |
| III. (KM5+KM6) | **Aktiv unterrichtet (SJ 2026/27)**; seit 2026-07-26 Steckbriefe + Klassenordner | [`3HWII/3HWII.lehrplan.md`](3HWII/3HWII.lehrplan.md) + [`kompetenzmodule/km5.md`](kompetenzmodule/km5.md), [`km6.md`](kompetenzmodule/km6.md), [`3HWII/`](3HWII/) |
| IV. (KM7+KM8) | Stub (ERP) | [`4HWII/4HWII.lehrplan.md`](4HWII/4HWII.lehrplan.md) + `unterricht/HWII-INFI/jg4-einheiten.md` + [`kompetenzmodule/km7.md`](kompetenzmodule/km7.md), [`km8.md`](kompetenzmodule/km8.md) |
| V. (KM9) | Stub (IS + DB + ERP) | [`5HWII/5HWII.lehrplan.md`](5HWII/5HWII.lehrplan.md) + `unterricht/HWII-INFI/jg5-einheiten.md` + [`kompetenzmodule/km9.md`](kompetenzmodule/km9.md) |

> **Layout-Migration 2026-09-07:** Der Lehrplan-Bereich liegt im Skill-Standard-Layout —
> zuvor: `docs/lehrplan/LEHRPLAN.md` + Klassenordner im Root. Die Klassen-Extrakte
> `<KLASSE>/<KLASSE>.lehrplan.md` wurden am 2026-09-07 aus diesem ①-Text erzeugt.

> **Redaktion 2026-07-26:** Diese Datei wurde gegen die konsolidierte Fassung (NOR40217058)
> verifiziert und an mehreren Stellen an den offiziellen Text (①) angeglichen — u. a.
> Normalformen zurück nach KM3, DCL nach KM4, Jg V um den Bereich Datenbanken ergänzt.
> Die Abweichungen der Vorversion sind in [`RIS.md`](RIS.md) §6 dokumentiert. Die
> Abdeckungstabelle in `unterricht/HWII-INFI/jg2-einheiten.md` (historische Ist-Doku) bezieht sich noch auf die
> Vorversion dieser Redaktion — inhaltlich bleibt die dortige Ist-Abdeckung unberührt.