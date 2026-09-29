// test/queries.test.js — node:test (eingebaut, keine Zusatz-Abhängigkeit).
// Voraussetzung: npm run db:seed (nutzt dev.db).
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { prisma } from "../src/prisma.js";
import {
  kuenstlerMitUndOhneLabel,
  labelPaare,
  langeSongs,
  topKuenstler,
  volleLabels,
} from "../src/queries.js";

before(async () => {
  assert.ok((await prisma.song.count()) > 0, "Bitte zuerst `npm run db:seed` ausführen.");
});

after(async () => {
  await prisma.$disconnect();
});

test("Top-Künstler liefert absteigend nach Track-Anzahl", async () => {
  const top = await topKuenstler();
  assert.equal(top[0].name, "Nova");
  assert.equal(top[0].tracks, 3);
});

test("COUNT(*) zählt auch Künstler ohne Label", async () => {
  const { alle, mitLabel } = await kuenstlerMitUndOhneLabel();
  assert.equal(alle, 4);
  assert.equal(mitLabel, 3);
});

test("Volle Labels: genau Ohrwurm Records hat 2 Künstler", async () => {
  const labels = await volleLabels();
  assert.deepEqual(labels, [{ name: "Ohrwurm Records", anzahl: 2 }]);
});

test("Label-Paare (Self-JOIN) findet Nova/Pixel", async () => {
  const paare = await labelPaare();
  assert.equal(paare.length, 1);
  assert.equal(paare[0].label, "Ohrwurm Records");
});

test("WHERE+HAVING: Nova und Pixel haben je 2+ Songs über 200 s", async () => {
  const lang = await langeSongs();
  assert.deepEqual(lang.map((l) => l.name).sort(), ["Nova", "Pixel"]);
});
