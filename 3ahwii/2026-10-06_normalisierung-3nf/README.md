# UE 2026-10-06 — Dritte Normalform (3NF), Fehlersuche (X-Gruppe)

**Fach:** INFI · **Klasse:** 3AHWII X · **Zeit:** 1 DS (2 h) · **Voraussetzung:** Rep
ohne Node (29.09.: SELECT/JOIN/GROUP BY fit, `node:sqlite`-Muster bekannt).

## Ablauf (100 min)

| Min | Block | Material |
|-----|-------|----------|
| 0–10 | Anomalien-Aufwärmer (Bestelltabelle, Einfüge/Änderungs/Lösch-Anomalie) | `lesson-3nf.html` §1 |
| 10–20 | 1NF/2NF-Rep + Eselsbrücke („ganzer Schlüssel, nichts als der Schlüssel") | §2, Tafel |
| 20–35 | 3NF-Kern: transitive Kette `A → B → C`, Zerlegungsregel | §3 + Live: `deno task demo` |
| 35–70 | Fehlersuche Runde 1+2 (Quiz 1–6, Beamer, raten → auflösen) | §4–5, je Quiz 5 min |
| 70–90 | Trickfälle (Quiz 7–10, bewusst „hält" dabei) + Rezept | §6–7 |
| 90–100 | HÜ erklären, Seed zeigen | §8, `seed-3nf.sql` |

## Dateien

| Datei | Zweck |
|-------|-------|
| `lesson-3nf.html` | Folie/Lesson im SWP-Teach-Stil (`assets/style.css`, `assets/quiz.js` 1:1 aus GRG-SWP übernommen), 11 interaktive Quizze |
| `assets/` | Kopie SWP-Teach-Assets (kein Cross-Repo-Link → Ordner allein lauffähig/beamerfähig) |
| `seed-3nf.sql` | Alle Quiz-Tabellen als SQLite-Skript (`sqlite3 normalisierung-3nf.db < seed-3nf.sql`) |
| `demo.ts` | Anomalie-Demo mit `node:sqlite` (Memory-DB) — `deno task demo` |
| `demo_test.ts` | 2 Deno-Tests — `deno task test` |
| `deno.json` | `"nodeModulesDir": "none"` — garantiert ohne Node/node_modules/npm |

## HÜ bis 13.10.

1. `bestellung_denorm` schriftlich bis 3NF zerlegen (Pfeile begründen).
2. 2 Quiz-Tabellen eigener Wahl zerlegen (CREATEs + je 3 Zeilen).
3. `deno task demo` laufen lassen (Nachweis: Screenshot der 2 Konsolenzeilen).

## KM-Bezug

KM3 „Normalformen" (Lückenschluss aus Jg II) → KM5-Gesamtschau; SWP-Crossover
(Konto/Person) nutzt dieselbe X-Gruppe, kein neuer Stoff in SWP.
