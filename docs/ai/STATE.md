# Project State

Current status as of 2026-09-14.

## Current Focus

Lehrplan-Werk liegt im **Skill-Standard-Layout** unter `lehrplan/` (Migration 2026-09-07 /
Retrofit 2026-09-10, Zweig-Ordner `infi-hwii/` + Unterrichts-Ebene `unterricht/HWII-INFI/`).
Die **Erläuterungs-Ebene ist vollständig** (2026-09-14, via `lehrplan-annotator`, `glm-5.3`):
`LEHRPLAN.md` + alle Klassenextrakte annotiert, 11 Retrofit-Links repariert, SWP-PDF-Duplikat
entfernt. Lehrplan-Werk SJ 2026/27 für INFI steht (Issue
[GRG-INFI#1](https://github.com/georgernstgraf/GRG-INFI/issues/1)).
Nächster Fokus: operative Vorbereitung des WS 2026/27 (Kollegen-Absprache, Termine, Material).

## Completed (this cycle, 2026-09-14)

- [x] lehrplan-Skill Aufgabe A (Konformitäts-Check) + Aufgabe 2 (Erläuterungs-Ebene) —
      `LEHRPLAN.md` (8 Überblicke, 46 Erläuterungen) + `2HWII`/`3HWII`/`4HWII`/`5HWII`
- [x] 11 beim Retrofit gebrochene Relativ-Links repariert (Link-Check = 0)
- [x] `HWII_INFI.pdf`-Duplikat in `GRG-SWP/lehrplan/swp-hwii/` entfernt (byte-identisch);
      SWP-`METADATA.md`/`HANDOFF.md` aktualisiert
- [x] `lehrplan-annotator`-Subagent registriert (`~/.config/opencode/agents`-Symlink),
      auf Kopiervorlage getestet, für die Annotations-Läufe eingesetzt; `HANDOFF.md` fortgeschrieben

## Completed (previous cycle, 2026-09-07)

- [x] **Vollmigration auf Standard-Layout** (2026-09-07): `lehrplan/` enthält ①-Extrakt
      (`LEHRPLAN.md`), RIS, METADATA, Schuladaption-PDF, Klassenordner
      `2HWII`–`5HWII` je mit `<KLASSE>.lehrplan.md` (neu aus ① extrahiert),
      sowie `kompetenzmodule/`; alle internen Links repariert
- [x] RIS-Novellen-Check live bestätigt (2026-09-07: „zuletzt geändert durch“ 235/2019);
      `lehrplan`-Skill verschärft (Standard-Layout verbindlich, Mapping INFI→HWII)
- [x] Cross-Repo-Links in GRG-SWP auf neue GRG-INFI-Pfade angepasst

## Completed (previous cycle, 2026-07-26)

- [x] Schichten-Vergleich ①↔②↔③ (Befund: ② ≡ ①; ③-Redaktion LEHRPLAN.md korrigiert)
- [x] `lehrplan/infi-hwii/RIS.md` (INFI-Sicht) + `HWII_INFI.pdf` ins Repo kopiert
- [x] `lehrplan/infi-hwii/kompetenzmodule/` (Matrix, km5/km6 voll, km3/km4 Gerüst+, km7/8/9 Gerüste)
- [x] `lehrplan/infi-hwii/3HWII/` (Drehscheibe inkl. SWP-Verbund, Kollegen-Soll, Offene Punkte; Semesterpläne
      WS/SS je 13 UE + 2 PLF, Sync mit GRG-SWP)
- [x] `jg3-einheiten.md` verlustfrei migriert + gelöscht; LEHRPLAN/METADATA/README/AGENTS
      aktualisiert
- [x] Verifikation: 0 kaputte Links · UE-Zählung 13+2 · Abdeckung KM5/KM6 · RIS-Stichproben
- [x] `docs/ai/`-Wissensbasis etabliert (DECISIONS/CONVENTIONS/PITFALLS/DOMAIN/ARCHITECTURE/
      STATE/HISTORY)

## Pending

- [ ] Kollegen-Thema abstimmen (Vorschlag: `lehrplan/infi-hwii/3HWII/README.md` → Kollegen-Soll) — **menschlich**,
      vor WS-Start
- [ ] PLF-Termine nach Schulkalender in `unterricht/HWII-INFI/jg3-semesterplan-*.md` eintragen
- [ ] PostgreSQL-Docker-Demo (WS UE 11) vorbereiten/testen; Fallback: Konzeptlehre
- [ ] Musik-Streaming-DB (Dauerbeispiel) Seed-Stand prüfen/versionieren
- [ ] Domänenwahl mit der Klasse (SS ~UE 9, gemeinsam mit SWP)

## Blockers

None. (Offene Punkte sind organisatorisch, nicht technisch.)

## Next Session Suggestion

PLF-Termine + Kollegen-Absprache-Ergebnis in `lehrplan/infi-hwii/3HWII/` nachpflegen; PG-Docker-Demo bauen.
Re-Check RIS: Sommer 2027.
