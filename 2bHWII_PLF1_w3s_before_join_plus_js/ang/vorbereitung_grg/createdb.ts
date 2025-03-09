import * as sqlite from "@db/sqlite";
import * as faker from "@faker-js/faker";
const fak = faker.faker;

const dbName = "aussagen.sqlite";
function main() {
    try {
        Deno.removeSync(dbName);
    } catch (_) {
        console.error("No file to remove");
    }
    const db = new sqlite.Database(dbName);

    db.exec(`CREATE TABLE aussagen (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        aussage TEXT NOT NULL,
        ranking integer);`);
    const stmt = db.prepare(
        `INSERT INTO aussagen (aussage, ranking) VALUES (?, ?);`,
    );
    for (let i = 0; i < 7; i++) {
        const text = fak.lorem.text();
        const ranking = fak.number.int({ min: 1, max: 5 });
        stmt.run(
            text,
            ranking,
        );
    }

    db.close();
}

main();
