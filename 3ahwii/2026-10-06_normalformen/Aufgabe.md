# Aufgabe 2026-10-06 — Normalformen 1NF–3NF (mit Prisma)

Die vollständige Aufgabe steht in
[`unterricht/KM5-02-normalisierung/hausaufgabe.md`](../../unterricht/KM5-02-normalisierung/hausaufgabe.md)
bzw. am Ende der [Lesson](../../unterricht/KM5-02-normalisierung/lesson.html). Kurzfassung:

1. **Vorhersage:** Welche Spalte von `bestellung_denorm` verletzt welche
   Normalform — und warum?
2. **Zerlegen bis 3NF:** schrittweise normalisieren, jede Stufe mit einem
   Abhängigkeitspfeil begründen.
3. **Zwei eigene Tabellen:** zwei Quiz-Tabellen der Lesson zerlegen
   (SQL-`CREATE`s + je 3 Beispielzeilen).
4. **Demo:** `deno task demo` im Beispielprojekt
   `Beispielprojekte/km5-02-normalisierung/` laufen lassen (Screenshot).

**Zusatz aus der Stunde:** die Umsetzung erfolgt **mit Prisma** — die
normalisierten Tabellen als Prisma-Schema modellieren (Migrate statt
freier SQL-`CREATE`s), wo sinnvoll Query statt Roh-SQL.
