# Project State

Current status as of 2026-09-07.

## Current Focus

Lehrplan-Werk liegt im **Skill-Standard-Layout** unter `lehrplan/` (Migration 2026-09-07,
aus der alten Struktur `docs/lehrplan/` + Root-Klassenordner). Lehrplan-Werk SJ 2026/27 für
INFI steht (Issue [GRG-INFI#1](https://github.com/georgernstgraf/GRG-INFI/issues/1)).
Nächster Fokus: operative Vorbereitung des WS 2026/27 (Kollegen-Absprache, Termine, Material).

## Completed (this cycle)

- [x] **Vollmigration auf Standard-Layout** (2026-09-07): `lehrplan/` enthält ①-Extrakt
      (`infi-lehrplan-text.md`), RIS, METADATA, Schuladaption-PDF, Klassenordner
      `2HWII`–`5HWII` je mit `<KLASSE>.lehrplan.md` (neu aus ① extrahiert) + `jgN-einheiten.md`,
      sowie `kompetenzmodule/`; alle internen Links repariert
- [x] RIS-Novellen-Check live bestätigt (2026-09-07: „zuletzt geändert durch“ 235/2019);
      `lehrplan`-Skill verschärft (Standard-Layout verbindlich, Mapping INFI→HWII)
- [x] Cross-Repo-Links in GRG-SWP auf neue GRG-INFI-Pfade angepasst

## Completed (previous cycle, 2026-07-26)

- [x] Schichten-Vergleich ①↔②↔③ (Befund: ② ≡ ①; ③-Redaktion LEHRPLAN.md korrigiert)
- [x] `lehrplan/RIS.md` (INFI-Sicht) + `HWII_INFI.pdf` ins Repo kopiert
- [x] `lehrplan/kompetenzmodule/` (Matrix, km5/km6 voll, km3/km4 Gerüst+, km7/8/9 Gerüste)
- [x] `lehrplan/3HWII/` (Drehscheibe inkl. SWP-Verbund, Kollegen-Soll, Offene Punkte; Semesterpläne
      WS/SS je 13 UE + 2 PLF, Sync mit GRG-SWP)
- [x] `jg3-einheiten.md` verlustfrei migriert + gelöscht; LEHRPLAN/METADATA/README/AGENTS
      aktualisiert
- [x] Verifikation: 0 kaputte Links · UE-Zählung 13+2 · Abdeckung KM5/KM6 · RIS-Stichproben
- [x] `docs/ai/`-Wissensbasis etabliert (DECISIONS/CONVENTIONS/PITFALLS/DOMAIN/ARCHITECTURE/
      STATE/HISTORY)

## Pending

- [ ] Kollegen-Thema abstimmen (Vorschlag: `lehrplan/3HWII/README.md` → Kollegen-Soll) — **menschlich**,
      vor WS-Start
- [ ] PLF-Termine nach Schulkalender in `lehrplan/3HWII/semesterplan-*.md` eintragen
- [ ] PostgreSQL-Docker-Demo (WS UE 11) vorbereiten/testen; Fallback: Konzeptlehre
- [ ] Musik-Streaming-DB (Dauerbeispiel) Seed-Stand prüfen/versionieren
- [ ] Domänenwahl mit der Klasse (SS ~UE 9, gemeinsam mit SWP)

## Blockers

None. (Offene Punkte sind organisatorisch, nicht technisch.)

## Next Session Suggestion

PLF-Termine + Kollegen-Absprache-Ergebnis in `lehrplan/3HWII/` nachpflegen; PG-Docker-Demo bauen.
Re-Check RIS: Sommer 2027.
