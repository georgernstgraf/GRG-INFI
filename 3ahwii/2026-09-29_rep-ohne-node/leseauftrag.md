# Leseauftrag: Drizzle vs. Prisma 2026 (gemeinsam in der Stunde)

**Quelle:** HK Lee, „Drizzle ORM vs Prisma in 2026: The Honest Comparison
Nobody Is Making", DEV Community, 18.02.2026.
<https://dev.to/pockit_tools/drizzle-orm-vs-prisma-in-2026-the-honest-comparison-nobody-is-making-3n6g>

Wir lesen **gemeinsam am Beamer**, drei Abschnitte (ca. 30 min). Kein Code,
kein Setup — nur verstehen, warum wir gerade ohne ORM arbeiten und wohin
die Reise geht.

## Abschnitt 1: The Philosophical Divide

> Prisma denkt für dich (Modelle + Relationen beschreiben, SQL verstecken),
> Drizzle denkt mit dir (typisiertes SQL schreiben, DB zeigen).

Frage 1: Erkläre in einem Satz, was „abstraction-first" vs. „SQL-first"
für deinen Alltag bedeutet: Wo siehst du SQL noch, wo nicht mehr?

## Abschnitt 2: Schema Definition — Two Worlds

Prisma-Schema (eigene DSL, eigene Datei) vs. Drizzle-Schema (reines
TypeScript, volle IDE-Unterstützung).

Frage 2: Nenne je einen Vorteil: Wann ist eine eigene Schema-Sprache
bequemer, wann ist „alles TypeScript" bequemer?

Frage 3: Was passiert bei Prisma, wenn du das Schema änderst, aber
`prisma generate` vergisst? Warum kann das bei Drizzle nicht passieren?

## Abschnitt 3 (Kern): Real-World Decision Framework + Performance-Kapitel

Zahlen aus dem Artikel (Stand 2026, nach Prisma 7):

- Prisma 7: Rust-Engine → TypeScript/WASM (1,6 MB statt 14 MB),
  Cold Starts bis 9× besser, große Resultate bis 3,4× schneller.
- Trotzdem: Drizzle-Runtime ~12 KB vs. Prisma ~1,6 MB (~130-facher Unterschied).
- Faustregel des Artikels: *„Prisma, wenn das ORM für dich denken soll —
  Drizzle, wenn es mit dir denken soll."*

Frage 4: Warum sind Benchmarks von vor 2026 laut Artikel „wegzuwerfen"?
Was hat sich technisch geändert?

Frage 5: Der Artikel empfiehlt Prisma für SQL-ferne Teams und Drizzle für
SQL-starke Teams mit Edge-/Size-Zielen. Zu welcher Gruppe gehört unsere
Klasse nach dem heutigen Rep-Stand — und was folgt daraus?

## Transferfrage (HÜ, schriftlich, 5–6 Sätze)

Frage 6: Setze den Artikel zu unserer Lage in Beziehung: Deno mit
eingebautem `node:sqlite`, Prisma-7-Adapter-Pflicht (`better-sqlite3`
nativ) und npm-`latest`, das auf einen 8.0.0-RC zeigt. Begründe, warum
wir im Unterricht zuerst reines SQL fahren und ein ORM erst später —
und wenn, eher Drizzle — evaluieren.
