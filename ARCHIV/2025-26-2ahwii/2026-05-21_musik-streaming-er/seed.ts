import { PrismaClient } from "model";
const prisma = new PrismaClient();

await prisma.nutzer.create({
  data: {
    id: 1,
    benutzername: "MaxMustermann",
    email: "muster@max.com",
    premium: true,
    comment: "Dies ist ein Kommentar zu Max Mustermann.",
  },
});
