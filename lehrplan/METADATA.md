# Metadaten zum Lehrplan – Wirtschaftsingenieure Betriebsinformatik

## Rechtliche Grundlage

| Feld | Wert |
|------|------|
| **Kundmachungsorgan** | BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019 |
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

Der Primärtext (Schicht ①) ist die konsolidierte Fassung der Anlage 1.24 (siehe RIS-Verweise oben); das vollständige Exzerpt des Fachs liegt in [`infi-hwii/LEHRPLAN.md`](infi-hwii/LEHRPLAN.md) — am 2026-07-26 gegen ① verifiziert und korrigiert (Details: [`infi-hwii/RIS.md`](infi-hwii/RIS.md) §6).

Weitere Quellen:

- **Schuladaption (Schicht ②):** [`infi-hwii/HWII_INFI.pdf`](infi-hwii/HWII_INFI.pdf) (im Zweig-Ordner; mit `pdftotext -layout` lesbar) — inhaltlich deckungsgleich mit ①.
- **Schul-Download „Lehrplan":** `LP_ab14_Betriebsinformatik.pdf` (174 KB), https://www.spengergasse.at/wp-content/uploads/2020/04/LP_ab14_Betriebsinformatik.pdf (= RIS-Originaltext).
- **Pendant (Abteilung Technisches Management, Anlage 1.28):** primär verwaltet im Fachgruppen-Repo `WI-Fachgruppe-Informatik` (`lehrplan/infi-hwit/`); im Zweig-Ordner `infi-hwit/` dieses Repos liegt nur ein Skelett (Extraktion via Task 2 ausstehend) – *nicht* für WII maßgeblich.

## Stundentafel (HTL Spengergasse, schulautonom)

| Fach | I. | II. | III. | IV. | V. | Summe |
|------|----|-----|------|-----|-----|-------|
| **Informatik und Informationssysteme** | 2 | 2 | 3 | 2 | 4 | 13 |

Quelle: https://www.spengergasse.at/?page_id=2085 (schulautonome Stundentafel „Betriebsinformatik").

> Hinweis: Die Wochenstunden betragen für IuI in der RIS-Stundentafel *2(2)/3(3)/2(2)/2(2)/6(4)* — Summe 15 (Werte in Klammern = Übungsanteile, Fußnote 4; korrigiert am 2026-07-26, zuvor fälschlich 2(2)/2(2)/2(2)/2(2)/4(4)). Die Spengergasse weist schulautonom **2/2/3/2/4 = 13** aus (III +1, II −1, V −2) und führt die Übungsanteile integriert. Die inhaltliche Lehrstoffverteilung (Anlage 1.24) ist davon nicht berührt. Details: [`RIS.md`](RIS.md) §4.

## Kompetenzmodule und Bereiche (Fach: Informatik und Informationssysteme)

| Jahrgang | Semester | KM | Bereich (laut Lehrplan) |
|----------|----------|----|-------------------------|
| I. | 1. + 2. | — | Angewandte Informatik (Hardware, Betriebssysteme, Office, Netz, Gesellschaft) |
| II. | 3. | KM3 | **Datenbanken** – ER-Modellierung, Datenbankentwurf (Normalformen, Relationenschema, Schlüssel/FK/Indizes, referentielle Integrität), Data Definition Language |
| II. | 4. | KM4 | **Datenbanken** – SQL (Projektion, Selektion, Gruppierung, Aggregatfunktionen, Verbund, DML, DCL), Formulare/Berichte |
| III. | 5. | KM5 | **Datenbanken** – komplexe Abfragen (Unterabfragen, Datendefinitionssprache, Abfrageoptimierung, Benutzerverwaltung, Import/Export, Archivierung) |
| III. | 6. | KM6 | **Datenbanken** – Applikationsentwurf, praktische DB-Anwendungen (DB-Programme, Benutzerführung, Reportgenerierung, DB-Schnittstellen) |
| IV. | 7. | KM7 | **Enterprise Resource Planning (ERP)** – ERP-Systeme, Finanzbuchhaltung |
| IV. | 8. | KM8 | **ERP** – Materialwirtschaft, Produktionsplanung/-steuerung |
| V. | 9. | KM9 | **Informationssysteme** – DW, Datamining, KI, Betriebsdatenerfassung, Zahlungsverkehr; **Datenbanken** – DB-Anwendung implementieren (Web-/GUI-Applikationen); **ERP** Vertrieb |
| V. | 10. | KM9 | **Informationssysteme** – Geschäftsprozessmodellierung, Simulation; **Datenbanken** – DB-Anwendung implementieren; **ERP** Kostenrechnung |

> **Domänenwechsel:** Das Fach ist in Jg I–III datenbankzentriert (Kerngebiet des Unterrichts in diesem Repo), wechselt in Jg IV zu **ERP** (SAP, Buchhaltung, Materialwirtschaft) und in Jg V zu **Informationssystemen** (Datawarehouse, Datamining, Geschäftsprozesse). Jg IV/V sind daher separate Domänen – für sie gibt es hier nur Gerüste (siehe `4HWII/jg4-einheiten.md`, `5HWII/jg5-einheiten.md`).

## Planungskonvention

- **Zeitmodell ab Jg III (PMM-Stil, Vorbild GRG-SWP):** **13 echte Unterrichtseinheiten (UE) + 2 PLF-Doppelstunden** pro Semester (1 UE = 1 DS à 2 h = Georgs Anteil am 2+1-Split; der Kollege hat 1 h/Woche). Details: [`infi-hwii/kompetenzmodule/README.md`](infi-hwii/kompetenzmodule/README.md).
- **Jg II (2 h, Georg allein):** ca. 12 thematische Doppelstunden pro Semester (Netto nach Abzug administrativer Termine, Tests, PLF, Ferien).
- **Dokumente pro Jahrgang:** KM-Steckbriefe in [`infi-hwii/kompetenzmodule/`](infi-hwii/kompetenzmodule/) + Klassen-Extrakte unter `lehrplan/infi-hwii/<KLASSE>/` (z. B. [`infi-hwii/3HWII/`](infi-hwii/3HWII/)) je mit `<KLASSE>.lehrplan.md` (klassenrelevanter ①-Extrakt). Die Lehrstoffverteilungen (`jgN-einheiten.md`) und Semesterpläne (`jgN-semesterplan-{ws,ss}.md`) liegen seit dem Retrofit 2026-09-10 unter `unterricht/HWII-INFI/` (Unterrichts-Ebene, Repo-Root).
- **Selbsttragend:** [`infi-hwii/LEHRPLAN.md`](infi-hwii/LEHRPLAN.md) enthält den vollständigen offiziellen Lehrstoff aller Jahrgänge, sodass eine spätere Session nur diese Datei benötigt, um weitere Pläne zu generieren (Anleitung dort am Ende).

## Änderungshistorie des Lehrplans

| Datum | Änderung | Betrifft Anlage 1.24 / INFI |
|-------|----------|------------------------------|
| 17.09.2015 | Stammfassung (BGBl. II Nr. 262/2015) | Erlass (Lehrplanpaket HTL 2015) |
| 01.09.2019 | BGBl. II Nr. 235/2019 – Deutschförderklasse-Stundentafel (Anhang) | ja, aber nur Anhang — INFI-Lehrstoff unverändert |

> Übrige Novellen (55/2017, 250/2021, 383/2021, 368/2022, 2/2023) berühren die Anlage 1.24
> **nicht** — ausführliche Prüftabelle: [`RIS.md`](RIS.md) §3. Nächster Re-Check: Sommer 2027.

**RIS-Status abgefragt am 2026-09-07:** NOR-Dokument der Anlage 1.24 ([NOR40217058](https://www.ris.bka.gv.at/Dokumente/Bundesnormen/NOR40217058/NOR40217058.html)) meldet „BGBl. II Nr. 262/2015 **zuletzt geändert durch** BGBl. II Nr. 235/2019" — deckt sich exakt mit der Tabelle oben; **keine neue Novelle**.

## Klassen-Zuordnung

| Jahrgang | Klassenname (generisch, UPPERCASE) | KM | Status |
|----------|-------------------------------------|-----|--------|
| I. | *(kein Klassenordner — rawData/Office, kein DB-Fokus in diesem Repo)* | — | nicht geplant |
| II. | [`infi-hwii/2HWII/`](infi-hwii/2HWII/) | KM3 + KM4 | unterrichtet SJ 2025/26 (archiviert) |
| III. | [`infi-hwii/3HWII/`](infi-hwii/3HWII/) | KM5 + KM6 | **aktiv SJ 2026/27** |
| IV. | [`infi-hwii/4HWII/`](infi-hwii/4HWII/) | KM7 + KM8 | Stub (ERP) |
| V. | [`infi-hwii/5HWII/`](infi-hwii/5HWII/) | KM9 | Stub (IS/DB/ERP) |

> **Layout-Migration 2026-09-07:** Von `docs/lehrplan/` + Klassenordnern im
> Repo-Root in den `lehrplan/`-Standard migriert.
>
> **Layout-Retrofit 2026-09-10** (lehrplan-Skill v2): Zweig-Ordner
> `infi-hwii/` angelegt — `LEHRPLAN.md` (ehem. `infi-lehrplan-text.md`),
> Klassen-Extrakte, `kompetenzmodule/`, `RIS.md` und `HWII_INFI.pdf` (②)
> dorthin verschoben; Einheiten (`jg2/jg4/jg5-einheiten.md`) und
> Semesterpläne (`jg3-semesterplan-{ws,ss}.md`) wanderten nach
> `unterricht/HWII-INFI/` (Unterrichts-Ebene, Repo-Root). Zweig-Ordner
> `infi-hwit/` als Skelett angelegt (Anlage 1.28, Extraktion via Task 2
> ausstehend; primäre Verwaltung im Fachgruppen-Repo).

## Dateien in diesem Verzeichnis

| Datei | Beschreibung |
|-------|--------------|
| `METADATA.md` | Diese Datei – rechtliche Grundlage, Quellen, Stundentafel, Konvention |
| `infi-hwii/LEHRPLAN.md` | Offizieller Exzerpt (①) des Fachs „Informatik und Informationssysteme" für alle Jahrgänge (I–V) – die QUELLE |
| `infi-hwii/RIS.md` | Rechtsstand, Novellen-Historie, Stundentafel, Drei-Schichten-Vergleich (①/②/③) |
| `infi-hwii/HWII_INFI.pdf` | Schuladaption (Schicht ②) – mit `pdftotext -layout` lesbar |
| `infi-hwii/2HWII/` | 2. Klasse (KM3+KM4): `2HWII.lehrplan.md` (①-Extrakt) |
| `infi-hwii/3HWII/` | 3. Klasse (KM5+KM6, **aktiv SJ 2026/27**): `3HWII.lehrplan.md` + Klassen-Drehscheibe `README.md` |
| `infi-hwii/4HWII/` | 4. Klasse (KM7+KM8, ERP): `4HWII.lehrplan.md` – Stub |
| `infi-hwii/5HWII/` | 5. Klasse (KM9, IS): `5HWII.lehrplan.md` – Stub |
| `infi-hwii/kompetenzmodule/` | Didaktische KM-Steckbriefe (`README.md` = Matrix, `km3.md`–`km9.md`) |
| `infi-hwit/` | Skelett (Anlage 1.28, HWIT): Extraktion via Task 2 ausstehend; primäre Verwaltung im Fachgruppen-Repo `WI-Fachgruppe-Informatik` |
| `unterricht/HWII-INFI/jg2-einheiten.md` | Ist SJ 2025/26 („erledigt") |
| `unterricht/HWII-INFI/jg3-semesterplan-{ws,ss}.md` | Semesterpläne 3. Klasse (aktiv SJ 2026/27) |
| `unterricht/HWII-INFI/jg4-einheiten.md` | Einheiten-Gerüst – Stub (ERP) |
| `unterricht/HWII-INFI/jg5-einheiten.md` | Einheiten-Gerüst – Stub (IS/DB/ERP) |

> **3. Klasse (KM5+KM6):** seit 2026-07-26 im PMM-Stil organisiert — KM-Steckbriefe
> [`infi-hwii/kompetenzmodule/km5.md`](infi-hwii/kompetenzmodule/km5.md) /
> [`km6.md`](infi-hwii/kompetenzmodule/km6.md),
> Semesterpläne und Verbund-Doku in [`infi-hwii/3HWII/`](infi-hwii/3HWII/). (Die frühere Datei
> `jg3-einheiten.md` wurde nach verlustfreier Migration entfernt.)