// test/schema.test.ts — Node-Testrunner über tsx.
// Aufruf: npm test   (Voraussetzung: npm run db:seed)
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { prisma } from "../src/db.ts";

before(async () => {
  assert.ok((await prisma.medium.count()) > 0, "Bitte zuerst `npm run db:seed` ausführen.");
});

after(async () => {
  await prisma.$disconnect();
});

test("Drei Sammlungen wurden angelegt", async () => {
  assert.equal(await prisma.sammlung.count(), 3);
});

test("Medien sind über die implizite n:m-Tabelle mit Tags verknüpft", async () => {
  const mitTags = await prisma.medium.count({ where: { tags: { some: {} } } });
  assert.equal(mitTags, 4); // Abbey Road hat (noch) kein Tag
});

test("Relation inklusive zählen: Jazz hat zwei Medien (include)", async () => {
  const jazz = await prisma.sammlung.findUnique({
    where: { name: "Jazz" },
    include: { _count: { select: { medien: true } } },
  });
  assert.equal(jazz?._count.medien, 2);
});
