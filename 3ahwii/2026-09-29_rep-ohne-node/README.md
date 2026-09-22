# UE 2026-09-29 — Rep ohne Node + ORM-Lektüre (X-Gruppe)

**Fach:** INFI · **Klasse:** 3AHWII X · **Zeit:** 1 DS (2 h) ·
**Voraussetzung:** UE 1 (22.09.) + [`lessons/0001-wiederholung-diagnose.html`](../lessons/0001-wiederholung-diagnose.html)
(Theorie + Diagnose-Quiz, bereits im Repo).

Diese Stunde repariert die UE-1-Krise vom 22.09.: Das Prisma-7-Scaffold in
[`2026-09-22_normalformen/`](../2026-09-22_normalformen/) (Adapter-Pflicht,
natives `better-sqlite3`, npm-`latest` auf 8.0.0-RC) bleibt bewusst
**unberührt** — wir arbeiten heute komplett ohne Node, ohne `npm:`, ohne
`node_modules`, nur Deno + `node:sqlite` + `sqlite3`-CLI.

## Ablauf (100 min)

| Min | Block | Material |
|-----|-------|----------|
| 0–15 | Retro: Was ging am 22.09. schief? (npm/Adapter/RC zeigen, nicht fixen) | `2026-09-22_normalformen/deno.json` als Negativbeispiel |
| 15–45 | Gemeinsames Lesen am Beamer (3 Abschnitte, Leitfragen mündlich) | `leseauftrag.md` (Fragen 1–5) |
| 45–85 | Coden: Seed laden, `main.ts` laufen lassen, 5 Queries je in `sqlite3` nachvollziehen | `seed-musik-mini.sql`, `main.ts` |
| 85–100 | Ausblick: ORM-Entscheidung vertagt — erst SQL-Handwerk (UE 3), Drizzle-Evaluierung später | `leseauftrag.md` Frage 6 als HÜ |

## Dateien

| Datei | Zweck |
|-------|-------|
| `seed-musik-mini.sql` | Mini-Musik-DB (Label/Künstler/Song, 1 Künstler ohne Label für COUNT-Demo) — `sqlite3 musik-mini.db < seed-musik-mini.sql` |
| `main.ts` | 5 Diagnose-Queries aus Lesson 0001 §4, lauffähig — `deno task run` |
| `main_test.ts` | 3 Deno-Tests gegen Seed — erst `sqlite3 test-mini.db < seed-musik-mini.sql`, dann `deno task test` |
| `deno.json` | `"nodeModulesDir": "none"` — ohne Node/npm-Imports beweisbar |
| `leseauftrag.md` | dev.to-Artikel gemeinsam lesen + 6 Fragen (Frage 6 = HÜ) |

## HÜ bis 06.10.

1. Die 5 Auffrischungs-Queries aus Lesson 0001 §4 als `.sql`-Datei (je ein Kommentar, was sie beantwortet).
2. Leseauftrag Frage 6 schriftlich (5–6 Sätze).

## KM-Bezug

UE 1 (KM5-Anker + KM3/KM4-Auffrischung): Self-JOIN, `COUNT(*)` vs.
`COUNT(col)`, WHERE vs. HAVING. Schließt außerdem den RESOURCES-Gap
„Musik-Seed" teilweise (Mini-Ausschnitt, versioniert).
