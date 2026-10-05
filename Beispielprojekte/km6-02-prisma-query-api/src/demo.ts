// src/demo.ts — führt jede CRUD-Operation einmal aus (Sehnsuchtsbild für die Lesson).
// Aufruf: npm run demo   (Voraussetzung: npm run db:seed)
import { prisma } from "./db.ts";
import * as c from "./crud.ts";

async function main() {
  console.log("CREATE  nested:      ", await c.createSammlungMitMedien("Hörspiele"));
  console.log("CREATE  createMany:  ", await c.createManyMedien("Hörspiele", ["Folge 3", "Folge 4"]));

  const top = await c.findManyFilter(4);
  console.log("READ    where+sort:  ", top.map((m) => `${m.titel} (${m.bewertung})`));
  console.log("READ    OR:          ", (await c.findManyOder()).map((m) => m.titel));
  console.log("READ    select:      ", await c.findManySelect());
  console.log("READ    paginate:    ", (await c.paginieren(1, 2)).map((m) => m.titel));

  const erstes = top[0];
  console.log("UPDATE  increment:   ", await c.updateBewertung(erstes.id, 1));
  console.log("UPDATE  upsert Tag:  ", await c.upsertTag("Neu"));

  console.log("COUNT:               ", await c.zaehlen());
  console.log("AGGREGATE:           ", await c.aggregieren());
  console.log("GROUPBY:             ", await c.gruppieren());
  console.log("TRANSACTION:         ", await c.transaktion());
  console.log("RAW $queryRaw:       ", await c.rawTop());
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
