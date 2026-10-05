# Praxis — Unterabfragen I (Musik-Streaming-DB)

Lauffähiges Referenzprojekt zu den Prepared Lessons **KM5-03** (Unterabfragen I) und
**KM5-04** (Wiederholung & Diagnose). Mini-Ausschnitt der Musik-Streaming-DB mit den
vier Subquery-Formen der Lesson.

## Voraussetzungen

Nur **Deno** (mit `node:sqlite`). Kein Node, kein `npm`, keine `node_modules`
(`"nodeModulesDir": "none"`). Die DB wird **in-memory** aus dem Seed aufgebaut.

## Ausführen

```bash
deno task demo     # die vier Subquery-Formen (Skalar- WHERE/SELECT, Tabelle, Zeile)
deno task test     # 4 Deno-Tests gegen den Seed
```

## Dateien

| Datei | Zweck |
|-------|-------|
| `seed-musik-mini.sql` | Mini-Musik-DB: `label`, `kuenstler` (1× ohne Label), `song` |
| `db.ts` | `openDb()` — baut die In-Memory-DB aus dem Seed |
| `queries.ts` | die vier Subquery-Formen — `deno task demo` |
| `queries_test.ts` | 4 Deno-Tests — `deno task test` |
| `deno.json` | `"nodeModulesDir": "none"`; Tasks `demo`/`test` |

## Die vier Formen

| Form | Ort | Query-Idee |
|------|-----|-----------|
| **Skalar** | `WHERE` | Songs über dem Durchschnitt: `dauer_sek > (SELECT AVG(dauer_sek) …)` |
| **Skalar** | `SELECT` | Durchschnitt als Vergleichsspalte pro Zeile |
| **Tabelle** | `FROM` | erst gruppieren, dann filtern — `FROM (SELECT …) AS t` |
| **Zeile** | `WHERE` | Tupelvergleich `(kuenstler_id, dauer_sek) = (SELECT …)` |
