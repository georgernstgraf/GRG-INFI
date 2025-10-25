import * as sqlite from "jsr:@db/sqlite";
import * as faker from "npm:@faker-js/faker";
const fak = faker.faker;

function main() {
    try {
        Deno.removeSync("persons.db");
    } catch (_) {
        console.error("No file to remove");
    }
    const db = new sqlite.Database("persons.db");

    db.exec(`
    CREATE TABLE persons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstname TEXT NOT NULL,
      lastname TEXT NOT NULL,
      displayname TEXT NOT NULL,
      email TEXT NOT NULL,
      sex TEXT NOT NULL,
      birthdate TEXT NOT NULL,
      zodiacsign TEXT NOT NULL
    )
  `);
    const stmt = db.prepare(
        `INSERT INTO persons (firstname, lastname, displayname, email, sex,
        birthdate, zodiacsign) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    );
    for (let i = 0; i < 108; i++) {
        const sex = fak.person.sexType();
        const firstName = faker.fakerDE.person.firstName(sex);
        const lastName = faker.fakerDE.person.lastName();
        const prefix = Math.random() > 0.5
            ? ""
            : faker.fakerDE.person.prefix(sex) + " "; // sex: REPARIERT!!!
        const displayname = prefix + fak.person.fullName({
            firstName,
            lastName,
            sex,
        });
        const email = faker.fakerDE.internet.email({ firstName, lastName })
            .toLowerCase();
        const birthdate = fak.date.birthdate();
        const zodiacsign = fak.person.zodiacSign();
        stmt.run(
            firstName,
            lastName,
            displayname,
            email,
            sex,
            birthdate,
            zodiacsign,
        );
    }

    db.close();
}

main();
