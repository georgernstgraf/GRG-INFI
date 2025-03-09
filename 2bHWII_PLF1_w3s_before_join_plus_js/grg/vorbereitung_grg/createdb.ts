import * as sqlite from "@db/sqlite";
import * as faker from "@faker-js/faker";
const fak = faker.faker;

const dbName = "quotations.sqlite";
const zitate = [
    ["Ich weiß, dass ich nichts weiß.", "Sokrates"],
    ["Der Mensch ist das Maß aller Dinge.", "Protagoras"],
    ["Cogito, ergo sum. (Ich denke, also bin ich.)", "René Descartes"],
    ["Gott ist tot.", "Friedrich Nietzsche"],
    ["Der Mensch ist zur Freiheit verurteilt.", "Jean-Paul Sartre"],
    [
        "Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.",
        "Ludwig Wittgenstein",
    ],
    [
        "Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.",
        "Immanuel Kant",
    ],
];
function main() {
    console.log("it is in quotations.sql");
    Deno.exit();
    try {
        Deno.removeSync(dbName);
    } catch (_) {
        console.error("No file to remove");
    }
    const db = new sqlite.Database(dbName);

    db.exec(`CREATE TABLE aussagen (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        quote TEXT NOT NULL,
        author TEXT NOT NULL,
        ranking integer);`);
    const stmt = db.prepare(
        `INSERT INTO aussagen (quote, author, ranking) VALUES (?, ?, ?);`,
    );
    zitate.forEach((zitat) => {
        const ranking = fak.number.int({ min: 1, max: 5 });
        stmt.run(
            zitat[0],
            zitat[1],
            ranking,
        );
    });
    db.close();
}

main();
