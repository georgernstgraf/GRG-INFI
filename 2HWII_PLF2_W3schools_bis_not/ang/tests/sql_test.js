import { assertEquals } from "jsr:@std/assert";
import * as sqlite from "jsr:@db/sqlite";

const db = new sqlite.Database("persons.db");

function checkSql(sql, filename) {
    if (!sql) {
        throw new Error(`${filename} ist leer`);
    }
    if (!sqlite.isComplete(sql)) {
        throw new Error(`${filename} enthält fehlerhaftes sql`);
    }
}

Deno.test("a.sql", (tc) => {
    const answer = [{ id: 38 }, { id: 54 }];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const stmt = db.prepare(sql);
    const result = stmt.all();
    assertEquals(result, answer);
});
Deno.test("b.sql", (tc) => {
    const answer = [
        { zodiacsign: "Aquarius" },
        { zodiacsign: "Aries" },
        { zodiacsign: "Cancer" },
        { zodiacsign: "Capricorn" },
        { zodiacsign: "Gemini" },
        { zodiacsign: "Leo" },
        { zodiacsign: "Libra" },
        { zodiacsign: "Pisces" },
        { zodiacsign: "Sagittarius" },
        { zodiacsign: "Scorpio" },
        { zodiacsign: "Taurus" },
        { zodiacsign: "Virgo" },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const stmt = db.prepare(sql);
    const result = stmt.all();
    assertEquals(result, answer);
});
Deno.test("c.sql", (tc) => {
    const answer = [["carla.voigt@hotmail.com"]];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const stmt = db.prepare(sql);
    const result = stmt.values();
    assertEquals(result, answer);
});
Deno.test("d.sql", (tc) => {
    const answer = [["Miss Marieke Schellenbeck"]];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const stmt = db.prepare(sql);
    const result = stmt.values();
    assertEquals(result, answer);
});
Deno.test("e.sql", (tc) => {
    const answer = [{
        id: 12,
        firstname: "Charlotte",
        lastname: "Battke",
        displayname: "Charlotte Battke",
        email: "charlotte_battke15@gmail.com",
        sex: "female",
        birthdate: "1995-02-05T01:50:05.998Z",
        zodiacsign: "Sagittarius",
    }];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const stmt = db.prepare(sql);
    const result = stmt.all();
    assertEquals(result, answer);
});
Deno.test("f.sql", (tc) => {
    const answer = [
        {
            birthdate: "2000-06-24T03:35:20.033Z",
            displayname: "Herr Kerim Friedrich",
        },
        {
            birthdate: "1986-10-05T21:20:52.785Z",
            displayname: "Bennet Hamann Sr.",
        },
        { birthdate: "1980-07-02T13:35:56.189Z", displayname: "Kai Goy" },
        {
            birthdate: "1963-05-18T18:08:29.191Z",
            displayname: "Herr Aaron Wöschler",
        },
        {
            birthdate: "1954-09-12T01:32:59.029Z",
            displayname: "Frau Lorenz Pinnock",
        },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const stmt = db.prepare(sql);
    const result = stmt.all();
    assertEquals(result, answer);
});
Deno.test("g.sql", (tc) => {
    const answer = [
        { id: 66 },
        { id: 60 },
        { id: 41 },
        { id: 3 },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const stmt = db.prepare(sql);
    const result = stmt.all();
    assertEquals(result, answer);
});
Deno.test("h.sql", (tc) => {
    const answer = [
        { displayname: "Herr Luzie Kupprion", id: 2 },
        { displayname: "Herr Selina Fust", id: 26 },
        { displayname: "Herr Maja Koster", id: 38 },
        { displayname: "Herr Sanja Steinmetz", id: 44 },
        { displayname: "Frau Norman Lutz", id: 60 },
        { displayname: "Frau Corvin Koderisch", id: 65 },
        { displayname: "Frau Justin Hönig", id: 69 },
        { displayname: "Herr Anne Dethloff", id: 72 },
        { displayname: "Frau Lorenz Pinnock", id: 73 },
        { displayname: "Frau Jonah Hermecke", id: 75 },
        { displayname: "Herr Veronika Swillims", id: 82 },
        { displayname: "Herr Olivia Voigt", id: 85 },
        { displayname: "Herr Karlotta Freisen", id: 89 },
        { displayname: "Frau Louis Gombert I", id: 96 },
        { displayname: "Herr Paulina Stahl", id: 105 },
        { displayname: "Frau Mr. Alessio Daubner MD", id: 106 },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const stmt = db.prepare(sql);
    const result = stmt.all();
    assertEquals(result, answer);
});
Deno.test("i.sql", (tc) => {
    const answer = [[50]];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const stmt = db.prepare(sql);
    const result = stmt.values();
    assertEquals(result, answer);
});
