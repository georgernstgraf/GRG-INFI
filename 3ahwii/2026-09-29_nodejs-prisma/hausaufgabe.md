# Aufgabe — KM5-01 (Node.js + Prisma 7)

1. **Vorhersage** (vor dem Ausführen): erwartetes Ergebnis von Query 1 (Top-Künstler);
   begründe, warum `COUNT(*)` = 4, `COUNT(labelId)` aber 3 ergibt.
2. **Setup wiederholen:** `npm i prisma@7 @prisma/client@7 @prisma/adapter-better-sqlite3@7 dotenv`,
   `npm approve-scripts --all`, `cp .env.example .env`, `npm run db:migrate`, `npm run db:seed`;
   danach `npm run run` und `npm test` grün bekommen (Screenshot der 5 Konsolen-Zeilen).
3. **Erweitern:** Model `Playlist` mit N:M zu `Song` ergänzen, migrieren und **eine** Prisma-Query
   schreiben, die pro Playlist die Song-Anzahl liefert.
4. **Reflexion (5–6 Sätze):** Wo war Prisma kürzer als SQL, wo musstest du auf `$queryRaw`
   ausweichen? Bleibst du vorerst bei Prisma?
