# Conventions

Coding patterns, naming rules, and style agreements for this project.
Follow these without question. Do not deviate unless explicitly told.

> Repo-Grundregeln (Deno/TS/SQL, Formatierung, Kommentarsprache): Root-`AGENTS.md`.
> Hier nur die Doku-Konventionen der Lehrplan-Landschaft (PMM-Stil; seit 2026-09-07
> im Skill-Standard-Layout unter `lehrplan/`).

## Doku-Struktur (PMM-Stil, Standard-Layout)

- Alles Lehrplan-Bezogene unter `lehrplan/` (Skill-Standard-Layout, Migration 2026-09-07; Zweig-Retrofit 2026-09-10):
  - `infi-hwii/LEHRPLAN.md` = offizieller ①-Extrakt aller Jahrgänge (die QUELLE);
  - Klassen-Extrakte `infi-hwii/<KLASSE>/` (UPPERCASE, z. B. `2HWII/`–`5HWII/`) je mit
    `<KLASSE>.lehrplan.md` (klassenrelevanter ①-Extrakt: Bildungs- und Lehraufgabe +
    Lehrstoff der KM des Jahrgangs);
  - aktuelle Klassenordner zusätzlich mit `README.md` (Drehscheibe).
- KM-Steckbriefe in `lehrplan/infi-hwii/kompetenzmodule/kmN.md`; Matrix + Zeitmodell in `lehrplan/infi-hwii/kompetenzmodule/README.md`.
- Unterrichts-Ebene am Repo-Root: `unterricht/HWII-INFI/` mit `jgN-einheiten.md` und `jgN-semesterplan-{ws,ss}.md`.
- Klassenordner **groß** schreiben (z. B. `lehrplan/infi-hwii/3HWII/`, mögliche Parallelklassen 3a/3b).
- Schichten-Notation: **①** offizieller RIS-Text · **②** Schuladaption · **③** Unterricht/Repo-Didaktik.

## Semesterplan-Format

- **13 echte UE + 2 PLF-DS** pro Semester; 1 UE = 1 Doppelstunde (2 h).
- PLF 1 nach UE 7, PLF 2 nach UE 13; PLF-DS stehen im Block „Reservierte DS" (R1/R2).
- UE-Tabellen: Spalten `UE | Thema | KM-Bezug (①) | Inhalt / HÜ`; gruppiert unter
  Zwischenüberschriften (UE 1–3, UE 4–7, …).
- Optional: „Bonus-UE" (+1) bei Ausfallfreiheit; „Kollegen-Parallelnotiz" bei Split-Unterricht.
- Footer: Schwerpunkte-Verteilung + Synchronisations-Notiz zum Partnerfach (SWP-Verbund).

## Steckbrief-Format (volle KMs)

- Header: Klasse/Semester, Wochenstunden (mit Split), Zeitmodell, Bereich, Links zu Plan/Verbund.
- Abschnitte: „Worum geht es?" · „Wofür braucht man das in der Praxis?" ·
  „Inhalte" (Wissen/Verstehen/Können) · ggf. „Kollegen-Soll" · „Ressourcen & Stack" (Tabelle)
  · Mitgenommen aus … / Mitnahme nach … · Schwachstellen-Watchlist.
- Gerüst-KMs (km3/4/7/8/9): Kurzform mit „Worum geht es? (Skizze)", Inhaltsliste,
  Lücken/Übererfüllung, Klärungsfragen.

## Links

- Repo-interne Links **relativ**; Cross-Repo-Links (GRG-SWP) als **GitHub-URL**
  (`https://github.com/georgernstgraf/GRG-SWP/blob/main/…`).
- Lehrstoff-Zitate ① wörtlich (aus NOR40217058), Schuladaption ② als `HWII_INFI.pdf`
  in `lehrplan/` beilegen.

## Sprache

- Doku auf Deutsch; Lehrplan-/RIS-Terminologie unverändert übernehmen
  (z. B. „Bildungs- und Lehraufgabe", „Kompetenzmodul").
