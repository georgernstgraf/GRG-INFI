# HANDOFF — Session-Auftrag: Lehrplan-Werk SJ 2026/27 für INFI (Spiegel der SWP-Arbeit)

> Erstellt: 2026-07-26 (Session im Repo `../GRG-SWP`). Auftraggeber: Georg.
> **Auftrag:** Im Repo `../GRG-SWP` wurde das Lehrplan-Werk für SWP gebaut (RIS-Recherche,
> Kompetenzmodul-Matrix, KM-Steckbriefe, Semesterpläne `3HWII/` mit 13 echten UE + 2 PLF-DS).
> Georg will **dieselbe Arbeit für INFI** in diesem Repo (GRG-INFI).

---

## 1. Bereits erledigt — NICHT erneut recherchieren

### RIS-Stand Anlage 1.24 (WII – Betriebsinformatik; enthält das Fach „Informatik und Informationssysteme")

- **BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019** — aktuell gültig, **nicht obsolet**.
  Lehrstoff der Anlage 1.24 seit 2015 inhaltlich unverändert (235/2019 brachte nur die
  Deutschförderklasse-Stundentafel als Anhang).
- Novellen 55/2017, 250/2021, 383/2021 (Elektrotechnik/Informatik-HLA etc.), 368/2022
  (**Sonderformen**/Berufstätige — eigene Verordnung, irrelevant für die Tagesform) und
  2/2023 (Anlagen 1.11/1.17) berühren den Lehrstoff der Anlage 1.24 **nicht**.
- Kein Ersatz-Lehrplan für WII–Betriebsinformatik in Begutachtung gefunden.

### Fundstellen

- Konsolidierte Fassung (Gesetz):
  `https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20009288`
- Anlage 1.24 Volltext (konsolidiert):
  `https://www.ris.bka.gv.at/Dokumente/Bundesnormen/NOR40217058/NOR40217058.html`
- Schul-Stundentafel: `https://www.spengergasse.at/?page_id=2085`
  (SWP 2/2/4/4/6; **INFI 2/2/3/2/4 = 13**; schulautonome Fächer „Digitale Technologien" +
  „Smart Production Lab" ohne INFI-Lehrstoff-Bezug).
- Maschinenlesbare Zusammenfassung + Abweichungstabelle (RIS offiziell vs. Schuladaption vs.
  Unterricht): **`../GRG-SWP/docs/lehrplan/RIS.md`** — für das INFI-Fach analog prüfen/ergänzen.

## 2. Formatvorlagen (fertig in `../GRG-SWP`, 1:1 adaptierbar)

| Vorlage | Pfad in `../GRG-SWP` |
|---|---|
| KM-Matrix (Semester↔Klasse↔KM↔Inhalt↔Wer↔Status) | `kompetenzmodule/README.md` |
| Volle Steckbriefe (Worum/Praxis/Wissen-Verstehen-Können/Stack/Links) | `kompetenzmodule/km5.md`, `km6.md` |
| Gerüst-Steckbriefe | `kompetenzmodule/km3.md`, `km4.md`, `km7.md`, `km8.md`, `km9.md` |
| Klassen-Drehscheibe **inkl. kompletter INFI-Verbund-Doku** (Schichten-Aufteilung, Repository-Brücke, TPH/O-R-Mapping mit Code, Sequenz, 5 Domänen) | `3HWII/README.md` |
| Semesterplan-Format (13 UE + 2 PLF, Tabellen, PMM-Stil) | `3HWII/semesterplan-ws.md`, `3HWII/semesterplan-ss.md` |
| RIS-Recherche-Dokument | `docs/lehrplan/RIS.md` |

## 3. Getroffene Entscheidungen (gelten auch für INFI)

- Ablage **PMM-Stil im Root**: `kompetenzmodule/`, `3HWII/` (Klassenordner groß, wegen
  möglicher Parallelklassen 3a/3b).
- **1 Lerneinheit (UE) = 1 Doppelstunde (2 h)**; **13 echte UE + 2 PLF-DS** pro Semester
  (2 PLFs pro Semester; keine separate Einstiegstest-Reserve).
- Lehrplan-Doku **dreischichtig**: ① getreuer RIS-Extrakt ② Schuladaption
  (`docs/lehrplan/HWII_INFI.pdf` — mit `pdftotext -layout` lesbar) ③ realer Unterricht/Didaktik.
- **Verbundprojekt SWP↔INFI bleibt** („eine App, zwei Noten"; SWP: OOP+GUI+Repository-Interface,
  INFI: Persistenz/Prisma/Abfragen). PM-Anteile = SWP-Kollege (Koordination offen).
- SWP-Split in der 3ahwii: 2+2 (Georg 2 h: OOP+Web+UML-Klassendiagramm; Kollege 2 h: PRE +
  übrige Modellierung).

## 4. In der neuen Session ZU TUN

1. **Zuerst grillen (offene Fragen):** Unterrichtet Georg INFI der 3ahwii allein?
   INFI-Wochenstunden Jg III schulautonom (=3 → 1,5 DS? Zeitmodell klären!)? PLF-Termine?
   Muss der Verbund mit Kollegen abgestimmt werden?
2. `docs/lehrplan/` Ist-Stand lesen (LEHRPLAN.md, METADATA.md, jg2–jg5-einheiten.md) +
   `HWII_INFI.pdf` per `pdftotext -layout` → Schichten-Vergleich für das INFI-Fach.
3. `docs/lehrplan/RIS.md` anlegen (INFI-Sicht; verweist auf `../GRG-SWP/docs/lehrplan/RIS.md`).
4. `kompetenzmodule/` für INFI-KMs anlegen (Jg III = Datenbanken/SQL/Prisma: KM5 komplexe
   Abfragen/Normalformen/CTEs/Views/Transaktionen, KM6 Prisma/REST/Anbindung — siehe
   `docs/lehrplan/jg3-einheiten.md` in diesem Repo) + `3HWII/semesterplan-{ws,ss}.md`.
   **Verbund-Sequenz mit den SWP-Plänen abgleichen** (`../GRG-SWP/3HWII/README.md`).
5. `jg3-einheiten.md` hier ebenfalls nach verlustfreier Migration löschen; METADATA.md /
   LEHRPLAN.md / Root-README.md aktualisieren.
6. Verifikation: Links, UE-Zählung (13+2), Abdeckungstabelle, RIS-Stichproben.

## 5. Konventionen dieses Repos beachten

- `AGENTS.md` (Root): Deno/TS, deutsche Kommentare, `deno fmt` (2 Spaces, doppelte
  Anführungszeichen), `deno test`.
- `docs/ai/` wird mit dieser Datei neu etabliert (Konvention aus GRG-CS/GRG-SWP-T:
  HANDOFF / STATE / DECISIONS / …). Am Ende der Session STATE.md anlegen und dieses
  HANDOFF auf „erledigt" aktualisieren.
