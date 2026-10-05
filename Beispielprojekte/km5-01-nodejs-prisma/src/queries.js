// src/queries.js — die 5 Diagnose-Queries aus UE 1, einmal als Prisma-API.
// Vergleich in der Lesson: erst SQL (seed-musik-mini.sql), dann dieselbe Frage über Prisma.
import { prisma } from "./prisma.js";

// 1. Top-Künstler nach Track-Anzahl (SQL: JOIN + GROUP BY + ORDER BY + LIMIT).
export async function topKuenstler(limit = 5) {
  const gruppen = await prisma.song.groupBy({
    by: ["kuenstlerId"],
    _count: { _all: true },
    orderBy: { _count: { kuenstlerId: "desc" } },
    take: limit,
  });
  const namen = await prisma.kuenstler.findMany({
    where: { id: { in: gruppen.map((g) => g.kuenstlerId) } },
    select: { id: true, name: true },
  });
  const byId = new Map(namen.map((k) => [k.id, k.name]));
  return gruppen.map((g) => ({ name: byId.get(g.kuenstlerId), tracks: g._count._all }));
}

// 2. Künstlerpaare desselben Labels — SQL: Self-JOIN (x.id < y.id).
//    Prisma hat KEIN Self-JOIN; wir zeigen den rohen SQL-Weg über $queryRaw.
export async function labelPaare() {
  return prisma.$queryRaw`
    SELECT x.name AS a, y.name AS b, l.name AS label
    FROM Kuenstler x
    JOIN Kuenstler y ON x.labelId = y.labelId AND x.id < y.id
    JOIN Label l ON l.id = x.labelId
  `;
}

// 3. Labels mit mehr als einem Künstler (SQL: JOIN + GROUP BY + HAVING).
export async function volleLabels() {
  const labels = await prisma.label.findMany({
    include: { _count: { select: { kuenstler: true } } },
  });
  return labels
    .filter((l) => l._count.kuenstler > 1)
    .map((l) => ({ name: l.name, anzahl: l._count.kuenstler }));
}

// 4. COUNT(*) vs. COUNT(spalte): NULL-Werte zählen nicht mit.
export async function kuenstlerMitUndOhneLabel() {
  const alle = await prisma.kuenstler.count();
  const mitLabel = await prisma.kuenstler.count({ where: { labelId: { not: null } } });
  return { alle, mitLabel };
}

// 5. WHERE + HAVING kombiniert: Künstler mit mindestens 2 Songs über 200 s.
export async function langeSongs(minSek = 200, minAnzahl = 2) {
  const gruppen = await prisma.song.groupBy({
    by: ["kuenstlerId"],
    where: { dauerSek: { gt: minSek } },
    _count: { _all: true },
    having: { kuenstlerId: { _count: { gte: minAnzahl } } },
  });
  const namen = await prisma.kuenstler.findMany({
    where: { id: { in: gruppen.map((g) => g.kuenstlerId) } },
    select: { id: true, name: true },
  });
  const byId = new Map(namen.map((k) => [k.id, k.name]));
  return gruppen.map((g) => ({ name: byId.get(g.kuenstlerId), anzahl: g._count._all }));
}

async function main() {
  console.log("1) Top-Künstler:          ", await topKuenstler());
  console.log("2) Label-Paare:           ", await labelPaare());
  console.log("3) Labels mit >1 Künstler:", await volleLabels());
  console.log("4) COUNT(*) vs. mit Label:", await kuenstlerMitUndOhneLabel());
  console.log("5) Künstler mit 2+ langen:", await langeSongs());
}

// Nur ausführen, wenn direkt gestartet (nicht beim Import im Test).
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
