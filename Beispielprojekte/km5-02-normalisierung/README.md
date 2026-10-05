# Praxis — Normalisierung 1NF–3NF (SQLite)

Lauffähiges Referenzprojekt zur Prepared Lesson **KM5-02** (Normalformen).
Zwei Demonstrationen der drei Anomalien plus ein Seed mit allen Beispieltabellen
der Lesson — je denormalisiert und normalisiert.

## Voraussetzungen

Nur **Deno** (mit `node:sqlite`) und optional `sqlite3`-CLI. Kein Node, kein `npm`,
keine `node_modules` (`"nodeModulesDir": "none"`).

## Ausführen

```bash
deno task demo     # zeigt 1NF-, 2NF- und 3NF-Anomalie (inkl. Fix) auf der Konsole
deno task test     # 4 Deno-Tests: Anomalien sichtbar, Fixes eindeutig
```

## Seed laden (Alternative zur Demo, mit echter Datei)

```bash
sqlite3 normalisierung.db < seed-normalisierung.sql
sqlite3 normalisierung.db "SELECT * FROM bestellung_denorm;"
```

## Dateien

| Datei | Zweck |
|-------|-------|
| `seed-normalisierung.sql` | Alle Lesson-Tabellen (1NF/2NF/3NF), denormalisiert **und** normalisiert |
| `demo.ts` | Anomalie-Demo in einer In-Memory-DB — `deno task demo` |
| `demo_test.ts` | 4 Deno-Tests — `deno task test` |
| `deno.json` | `"nodeModulesDir": "none"`; Tasks `demo`/`test` |

## Was die Demo zeigt

| Stufe | Denormalisiert | Nach dem Fix |
|-------|----------------|--------------|
| **1NF** | `hobbys = 'Lesen, Schwimmen'` — `WHERE hobbys = 'Schwimmen'` findet nichts | eine Zeile pro Wert → Treffer |
| **2NF** | `song_titel` hängt nur an `song_id` → zwei widersprüchliche Titel | Titel in `song`, genau einmal |
| **3NF** | `ort` hängt an `plz` → zwei widersprüchliche Orte | `plz(plz, ort)`, genau einmal |
