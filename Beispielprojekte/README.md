# Beispielprojekte

Lauffähige Referenzprojekte zu den Prepared Lessons. Sie liegen **außerhalb**
von `unterricht/`: Der Unterrichtsordner enthält ausschließlich
Unterrichtsmaterial (HTML/Markdown + `assets/`) und **keinen lauffähigen Code**
— die Beispielprojekte sind ausgelagert (Skill `create-lesson`, Issue #8).

| Projekt | Lesson | Inhalt | Stack |
|---------|--------|--------|-------|
| [`km5-01-nodejs-prisma/`](km5-01-nodejs-prisma/) | KM5-01 | Node/Prisma-7-Einstieg, Driver Adapter, 5 Diagnose-Queries | Node + Prisma 7 + SQLite |
| [`km5-02-normalisierung/`](km5-02-normalisierung/) | KM5-02 | Anomalie-Demo 1NF/2NF/3NF + Seed aller Lesson-Tabellen | Deno + `node:sqlite` (kein Node) |
| [`km6-01-prisma-werkzeuge/`](km6-01-prisma-werkzeuge/) | KM6-01 | CLI, Migrationen, Studio, `db pull`/`db push` | Node + Prisma 7 (TS-Client) + tsx |
| [`km6-02-prisma-query-api/`](km6-02-prisma-query-api/) | KM6-02 | CRUD/Query API, Aggregate, `$transaction`, `$queryRaw` | Node + Prisma 7 (TS-Client) + tsx |

Jedes Projekt ist eigenständig lauffähig — die Einrichtung (`npm install`,
Migrationen, Testbefehl) steht jeweils in der `README.md` im Projektordner.
