# Kompetenzmodule INFI — Übersicht

Didaktische Steckbriefe zu den Kompetenzmodulen des Faches
**Informatik und Informationssysteme** (INFI, HTL Spengergasse, WII–Betriebsinformatik) —
je ein Markdown-File pro KM.

Rechtsgrundlage: BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019, Anlage 1.24
(Recherche & Schichten-Vergleich: `docs/lehrplan/RIS.md` ·
Lehrstoff-Extrakt: `docs/lehrplan/LEHRPLAN.md`).

## Semester ↔ Klasse ↔ KM

| Semester | Klasse | KM | Inhalt (Bereiche) | Unterrichtet |
|---|---|---|---|---|
| 1–2 | 1. Klasse | — | Angewandte Informatik (Hardware, Betriebssysteme, Office, Web-Publikation, Tabellenkalkulation) | nein |
| 3 | 2. Klasse, WS | KM3 | **Datenbanken** – ER-Modellierung, Datenbankentwurf (Normalformen, Relationenschema, Schlüssel/FK/Indizes), DDL | **ja (SJ 2025/26, 2AHWII)** |
| 4 | 2. Klasse, SS | KM4 | **Datenbanken** – SQL-Abfragen (Projektion…Verbund, DML, DCL), Formulare/Berichte | **ja (SJ 2025/26, 2AHWII)** |
| 5 | 3. Klasse, WS | KM5 | **Datenbanken** – komplexe Abfragen (Unterabfragen), DDL, Abfrageoptimierung, Benutzerverwaltung, Import/Export, Archivierung | **ja (ab WS 2026/27, 2+1-Split¹)** |
| 6 | 3. Klasse, SS | KM6 | **Datenbanken** – Applikationsentwurf, DB-Programme, Benutzerführung, Reportgenerierung, DB-Schnittstellen | **ja (ab SS 2027, 2+1-Split¹)** |
| 7 | 4. Klasse, WS | KM7 | **ERP** – ERP-Systeme, Finanzbuchhaltung | voraussichtlich ja (ab WS 2027/28) |
| 8 | 4. Klasse, SS | KM8 | **ERP** – Materialwirtschaft, Produktionsplanung/-steuerung | voraussichtlich ja (ab SS 2028) |
| 9–10 | 5. Klasse | KM9 | **Informationssysteme** (DWH, Datamining, KI, Prozessmodellierung) + **Datenbanken** (Web-/GUI-Applikationen) + **ERP** (Vertrieb, Kostenrechnung) | voraussichtlich ja (ab SJ 2028/29) |

¹ **2+1-Split ab Jg III:** Von den 3 Wochenstunden (schulautonom; offiziell 2(2), siehe
`docs/lehrplan/RIS.md` §4) unterrichtet **Georg 2 h** (1 DS/Woche: SQL/Datenbank-Kern) und ein
**Kollege 1 h** (Nicht-SQL-Anteile — Extraktionsvorschlag in `km5.md`/`km6.md` bzw.
`3HWII/README.md`; finale Absprache **TBD**).

## Zeitmodell (ab Jg III, Georgs Anteil)

- 18 Schulwochen/Semester offiziell; real ~15 Doppelstunden (1 DS/Woche à 2 h)
  nach Abzug von Feiertagen, Admin, Prüfungen
- **13 echte Unterrichtseinheiten (UE) + 2 PLF-Doppelstunden**
  (2 PLFs pro Semester; keine separate Einstiegstest-Reserve)
- Ausfälle durch Krankheit/Feiertage sind einkalkuliert; bei Glücksfall optionale Bonus-UE

## Steckbriefe

| Datei | KM | Status |
|---|---|---|
| `km3.md` | KM3 — ER-Modellierung, Datenbankentwurf, DDL | Gerüst+ (rückgepflegt SJ 2025/26) |
| `km4.md` | KM4 — SQL-Abfragen, DML/DCL, Formulare/Berichte | Gerüst+ (rückgepflegt SJ 2025/26) |
| `km5.md` | KM5 — Komplexe Abfragen, Optimierung, Benutzerverwaltung | **voll** |
| `km6.md` | KM6 — Datenbankanwendung, Prisma, REST-Schnittstellen | **voll** |
| `km7.md` | KM7 — ERP-Systeme, Finanzbuchhaltung | Gerüst |
| `km8.md` | KM8 — Materialwirtschaft, PPS | Gerüst |
| `km9.md` | KM9 — Informationssysteme + DB-Applikationen + ERP | Gerüst |

Gerüste werden zu vollständigen Steckbriefen ausgebaut, sobald Georg das
betreffende Semester konkret plant.

## Verknüpfte Dokumente

- `docs/lehrplan/LEHRPLAN.md` — offizieller Lehrstoff (①-Extrakt, verifiziert 2026-07-26)
- `docs/lehrplan/RIS.md` — Rechtsstand, Stundentafel, Schichten-Vergleich
- `docs/lehrplan/METADATA.md` — Stundentafel, Planungskonvention
- `3HWII/README.md`, `3HWII/semesterplan-ws.md`, `3HWII/semesterplan-ss.md` — konkrete
  Semesterpläne (KM5/KM6) inkl. SWP-Verbund
- `docs/lehrplan/jg2-einheiten.md` — rückgepflegter Unterricht KM3/KM4 (SJ 2025/26)
