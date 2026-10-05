# Project State

Current status as of 2026-10-05.

## Current Focus

**Lesson-Infrastruktur + KM6-Vorbereitung (2026-10-05):** repo-weites `assets/` (Loader/Theme/
lesson.css/quiz/site/Badge) + `serve.sh`, **GitHub Pages** live
(<https://georgernstgraf.github.io/GRG-INFI/>, Lektions-Navigator `index.html`).
Zwei **Prepared Lessons** für **KM6 (SS 2027)**: `unterricht/KM6-01-prisma-werkzeuge/` und
`unterricht/KM6-02-prisma-query-api/` — TypeScript-Client, `praxis/` verifiziert, Issue **#6** geschlossen.
Das **Wintersemester bleibt KM5** (SQL-Vertiefung); die KM6-Lessons warten aufs SS.

Früherer Stand (2026-09-29): ORM-Entscheid umgesetzt: **Prisma bleibt, DB-Werkzeugkette → Node.js**
(ADR 2026-09-29); Prepared Lesson `unterricht/KM5-01-nodejs-prisma/` (Original „Rep & ORM-Einstieg").
Offen bleibt der **Kohorten-Nachzug** (3ahwii): alte „ohne Node"-Kopie ersetzen.

## Completed (2026-10-05)

- [x] Lesson-Infrastruktur: `assets/` (loader.js, theme.js, lesson.css, quiz.js, site.js, github-pages-link.js) + `serve.sh`
- [x] GitHub Pages: Workflow `.github/workflows/pages.yml`, `build_type=workflow`, `index.html` als Lektions-Navigator, Pages-Link oben in `README.md`
- [x] Prepared Lesson **KM6-01** (`prisma-werkzeuge`): CLI, `prisma7.config.ts`, `migrate`-Optionen, `db pull`/`db push`, Studio; Praxis mit **TypeScript-Client** (Node + tsx); Quiz „Setup & Tooling" (8)
- [x] Prepared Lesson **KM6-02** (`prisma-query-api`): alle CRUD-Operationen, `where`/`select`/`include`, Aggregate, `$transaction`, `$queryRaw`; Praxis mit **9 grünen Tests**; Quiz „Query Language" (10)
- [x] Befunde dokumentiert: Prisma 7 + SQLite **inkompatibel mit Deno** → Node + `prisma-client` (TS); Studio braucht `file://./dev.db`; Issue **#6** geschlossen

## Completed (2026-09-29)

- [x] Prepared Lesson `unterricht/KM5-01-nodejs-prisma/` (`lesson.html`, `hausaufgabe.md`,
      Tages-README-Vorlage, `praxis/`-Scaffold Node+Prisma-7) — real verifiziert (seed/run/test grün)
- [x] ORM-ADR: Prisma vorerst beibehalten, Prisma-/DB-Toolchain auf Node.js (SQLite+better-sqlite3),
      kein Drizzle; `AGENTS.md`-Runtime (Deno) unverändert
- [x] lehrplan-Skill: Konformitäts-Check konform; Novellen-Check live (NOR-Kopf, keine neue Novelle);
      `lehrplan/METADATA.md`-Belegzeile 2026-09-29; Issue **#3** geschlossen; HANDOFF abgehakt

## Completed (2026-09-14)

- [x] Kohorten-Ordner `3ahwii/`: Hub `README.md` + `semesterplan-ws.md` (Vollkopie des Gerüsts + Sondereinheit vor UE 1)
- [x] Agentic-Coding-Sondereinheit `3ahwii/2026-09-15_agentic-coding-einstieg/` (INFI-angepasst) + `3ahwii/windows-debloat.md`
- [x] veraltete Pfad-Referenzen in `unterricht/HWII-INFI/jg3-semesterplan-{ws,ss}.md` korrigiert (keine inhaltliche Änderung)
- [x] `docs/ai/` (ARCHITECTURE/DECISIONS-ADR/STATE/HANDOFF) + `README.md`-Strukturzeile
- [x] lehrplan-Skill Aufgabe A (Konformitäts-Check) + Aufgabe 2 (Erläuterungs-Ebene) —
      `LEHRPLAN.md` (8 Überblicke, 46 Erläuterungen) + `2HWII`/`3HWII`/`4HWII`/`5HWII`
- [x] 11 beim Retrofit gebrochene Relativ-Links repariert (Link-Check = 0)
- [x] `HWII_INFI.pdf`-Duplikat in `GRG-SWP/lehrplan/swp-hwii/` entfernt (byte-identisch);
      SWP-`METADATA.md`/`HANDOFF.md` aktualisiert
- [x] `lehrplan-annotator`-Subagent registriert (`~/.config/opencode/agents`-Symlink),
      auf Kopiervorlage getestet, für die Annotations-Läufe eingesetzt; `HANDOFF.md` fortgeschrieben
- [x] optionale „Für Eifrige"-Erweiterung (Issue **#4**): `opencode-server-windows.md` (Dienst
      NSSM/Task Scheduler, Passwort, Aliase `oc`/`ocr` mit `--dir`) + `opencode-telegram-bot.md`
      (Anleitung), verlinkt aus dem UE-README

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

- [ ] **Kohorten-Nachzug 3ahwii:** Prepared Lesson `unterricht/KM5-01-nodejs-prisma/` in
      `3ahwii/2026-09-29_rep-ohne-node/` übernehmen (Ordner/Präambel „ohne Node" ersetzen) und
      Stack-Zeilen in `3ahwii/README.md`/`MISSION.md` auf „Prisma via Node" angleichen
- [x] lehrplan-Skill regulär in INFI anwenden / Novellen-Check — Issue **#3** (erledigt 2026-09-29)
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
