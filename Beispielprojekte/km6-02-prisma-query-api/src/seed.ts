// src/seed.ts — Mediensammlung befüllen (idempotent: erst leeren, dann neu).
import { prisma } from "./db.ts";

async function main() {
  // Reihenfolge: Kinder zuerst (Fremdschlüssel).
  await prisma.medium.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.sammlung.deleteMany();

  await prisma.sammlung.createMany({
    data: [{ name: "Klassik" }, { name: "Jazz" }, { name: "Rock" }],
  });
  const jazz = await prisma.sammlung.findUniqueOrThrow({ where: { name: "Jazz" } });
  const klassik = await prisma.sammlung.findUniqueOrThrow({ where: { name: "Klassik" } });
  const rock = await prisma.sammlung.findUniqueOrThrow({ where: { name: "Rock" } });

  // Tags einmal anlegen; die n:m-Verknüpfung passiert über connect.
  await prisma.tag.createMany({
    data: [{ name: "Highlight" }, { name: "Vinyl" }, { name: "Geschenk" }],
  });

  await prisma.medium.create({
    data: {
      titel: "Kind of Blue",
      jahr: 1959,
      bewertung: 5,
      sammlungId: jazz.id,
      tags: { connect: [{ name: "Highlight" }, { name: "Vinyl" }] },
    },
  });
  await prisma.medium.create({
    data: {
      titel: "Blue Train",
      jahr: 1957,
      bewertung: 4,
      sammlungId: jazz.id,
      tags: { connect: [{ name: "Vinyl" }] },
    },
  });
  await prisma.medium.create({
    data: {
      titel: "Die Zauberflöte",
      jahr: 1791,
      bewertung: 3,
      sammlungId: klassik.id,
      tags: { connect: [{ name: "Highlight" }] },
    },
  });
  await prisma.medium.create({
    data: {
      titel: "Nevermind",
      jahr: 1991,
      bewertung: 5,
      sammlungId: rock.id,
      tags: { connect: [{ name: "Highlight" }, { name: "Geschenk" }] },
    },
  });
  await prisma.medium.create({
    data: { titel: "Abbey Road", jahr: 1969, bewertung: 2, sammlungId: rock.id },
  });

  const medien = await prisma.medium.count();
  const sammlungen = await prisma.sammlung.count();
  const tags = await prisma.tag.count();
  console.log(`Seed fertig: ${sammlungen} Sammlungen, ${medien} Medien, ${tags} Tags.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
