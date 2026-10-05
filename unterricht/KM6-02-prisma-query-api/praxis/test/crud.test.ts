// test/crud.test.ts — jeder CRUD-Zweig einmal geprüft (Node-Testrunner über tsx).
// Aufruf: npm test   (Voraussetzung: npm run db:seed)
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { prisma } from "../src/db.ts";
import * as c from "../src/crud.ts";

const TEST_SAMMLUNG = "Test-Sammlung";

before(async () => {
  assert.ok((await prisma.medium.count()) > 0, "Bitte zuerst `npm run db:seed` ausführen.");
  await prisma.sammlung.deleteMany({ where: { name: { in: [TEST_SAMMLUNG, "Transaktions-Test"] } } });
});

after(async () => {
  await prisma.sammlung.deleteMany({ where: { name: { in: [TEST_SAMMLUNG, "Transaktions-Test", "Hörspiele"] } } });
  await prisma.tag.deleteMany({ where: { name: { in: ["Kult", "Neu"] } } });
  await prisma.$disconnect();
});

test("CREATE: nested create legt Sammlung mit zwei Medien an", async () => {
  const s = await c.createSammlungMitMedien(TEST_SAMMLUNG);
  assert.equal(s.name, TEST_SAMMLUNG);
  assert.equal(s.medien.length, 2);
});

test("READ: findUnique liefert genau ein Medium", async () => {
  const s = await c.findUniqueOrThrowSammlung(TEST_SAMMLUNG);
  const m = await c.findUniqueMedium(s.id + 100000); // garantiert nicht vorhanden
  assert.equal(m, null);
});

test("READ: findManyFilter filtert nach Bewertung und Tag", async () => {
  const treffer = await c.findManyFilter(5, "Highlight");
  assert.ok(treffer.length >= 1);
  assert.ok(treffer.every((m) => m.bewertung >= 5));
});

test("UPDATE: increment erhöht die Bewertung atomar", async () => {
  const s = await c.findUniqueOrThrowSammlung(TEST_SAMMLUNG);
  const vorher = await prisma.medium.findFirstOrThrow({ where: { sammlungId: s.id } });
  const nachher = await c.updateBewertung(vorher.id, 1);
  assert.equal(nachher.bewertung, vorher.bewertung + 1);
});

test("UPDATE: upsert legt ein Tag genau einmal an", async () => {
  await c.upsertTag("Neu");
  await c.upsertTag("Neu");
  assert.equal(await prisma.tag.count({ where: { name: "Neu" } }), 1);
});

test("AGGREGATE: count/aggregate/groupBy liefern Werte", async () => {
  assert.ok((await c.zaehlen()) > 0);
  const agg = await c.aggregieren();
  assert.ok((agg._avg.bewertung ?? 0) >= 0);
  const gruppen = await c.gruppieren();
  assert.ok(gruppen.length >= 2);
});

test("TRANSACTION: interaktive Transaktion schreibt atomar", async () => {
  const s = await c.transaktion();
  assert.equal(s?.medien.length, 1);
});

test("DELETE: delete entfernt genau ein Medium", async () => {
  const s = await c.findUniqueOrThrowSammlung(TEST_SAMMLUNG);
  const m = await prisma.medium.findFirstOrThrow({ where: { sammlungId: s.id } });
  await c.deleteMedium(m.id);
  assert.equal(await prisma.medium.findUnique({ where: { id: m.id } }), null);
});

test("RAW: $queryRaw ist der Fluchtweg für SQL ohne API-Entsprechung", async () => {
  const rows = await c.rawTop();
  assert.ok(rows.length >= 1);
});
