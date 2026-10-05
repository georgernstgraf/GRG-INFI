// src/crud.ts — die Prisma-Client-Query-API: alle CRUD-Operationen.
// Domäne: Mediensammlung (Sammlung 1:n Medium, Medium n:m Tag).
import { prisma } from "./db.ts";

/* ===================== CREATE ===================== */

// Ein Datensatz + verschachtelte Kinder in EINEM Aufruf (nested create).
export async function createSammlungMitMedien(name: string) {
  return prisma.sammlung.create({
    data: {
      name,
      medien: {
        create: [
          {
            titel: "Die drei ??? — Folge 1",
            jahr: 1979,
            bewertung: 5,
            tags: { connectOrCreate: [{ where: { name: "Kult" }, create: { name: "Kult" } }] },
          },
          { titel: "Hörspiel 2", jahr: 1981, bewertung: 3 },
        ],
      },
    },
    include: { medien: true },
  });
}

// Viele Datensätze in einem Rutsch (kein RETURNING — gibt nur die Anzahl).
export async function createManyMedien(sammlungName: string, titel: string[]) {
  const sammlung = await prisma.sammlung.findUniqueOrThrow({ where: { name: sammlungName } });
  return prisma.medium.createMany({
    data: titel.map((t, i) => ({ titel: t, jahr: 2000 + i, bewertung: i % 6, sammlungId: sammlung.id })),
  });
}

/* ===================== READ ===================== */

// Genau ein Treffer über ein eindeutiges Feld — sonst null.
export function findUniqueMedium(id: number) {
  return prisma.medium.findUnique({ where: { id } });
}

// Wie findUnique, wirft aber statt null (PrismaClientKnownRequestError P2025).
export function findUniqueOrThrowSammlung(name: string) {
  return prisma.sammlung.findUniqueOrThrow({ where: { name } });
}

// Erster passender Treffer (kein Unique nötig), hier mit Sortierung.
export function findFirstSeit(jahr: number) {
  return prisma.medium.findFirst({ where: { jahr: { gte: jahr } }, orderBy: { jahr: "asc" } });
}

// Liste mit Filter, Sortierung und Limit.
export function findManyFilter(minBewertung: number, tag?: string) {
  return prisma.medium.findMany({
    where: {
      bewertung: { gte: minBewertung },
      ...(tag ? { tags: { some: { name: tag } } } : {}),
    },
    orderBy: [{ bewertung: "desc" }, { titel: "asc" }],
    take: 5,
  });
}

// ODER-Verknüpfung von Bedingungen.
export function findManyOder() {
  return prisma.medium.findMany({
    where: { OR: [{ jahr: { lt: 1960 } }, { titel: { contains: "Never" } }] },
    orderBy: { titel: "asc" },
  });
}

// select = Projektion (nur diese Felder), inkl. Relation als Teilprojektion.
export function findManySelect() {
  return prisma.medium.findMany({
    where: { tags: { some: { name: "Highlight" } } },
    select: { titel: true, jahr: true, sammlung: { select: { name: true } } },
  });
}

// include = ganze Relationen mitladen (vs. select).
export function findManyInclude() {
  return prisma.sammlung.findMany({
    include: { medien: { include: { tags: true } } },
    orderBy: { name: "asc" },
  });
}

// Seitennavigation mit skip/take.
export function paginieren(skip: number, take: number) {
  return prisma.medium.findMany({ orderBy: { id: "asc" }, skip, take });
}

/* ===================== UPDATE ===================== */

// Teil-Update; atomic increment verhindert Race-Conditions.
export function updateBewertung(id: number, delta: number) {
  return prisma.medium.update({ where: { id }, data: { bewertung: { increment: delta } } });
}

// Mehrere Datensätze auf einmal ändern (gibt die Anzahl zurück).
export function updateManyOhneJahr() {
  return prisma.medium.updateMany({ where: { jahr: null }, data: { jahr: 2000 } });
}

// Update-or-Create in einem Aufruf (idempotentes Anlegen).
export function upsertTag(name: string) {
  return prisma.tag.upsert({ where: { name }, update: {}, create: { name } });
}

/* ===================== DELETE ===================== */

export function deleteMedium(id: number) {
  return prisma.medium.delete({ where: { id } });
}

export function deleteManyOhneTags() {
  return prisma.medium.deleteMany({ where: { tags: { none: {} } } });
}

/* ===================== AGGREGATE ===================== */

export function zaehlen() {
  return prisma.medium.count();
}

export function aggregieren() {
  return prisma.medium.aggregate({
    _avg: { bewertung: true },
    _max: { jahr: true },
    _count: { _all: true },
  });
}

// Gruppieren + Aggregat (ersetzt GROUP BY).
export function gruppieren() {
  return prisma.medium.groupBy({
    by: ["sammlungId"],
    _avg: { bewertung: true },
    _count: { _all: true },
    orderBy: { sammlungId: "asc" },
  });
}

/* ===================== TRANSAKTION ===================== */

// Interaktive Transaktion: alles oder nichts (Anschluss an ACID aus KM5).
export function transaktion() {
  return prisma.$transaction(async (tx) => {
    const sammlung = await tx.sammlung.create({ data: { name: "Transaktions-Test" } });
    await tx.medium.create({ data: { titel: "Atomar", jahr: 2024, sammlungId: sammlung.id } });
    return tx.sammlung.findUnique({
      where: { id: sammlung.id },
      include: { medien: true },
    });
  });
}

/* ===================== RAW-SQL-FLUTWEG ===================== */

// Für Fälle ohne API-Entsprechung: rohes SQL, typisiert zurückgegeben.
export function rawTop() {
  return prisma.$queryRaw<{ name: string; anzahl: bigint }[]>`
    SELECT s.name AS name, COUNT(m.id) AS anzahl
    FROM Sammlung s LEFT JOIN Medium m ON m.sammlungId = s.id
    GROUP BY s.id
    ORDER BY anzahl DESC`;
}
