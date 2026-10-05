# Node.js + Prisma 7 (SQLite) — UE „Rep &amp; ORM-Einstieg"

Lesson: `lesson.html` im selben Ordner — Node/Prisma-7-Einstieg für die DB-Werkzeugkette
(Schema, Migration, Driver Adapter) und die fünf Diagnose-Queries als Prisma-API.
- Erklärung · Vergleichstabelle SQL↔Prisma · 8 Quizze · Aufgabe am Lesson-Ende
- Lauffähiges Referenzprojekt: [`Beispielprojekte/km5-01-nodejs-prisma/`](../../Beispielprojekte/km5-01-nodejs-prisma/) (`npm run run`, `npm test`)

## Aufgabe

1. Vorhersage zu Query 1 / `COUNT(*)` vs. `COUNT(labelId)` — vor dem Ausführen notieren.
2. Setup wiederholen; `npm run run` + `npm test` grün (Screenshot).
3. Model `Playlist` (N:M zu `Song`) + Query „Songs pro Playlist".
4. Reflexion (5–6 Sätze): Prisma vs. SQL, `$queryRaw`-Fluchtweg.

Abgabe wie im Klassen-Repo vereinbart (Projekt-Commit + Markdown).

## Housekeeping

- Lehrplan: `lehrplan/infi-hwii/3HWII/3HWII.lehrplan.md` (KM5) · `lehrplan/infi-hwii/LEHRPLAN.md`
- KM-Bezug: KM5 („komplexe Abfragen"; Auffrischung KM3/KM4) → UE 1b/Rep; ORM-Anbahnung Richtung KM6 (Prisma)
- Runtime: **Node.js LTS + npm** nur für die Prisma-/DB-Werkzeugkette; allgemeiner Code bleibt Deno/TypeScript
- Übernahme: Prepared Lesson unter `unterricht/KM5-01-nodejs-prisma/`; Klassen-Kopie per Hand nach `3ahwii/` (Asset-Pfad `../../3ahwii/assets/` → `../assets/` anpassen)
