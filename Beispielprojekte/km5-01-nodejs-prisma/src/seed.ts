// src/seed.ts — Mini-Musik-DB befüllen (idempotent: erst leeren, dann neu).
import { prisma } from "./db.ts";

async function main() {
  // Reihenfolge wegen Fremdschlüsseln: Kinder zuerst.
  await prisma.song.deleteMany();
  await prisma.kuenstler.deleteMany();
  await prisma.label.deleteMany();

  await prisma.label.createMany({
    data: [{ name: "Ohrwurm Records" }, { name: "Indie Nord" }],
  });
  const ohrwurm = await prisma.label.findUniqueOrThrow({ where: { name: "Ohrwurm Records" } });
  const indie = await prisma.label.findUniqueOrThrow({ where: { name: "Indie Nord" } });

  await prisma.kuenstler.createMany({
    data: [
      { name: "Nova", labelId: ohrwurm.id },
      { name: "Pixel", labelId: ohrwurm.id },
      { name: "Solveig", labelId: indie.id },
      { name: "Ohne Label", labelId: null }, // für COUNT(*)-vs-COUNT(col)-Demo
    ],
  });
  const nova = await prisma.kuenstler.findFirstOrThrow({ where: { name: "Nova" } });
  const pixel = await prisma.kuenstler.findFirstOrThrow({ where: { name: "Pixel" } });
  const solveig = await prisma.kuenstler.findFirstOrThrow({ where: { name: "Solveig" } });
  const ohne = await prisma.kuenstler.findFirstOrThrow({ where: { name: "Ohne Label" } });

  await prisma.song.createMany({
    data: [
      { titel: "Nordlicht", dauerSek: 245, kuenstlerId: nova.id },
      { titel: "Glut", dauerSek: 210, kuenstlerId: nova.id },
      { titel: "Funkeln", dauerSek: 198, kuenstlerId: nova.id },
      { titel: "Pixelstaub", dauerSek: 305, kuenstlerId: pixel.id },
      { titel: "Raster", dauerSek: 233, kuenstlerId: pixel.id },
      { titel: "Fjord", dauerSek: 260, kuenstlerId: solveig.id },
      { titel: "Kurz", dauerSek: 120, kuenstlerId: ohne.id },
    ],
  });

  const songs = await prisma.song.count();
  const kuenstler = await prisma.kuenstler.count();
  console.log(`Seed fertig: ${kuenstler} Künstler, ${songs} Songs.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
