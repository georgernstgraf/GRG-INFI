import * as sqlite from "jsr:@db/sqlite";
import * as faker from "npm:@faker-js/faker";
import * as csv from "jsr:@std/csv";
function main() {
    // Open the SQLite3 database
    const db = new sqlite.Database("persons.db");

    // Create a "users" table (if it doesn't exist)
    db.exec(`
    CREATE TABLE IF NOT EXISTS persons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL
    )
  `);

    // Insert some sample data
    db.exec(`INSERT INTO users (name, email) VALUES (?, ?)`, [
        "Alice",
        "alice@example.com",
    ]);
    db.exec(`INSERT INTO users (name, email) VALUES (?, ?)`, [
        "Bob",
        "bob@example.com",
    ]);

    // Query all users
    const rows = db.sql`SELECT * FROM users`;
    for (const row of rows) {
        console.log(row);
    }

    // Close the database
    db.close();
}

function doCsv() {
    const fak = faker.faker;
    for (let i = 0; i < 21; i++) {
        const sex = fak.person.sexType();
        const fullname = fak.person.fullName({ sex });
        const bio = fak.person.bio();
        const gender = fak.person.gender();
        const sternzeichen = fak.person.zodiacSign();
        console.log(
            `${fullname}, ${bio}, ${sex}, ${sternzeichen}`,
        );
    }
}
// main();
doCsv();
