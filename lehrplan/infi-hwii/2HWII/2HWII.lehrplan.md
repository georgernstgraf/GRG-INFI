# 2HWII — Lehrplan-Extrakt (II. Jahrgang, KM3 + KM4)

> **Klassen-Zuordnung:** `2HWII` (generisches Label, deckt 2AHWII/2BHWII …) ↔ **II. Jahrgang** ↔ **Kompetenzmodul 3 (3. Semester)** und **Kompetenzmodul 4 (4. Semester)**.
> **Rechtsgrundlage:** Anlage 1.24 zu BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019 — Höhere Lehranstalt für Wirtschaftsingenieure – Betriebsinformatik, Fach „Informatik und Informationssysteme".
> **Quelle (①):** konsolidierte Fassung [NOR40217058](https://www.ris.bka.gv.at/Dokumente/Bundesnormen/NOR40217058/NOR40217058.html) — getreu extrahiert aus [`../LEHRPLAN.md`](../LEHRPLAN.md) (verifiziert 2026-07-26).
> **Extraktion:** 2026-09-07 · Rechtsstand ①: unverändert seit 2015 ([`../RIS.md`](../RIS.md)).

> **Unterrichtsstand:** II. Jahrgang wurde im **SJ 2025/26 unterrichtet** (Klasse 2AHWII, Georg allein, 2 h/Woche). Die konkrete Ist-Doku liegt in [`jg2-einheiten.md`](../../../unterricht/HWII-INFI/jg2-einheiten.md), die didaktischen Steckbriefe in [`../kompetenzmodule/km3.md`](../kompetenzmodule/km3.md) und [`../kompetenzmodule/km4.md`](../kompetenzmodule/km4.md).

---

## 3. Semester — Kompetenzmodul 3 (Bereich Datenbanken)

> **Überblick:** KM3 öffnet den Datenbank-Track des Fachs und durchläuft die drei
> klassischen Entwurfsphasen am durchgehenden Beispiel: **konzeptionell**
> (Aufgabenstellung → ER-Modell), **logisch** (ER-Modell → Relationenschema mit
> Schlüsseln und Normalformen) und **physisch** (DDL: Tabellen und Beziehungen in
> einem Datenbanksystem erstellen, hier SQLite). Leitidee ist die Übersetzung —
> dieselbe realweltliche Aufgabenstellung wird dreimal neu notiert: als Diagramm,
> als Schema, als SQL-Code. Die Kohorte 2025/26 mischte KM3- und KM4-Anteile
> (CRUD/Abfragen ab Herbst, Modellierung/DDL verstärkt im Frühjahr) und streifte
> die Normalformen nur — ihr systematischer Nachhol erfolgt in KM5. Details:
> [`../kompetenzmodule/km3.md`](../kompetenzmodule/km3.md).

**Bildungs- und Lehraufgabe:**
- Aufgabenstellungen modellieren und in einem Entity-Relationship (ER)-Modell abbilden;

  > **Erläuterung:** Das Entity-Relationship-Modell ist die notationelle Brücke
  > zwischen einer umgangssprachlichen Aufgabenstellung („Kunden bestellen
  > Artikel") und der technischen Datenbank: **Entities** sind die Dinge der
  > betrachteten Miniwelt (Kunde, Song, Playlist), **Attribute** ihre Eigenschaften
  > (Name, Preis, Dauer), **Beziehungen** verknüpfen Entities (Kunde „legt in"
  > Playlist), und die **Kardinalität** (1:1, 1:N, M:N) legt fest, wie viele
  > Instanzen auf jeder Seite beteiligt sein dürfen. Kern der Kompetenz ist
  > Abstraktion: aus einem Beschreibungstext die datentragenden Begriffe
  > herauszuarbeiten und alles Übrige wegzulassen. Im Unterricht wurde in der
  > Crows-Foot-Notation des Tools **bigER** modelliert, durchgängig am Beispiel
  > eines Musik-Streaming-Dienstes. Im Beruf beginnt jedes Datenbankprojekt mit
  > genau diesem Diagramm — es ist das Dokument, an dem Fachabteilung und
  > Entwicklung gemeinsam die Datenlage klären, bevor irgendetwas gebaut wird; im
  > Alltag steckt es als Schema hinter jedem Online-Shop.
- ein ER-Modell in Relationen auflösen;

  > **Erläuterung:** Gemeint ist die regelgeleitete Überführung des Diagramms ins
  > **Relationenmodell**: jedes Entity wird zu einer Tabelle, Attribute zu Spalten,
  > Beziehungen werden über **Fremdschlüssel** abgebildet — bei 1:N wandert der
  > Fremdschlüssel auf die N-Seite, bei M:N entsteht eine eigene
  > **Zwischentabelle** (Assoziativrelation), typischerweise mit zusammengesetztem
  > Primärschlüssel aus beiden Fremdschlüsseln. Diese Regeln sind algorithmisch:
  > aus der Kardinalität folgt zwangsläufig die Auflösung — darum lässt sich die
  > Übersetzung in beide Richtungen üben (ER ↔ SQL war der Kern der
  > Musik-Streaming-Einheit). Hier fällt die Struktur-Entscheidung, welche Tabellen
  > am Ende existieren. Die Kohorte 2025/26 hat dabei die **Normalformen** als
  > Qualitätsprüfung der Auflösung nur gestreift (Nachhol in KM5). Im Beruf ist
  > diese Abbildung Alltag, etwa wenn ein Analyse-Diagramm in ein konkretes
  > Produktivschema überführt wird.
- Tabellen und Beziehungen in einem Datenbanksystem (DBS) erstellen.

  > **Erläuterung:** Das ist die physische Umsetzung des Relationenschemas mit der
  > **Data Definition Language**: `CREATE TABLE` samt Primärschlüssel,
  > Fremdschlüsseln und Constraints (`NOT NULL`, `UNIQUE`, `CHECK`) — im
  > Unterricht in SQLite, sowohl im `sqlite3`-CLI als auch aus **Deno** heraus
  > über `node:sqlite`. „Beziehungen erstellen" heißt genauer: **referentielle
  > Integrität** erzwingen — das DBS verwirft dann Bestellungen ohne gültige
  > Kundennummer (in SQLite erst nach `PRAGMA foreign_keys=ON`), inklusive
  > definiertem Verhalten bei Löschung und Änderung (`ON DELETE`/`ON UPDATE`,
  > z. B. `CASCADE`). Abzugrenzen ist DDL von der DML: DDL baut die Struktur,
  > DML füllt sie. Im Beruf sind DDL-Skripte versionierte Artefakte jedes
  > Deployments — auch die Prisma-Migrationen der Kohorte erzeugen im Kern nichts
  > anderes als DDL.

**Lehrstoff:**
Datenmodellierung (konzeptioneller Datenbankentwurf, Notation, Entities, Attribute, Beziehungen, Kardinalitäten, Generalisierung, Aggregation); Datenbankentwurf (logischer Datenbankentwurf, Normalformen, Relationenschema, Schlüssel, Schlüsselkandidat, Primärschlüssel, Fremdschlüssel, Indizes, referentielle Integrität); Data Definition Language (physischer Datenbankentwurf, Abfragegeneratoren, SQL).

> **Erläuterung:** **Datenmodellierung** (konzeptioneller Datenbankentwurf)
> beschreibt die Miniwelt noch unabhängig von jedem konkreten Datenbanksystem —
> Entities, Attribute, Beziehungen und Kardinalitäten wie im ersten Lernziel
> beschrieben. **Generalisierung** hebt Gemeinsamkeiten in einen Obertyp (Person
> als Oberbegriff von Kunde und Mitarbeiter), **Aggregation** fasst ein ganzes
> Beziehungsgefüge zu einem neuen Entity zusammen, das selbst wieder Beziehungen
> eingehen kann („Bestellung" als eigenständiges Ding statt bloßer
> Kunde-Artikel-Verknüpfung). „Notation" meint die Darstellungskonvention — im
> Unterricht Crows-Foot (bigER), in Lehrbüchern auch die Raute-Notation nach
> Chen. Dieses Vokabular ist im Beruf die Verhandlungssprache zwischen
> Datenmodellierung und Fachseite, lange bevor der erste `CREATE TABLE`-Befehl
> existiert.

> **Erläuterung:** **Datenbankentwurf** (logischer Datenbankentwurf) überführt
> das ER-Modell in ein **Relationenschema** und entscheidet über dessen
> Qualität: Ein **Schlüsselkandidat** ist eine minimale Spaltenkombination, die
> jede Zeile eindeutig identifiziert (Kundennummer, E-Mail); einer davon wird zum
> **Primärschlüssel** gewählt, **Fremdschlüssel** referenzieren ihn in anderen
> Tabellen, **Indizes** (z. B. `UNIQUE INDEX`) sind Suchstrukturen, die Lookups
> beschleunigen und Eindeutigkeit erzwingen. Die **Normalformen** (1NF: atomare
> Attributwerte, 2NF: keine Teilabhängigkeit vom Schlüssel, 3NF: keine
> transitiven Abhängigkeiten) prüfen das Schema auf Redundanz und auf
> Anfälligkeit für Änderungs-, Einfüge- und Löschanomalien — in der Kohorte
> 2025/26 nur gestreift, systematischer Durchgang in KM5
> ([`../kompetenzmodule/km5.md`](../kompetenzmodule/km5.md)). **Referentielle
> Integrität** schließlich sichert zu, dass jeder Fremdschlüsselwert auf eine
> existierende Zeile zeigt — vom DBS als Constraint erzwungen, nicht nur als
> Konvention zwischen Entwicklern.

> **Erläuterung:** **Data Definition Language** ist der Strukturteil von SQL
> (`CREATE`/`ALTER`/`DROP`, Constraints, Indizes) und markiert den **physischen
> Datenbankentwurf** — die konkrete Umsetzung des Schemas in einem DBS (hier
> SQLite). „**Abfragegeneratoren**" sind Werkzeuge, die Struktur nicht von Hand
> notieren lassen, sondern aus grafischen Modellen oder höheren Beschreibungen
> DDL erzeugen; deren modernste Ausprägung sind ORM-Migrations — die Kohorte hat
> mit **Prisma** (`schema.prisma`, `prisma migrate dev`) genau so einen Generator
> benutzt und damit KM6-Terrain vorweggenommen (Übererfüllung, siehe
> [`../kompetenzmodule/km3.md`](../kompetenzmodule/km3.md)). **SQL** ist der
> Industriestandard der deklarativen Datenbanksprachen: man beschreibt, *was*
> man will, und das DBS entscheidet, *wie* es gesucht wird.

## 4. Semester — Kompetenzmodul 4 (Bereich Datenbanken)

> **Überblick:** KM4 dreht den Datenbank-Blick von der Struktur auf die Nutzung:
> die volle Abfragemechanik (**Projektion, Selektion, Gruppierung,
> Aggregatfunktionen, Verbund/JOIN**) plus **DML** (Datenbestand ändern) und
> **DCL** (Rechte verwalten) — gekrönt von der „einfachen Datenbankanwendung",
> die Struktur und Abfragen zu einem lauffähigen Programm verbindet. Die Kohorte
> 2025/26 hat die Anwendung über den **Prisma/ORM-Pfad** statt klassischer
> Formulare und Berichte erfüllt; deren Konzepte werden in KM5 (Views als
> Sichten) und KM6 (Reportgenerierung) nachgeformt, die DCL erst in KM5 mit der
> dortigen „Benutzerverwaltung" zusammengeführt. Details:
> [`../kompetenzmodule/km4.md`](../kompetenzmodule/km4.md).

**Bildungs- und Lehraufgabe:**
- Abfragen in SQL erstellen und durchführen;

  > **Erläuterung:** Kern ist das `SELECT`-Statement, dessen Bausteine den
  > Operationen der relationalen Algebra entsprechen: **Projektion** wählt
  > Spalten (`SELECT name, preis`), **Selektion** wählt Zeilen (`WHERE` samt
  > `LIKE`, `DISTINCT`, `ORDER BY` und booleschen Operatoren), der **Verbund**
  > (JOIN) hängt Tabellen über Schlüssel zusammen — bis zum Self-JOIN, bei dem
  > eine Tabelle mit sich selbst verbunden wird (geübt u. a. an SQL-Leetcodes
  > wie LC182/LC196, siehe `Leetcodes/`). **Gruppierung** (`GROUP BY`) mit
  > **Aggregatfunktionen** (`COUNT`, `SUM`, `AVG` …) verdichtet Zeilen zu
  > Auswertungen, `HAVING` filtert *nach* der Gruppierung — die logische
  > Ausführungsreihenfolge (FROM → WHERE → GROUP BY → HAVING → SELECT →
  > ORDER BY) erklärt, warum ein Spalten-Alias im `WHERE` noch nicht existiert.
  > Die **DML** (`INSERT`, `UPDATE`, `DELETE`) ändert den Datenbestand und
  > gehört laut Lehrstoff in denselben Bereich. SQL-Sicherheit ist im Beruf die
  > meistgefragte Einzelkompetenz der Datenwelt — vom Berichtswesen bis zur
  > Backend-Entwicklung — und im Alltag steckt hinter jeder Suche im Online-Shop
  > genau diese Mechanik.
- eine einfache Datenbankanwendung erstellen.

  > **Erläuterung:** Die „einfache Datenbankanwendung" ist die Zusammenschau:
  > ein Schema, Abfragen darauf und eine Benutzerschnittstelle, die beides
  > bedienbar macht — klassisch über **Formulare** (Eingabemasken) und
  > **Berichte** (formatierte Ausgaben), wie sie der Lehrstoff separat
  > aufführt. Die Kohorte 2025/26 hat dieses Lernziel über den ORM-Pfad
  > erfüllt: mit **Prisma** das Schema definieren, per `prisma migrate dev`
  > migrieren, im Deno-Client mit `findMany`/`include`/`where` abfragen und per
  > Seed-Skript befüllen — ein Zugang, der eigentlich KM6-Terrain vorwegnimmt
  > (Übererfüllung). „Einfach" ist bewusst der Maßstab: eine durchlaufende
  > CRUD-Anwendung genügt als Nachweis; die „Datenbankanwendung für einen
  > bestimmten Einsatzzweck" mit Benutzerführung und Reportgenerierung folgt
  > erst in KM6. Im Beruf entspricht das der typischen ersten
  > Internal-Tool-Situation: ein kleines Pflege-Frontend für eine
  > Fachdatentabelle.

**Lehrstoff:**
Abfragesprachen (Projektion, Selektion, Gruppierung, Aggregatfunktionen, Verbund, Data Manipulation Language, Data Control Language); Entwurf von Formularen und Berichten.

> **Erläuterung:** „**Abfragesprachen**" fasst die SQL-Operatoren für das Lesen
> und Ändern von Daten zusammen: Projektion, Selektion und Verbund (in der
> relationalen Algebra π, σ, ⋈) sowie Gruppierung und Aggregatfunktionen für
> Auswertungen — dazu die **Data Manipulation Language** (`INSERT`, `UPDATE`,
> `DELETE`) für den Datenbestand und die **Data Control Language**
> (`GRANT`/`REVOKE`, Rollen) für die Rechteverwaltung: wer darf lesen, wer
> schreiben, wer administrieren. DCL ist im Beruf der Schutzwall jeder
> Produktivdatenbank (getrennte Lese-, Schreib- und Admin-Konten); die Kohorte
> hat sie nicht explizit geübt — sie wird in KM5 mit dem dortigen
> Lehrplanpunkt „Benutzerverwaltung" zusammengeführt
> ([`../kompetenzmodule/km5.md`](../kompetenzmodule/km5.md)).

> **Erläuterung:** „**Entwurf von Formularen und Berichten**" meint die
> nutzerseitige Erschließung einer Datenbank: **Formulare** sind strukturierte
> Eingabemasken, die Benutzereingaben feldweise validiert in Tabellen
> schreiben; **Berichte** sind formatierte, druck- bzw. exportfertige Ausgaben
> (Listen, Rechnungen, Auswertungen) — klassisches Terrain access-artiger
> Werkzeuge. Damit wird eine Datenbank für Nutzer bedienbar, die nie ein
> SQL-Statement sehen: die Sachbearbeiterin pflegt den Kundenstamm über eine
> Maske, nicht über `UPDATE`. Die Kohorte 2025/26 hat diesen Bereich zugunsten
> des Prisma/ORM-Pfads ausgelassen; die Konzepte werden in KM5 (Views als
> Sichten) und KM6 (Reportgenerierung) wieder aufgegriffen — im Beruf mündet
> das in BI-Reporting und Fachanwendungen, wo Masken- und Berichtsentwicklung
> eigene Rollen sind.

---

> **Ist-Randnotiz (nicht Rechtsbestandteil):** Die Normalformen wurden 2025/26 nur gestreift — die Lücke wird in KM5 (III. Jahrgang, Klasse `3HWII`) geschlossen, siehe [`../kompetenzmodule/km5.md`](../kompetenzmodule/km5.md).
