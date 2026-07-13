# Metadaten zum Lehrplan – Wirtschaftsingenieure Betriebsinformatik

## Rechtliche Grundlage

| Feld | Wert |
|------|------|
| **Kundmachungsorgan** | BGBl. II Nr. 262/2015 |
| **Datum der Kundmachung** | 17. September 2015 |
| **Typ** | Verordnung |
| **Titel** | Lehrplanpaket der Höheren technischen und gewerblichen Lehranstalten 2015 |
| **Einbringende Stelle** | BMBF (Bundesministerium für Bildung und Frauen) |
| **Spezifischer Lehrplan** | Anlage 1.24 — Höhere Lehranstalt für Wirtschaftsingenieure – Betriebsinformatik |
| **Fach in diesem Repo** | Informatik und Informationssysteme (kurz „Informatik") |

> **Wichtige Abgrenzung:** Die Klasse **2AHWII** ist die Fachrichtung **Betriebsinformatik (Anlage 1.24)** – nicht Technisches Management (Anlage 1.28, das ist HWIT / PMM). Die beiden Anlagen haben ein *gleichnamiges* Fach „Informatik und Informationssysteme", aber **verschiedene Lehrstoffe und zeitliche Verortung**: In Anlage 1.28 (TM) kommt „Datenbanken" erst im 3. Jahrgang; in Anlage 1.24 (Betriebsinformatik) ab dem **2. Jahrgang**. Deshalb ist für die WII diese Anlage (1.24) maßgeblich.

## RIS-Verweise

- **ELI (Stammfassung):** `https://www.ris.bka.gv.at/eli/bgbl/II/2015/262/20150917`
- **Konsolidierte Fassung (Geltendes Recht):** Gesetzesnummer [20009288](https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20009288)
- **Anlage 1 (Allgemeiner Teil, für alle HTL-Fachrichtungen):** [COO_2026_100_2_1135479](https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2015_II_262/COO_2026_100_2_1135479.html)

> Die schulspezifische PDF der HTL Spengergasse redigiert die Anlagen-Nummer als „Anlage 1.xx". Die Nummerierung (1.24) ergibt sich aus der konsolidierten Fassung (vgl. Verzeichnis der Fachrichtungen, BGBl. II Nr. 262/2015 idgF).

## Quelle (Primärtext)

Der hier exzerpierte Primärtext stammt aus dem Schul-PDF der HTL Spengergasse:

- **Datei:** `LP_ab14_Betriebsinformatik.pdf` (174 KB), https://www.spengergasse.at/wp-content/uploads/2020/04/LP_ab14_Betriebsinformatik.pdf
- **Pendant (Abteilung Technisches Management, Anlage 1.28):** verwaltet im Repo `GRG-PMM/docs/lehrplan/` – *nicht* für WII maßgeblich.

Das fullständige Exzerpt des Fachs „Informatik und Informationssysteme" (alle Jahrgänge) liegt in [`LEHRPLAN.md`](LEHRPLAN.md).

## Stundentafel (HTL Spengergasse, schulautonom)

| Fach | I. | II. | III. | IV. | V. | Summe |
|------|----|-----|------|-----|-----|-------|
| **Informatik und Informationssysteme** | 2 | 2 | 3 | 2 | 4 | 13 |

Quelle: https://www.spengergasse.at/?page_id=2085 (schulautonome Stundentafel „Betriebsinformatik").

> Hinweis: Die Wochenstunden betragen für IuI in der RIS-Stundentafel *2(2)/2(2)/2(2)/2(2)/4(4)* (Werte in Klammern = Übungsanteile). Die Spengergasse führt die Übungsanteile integriert und weist in III. Jg. 3 statt 2 Stunden aus. Die inhaltliche Lehrstoffverteilung (Anlage 1.24) ist davon nicht berührt.

## Kompetenzmodule und Bereiche (Fach: Informatik und Informationssysteme)

| Jahrgang | Semester | KM | Bereich (laut Lehrplan) |
|----------|----------|----|-------------------------|
| I. | 1. + 2. | — | Angewandte Informatik (Hardware, Betriebssysteme, Office, Netz, Gesellschaft) |
| II. | 3. | KM3 | **Datenbanken** – ER-Modellierung, Relationenschema, Schlüssel/FK/Indizes, referentielle Integrität, einfache Abfragen |
| II. | 4. | KM4 | **Datenbanken** – SQL (Projektion, Selektion, Gruppierung, Aggregatfunktionen, Verbund, DML), Normalformen, Formulare/Berichte |
| III. | 5. | KM5 | **Datenbanken** – komplexe Abfragen (Unterabfragen, DDL, DCL, Abfrageoptimierung, Benutzerverwaltung, Import/Export, Archivierung) |
| III. | 6. | KM6 | **Datenbanken** – Applikationsentwurf, praktische DB-Anwendungen, DB-Programme, Reportgenerierung, DB-Schnittstellen |
| IV. | 7. | KM7 | **Enterprise Resource Planning (ERP)** – ERP-Systeme, Finanzbuchhaltung |
| IV. | 8. | KM8 | **ERP** – Materialwirtschaft, Produktionsplanung/-steuerung |
| V. | 9. | KM9 | **Informationssysteme** – DW, Datamining, KI, Betriebsdatenerfassung, Zahlungsverkehr; **ERP** Vertrieb |
| V. | 10. | KM9 | **Informationssysteme** – Geschäftsprozessmodellierung, Simulation |

> **Domänenwechsel:** Das Fach ist in Jg I–III datenbankzentriert (Kerngebiet des Unterrichts in diesem Repo), wechselt in Jg IV zu **ERP** (SAP, Buchhaltung, Materialwirtschaft) und in Jg V zu **Informationssystemen** (Datawarehouse, Datamining, Geschäftsprozesse). Jg IV/V sind daher separate Domänen – für sie gibt es hier nur Gerüste (siehe `jg4-einheiten.md`, `jg5-einheiten.md`).

## Planungskonvention

- **Einheiten pro Semester:** ca. **12 thematische Doppelstunden** (Netto nach Abzug administrativer Termine, Tests, PLF, Ferien). Bei 2 Wochenstunden ≈ 15 Schulwochen → verbleiben ~12 nutzbare Einheiten.
- **Dokumente pro Jahrgang:** jeweils eine Datei `jgN-einheiten.md` mit ~12 Einheiten pro Semester, jeweils verknüpft mit dem offiziellen Lehrstoffpunkt und (soweit vorhanden) dem archivierten Unterricht.
- **Selbsttragend:** [`LEHRPLAN.md`](LEHRPLAN.md) enthält den vollständigen offiziellen Lehrstoff aller Jahrgänge, sodass eine spätere Session nur diese Datei benötigt, um weitere `jgN-einheiten.md` zu generieren.

## Änderungshistorie des Lehrplans

| Datum | Änderung | Betrifft |
|-------|----------|----------|
| 17.09.2015 | Stammfassung (BGBl. II Nr. 262/2015) | Gesamtes Lehrplanpaket |
| 01.09.2017 | BGBl. II Nr. 74/2017 – Ergänzung einer weiteren Fachrichtung | Anlage 1.28 unverändert |
| 01.09.2019 | BGBl. II Nr. 273/2019 – Aufhebung von Z 23 und Z 29 (Anlage 1.23, 1.29) | Verzeichnis bereinigt |

## Dateien in diesem Verzeichnis

| Datei | Beschreibung |
|-------|--------------|
| `METADATA.md` | Diese Datei – rechtliche Grundlage, Quellen, Stundentafel, Konvention |
| `LEHRPLAN.md` | Offizieller Exzerpt des Fachs „Informatik und Informationssysteme" für alle Jahrgänge (I–V) – die QUELLE |
| `jg2-einheiten.md` | 2. Klasse (KM3+KM4) – aus dem Unterricht SJ 2025/26 rückgepflegt (Referenz, „erledigt") |
| `jg3-einheiten.md` | 3. Klasse (KM5+KM6) – Einheitenplanung (Priorität 2026/27) |
| `jg4-einheiten.md` | 4. Klasse (KM7+KM8) – Gerüst aus offiziellem Lehrstoff (ERP) – Stub |
| `jg5-einheiten.md` | 5. Klasse (KM9) – Gerüst aus offiziellem Lehrstoff (IS) – Stub |