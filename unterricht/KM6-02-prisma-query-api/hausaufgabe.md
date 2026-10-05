# Aufgabe KM6-02 — Prisma Query API

Die vollständige Aufgabe steht am Ende von `lesson.html`. Kurzfassung:

1. **Vorhersage** (vor dem Ausführen): Was liefert
   `groupBy({ by: ["sammlungId"], _avg: { bewertung: true } })` bei fünf Medien in drei
   Sammlungen?
2. **CRUD schreiben:** `findeMedienNachTag(tag)` ergänzen — nur `titel` und `bewertung`,
   nach Bewertung sortiert.
3. **Atomik:** Eine `$transaction`, die ein Medium anlegt und ein Tag verknüpft — absichtlich
   abbrechen und zeigen, dass nichts gespeichert wurde.
4. **Vergleichen:** Dieselbe Frage einmal mit der API und einmal mit `$queryRaw`; Unterschiede
   notieren (Rückgabetyp, Lesbarkeit, BigInt).

Abgabe nach Vorgabe deiner Lehrperson (Projekt-Commit + kurze Markdown-Notiz).
