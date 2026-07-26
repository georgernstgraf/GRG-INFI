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

Der Primärtext (Schicht ①) ist die konsolidierte Fassung der Anlage 1.24 (siehe RIS-Verweise oben); das vollständige Exzerpt des Fachs liegt in [`LEHRPLAN.md`](LEHRPLAN.md) — am 2026-07-26 gegen ① verifiziert und korrigiert (Details: [`RIS.md`](RIS.md) §6).

Weitere Quellen:

- **Schuladaption (Schicht ②):** [`HWII_INFI.pdf`](HWII_INFI.pdf) (in diesem Verzeichnis; mit `pdftotext -layout` lesbar) — inhaltlich deckungsgleich mit ①.
- **Schul-Download „Lehrplan":** `LP_ab14_Betriebsinformatik.pdf` (174 KB), https://www.spengergasse.at/wp-content/uploads/2020/04/LP_ab14_Betriebsinformatik.pdf (= RIS-Originaltext).
- **Pendant (Abteilung Technisches Management, Anlage 1.28):** verwaltet im Repo `GRG-PMM/docs/lehrplan/` – *nicht* für WII maßgeblich.

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

> **Domänenwechsel:** Das Fach ist in Jg I–III datenbankzentriert (Kerngebiet des Unterrichts in diesem Repo), wechselt in Jg IV zu **ERP** (SAP, Buchhaltung, Materialwirtschaft) und in Jg V zu **Informationssystemen** (Datawarehouse, Datamining, Geschäftsprozesse). Jg IV/V sind daher separate Domänen – für sie gibt es hier nur Gerüste (siehe `jg4-einheiten.md`, `jg5-einheiten.md`).

## Planungskonvention

- **Zeitmodell ab Jg III (PMM-Stil, Vorbild GRG-SWP):** **13 echte Unterrichtseinheiten (UE) + 2 PLF-Doppelstunden** pro Semester (1 UE = 1 DS à 2 h = Georgs Anteil am 2+1-Split; der Kollege hat 1 h/Woche). Details: [`kompetenzmodule/README.md`](../../kompetenzmodule/README.md).
- **Jg II (2 h, Georg allein):** ca. 12 thematische Doppelstunden pro Semester (Netto nach Abzug administrativer Termine, Tests, PLF, Ferien).
- **Dokumente pro Jahrgang:** KM-Steckbriefe in [`kompetenzmodule/`](../../kompetenzmodule/) + Klassenordner im Root (z. B. [`3HWII/`](../../3HWII/)) mit `README.md` und `semesterplan-{ws,ss}.md`. Die `jgN-einheiten.md` in diesem Verzeichnis bleiben als Gerüste (Jg IV/V) und historische Ist-Doku (Jg II) bestehen.
- **Selbsttragend:** [`LEHRPLAN.md`](LEHRPLAN.md) enthält den vollständigen offiziellen Lehrstoff aller Jahrgänge, sodass eine spätere Session nur diese Datei benötigt, um weitere Pläne zu generieren (Anleitung dort am Ende).

## Änderungshistorie des Lehrplans

| Datum | Änderung | Betrifft Anlage 1.24 / INFI |
|-------|----------|------------------------------|
| 17.09.2015 | Stammfassung (BGBl. II Nr. 262/2015) | Erlass (Lehrplanpaket HTL 2015) |
| 01.09.2019 | BGBl. II Nr. 235/2019 – Deutschförderklasse-Stundentafel (Anhang) | ja, aber nur Anhang — INFI-Lehrstoff unverändert |

> Übrige Novellen (55/2017, 250/2021, 383/2021, 368/2022, 2/2023) berühren die Anlage 1.24
> **nicht** — ausführliche Prüftabelle: [`RIS.md`](RIS.md) §3. Nächster Re-Check: Sommer 2027.

## Dateien in diesem Verzeichnis

| Datei | Beschreibung |
|-------|--------------|
| `METADATA.md` | Diese Datei – rechtliche Grundlage, Quellen, Stundentafel, Konvention |
| `LEHRPLAN.md` | Offizieller Exzerpt (①) des Fachs „Informatik und Informationssysteme" für alle Jahrgänge (I–V) – die QUELLE |
| `RIS.md` | Rechtsstand, Novellen-Historie, Stundentafel, Drei-Schichten-Vergleich (①/②/③) |
| `HWII_INFI.pdf` | Schuladaption (Schicht ②) – mit `pdftotext -layout` lesbar |
| `jg2-einheiten.md` | 2. Klasse (KM3+KM4) – aus dem Unterricht SJ 2025/26 rückgepflegt (Referenz, „erledigt") |
| `jg4-einheiten.md` | 4. Klasse (KM7+KM8) – Gerüst aus offiziellem Lehrstoff (ERP) – Stub |
| `jg5-einheiten.md` | 5. Klasse (KM9) – Gerüst aus offiziellem Lehrstoff (IS) – Stub |

> **3. Klasse (KM5+KM6):** seit 2026-07-26 im PMM-Stil organisiert — KM-Steckbriefe
> [`kompetenzmodule/km5.md`](../../kompetenzmodule/km5.md) / [`km6.md`](../../kompetenzmodule/km6.md),
> Semesterpläne und Verbund-Doku in [`3HWII/`](../../3HWII/). (Die frühere Datei
> `jg3-einheiten.md` wurde nach verlustfreier Migration entfernt.)