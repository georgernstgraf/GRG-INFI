import { assertEquals } from "jsr:@std/assert";
import * as sqlite from "jsr:@db/sqlite";

const db = new sqlite.Database("persons.db");

Deno.test("a.sql", (tc) => {
    const answer = [{ id: 38 }, { id: 54 }];
    const sql = Deno.readTextFileSync(tc.name);
    if (!sqlite.isComplete(sql)) {
        throw new Error(`${tc.name} ist leer oder unvollständig`);
    }
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
    if (!sqlite.isComplete(sql)) {
        throw new Error(`${tc.name} ist ungültig`);
    }
    const stmt = db.prepare(sql);
    const result = stmt.all();
    assertEquals(result, answer);
});
Deno.test("c.sql", (tc) => {
    const answer = [["carla.voigt@hotmail.com"]];
    const sql = Deno.readTextFileSync(tc.name);
    if (!sqlite.isComplete(sql)) {
        throw new Error(`${tc.name} ist leer oder unvollständig`);
    }
    const stmt = db.prepare(sql);
    const result = stmt.values();
    assertEquals(result, answer);
});
Deno.test("d.sql", (tc) => {
    const answer = [["Miss Marieke Schellenbeck"]];
    const sql = Deno.readTextFileSync(tc.name);
    if (!sqlite.isComplete(sql)) {
        throw new Error(`${tc.name} ist leer oder unvollständig`);
    }
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
    if (!sqlite.isComplete(sql)) {
        throw new Error(`${tc.name} ist leer oder unvollständig`);
    }
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
        {
            birthdate: "1980-07-02T13:35:56.189Z",
            displayname: "Kai Goy",
        },
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
    if (!sqlite.isComplete(sql)) {
        throw new Error(`${tc.name} ist leer oder unvollständig`);
    }
    const stmt = db.prepare(sql);
    const result = stmt.all();
    assertEquals(result, answer);
});
Deno.test("g.sql", (tc) => {
    const answer = [
    ];
    const sql = Deno.readTextFileSync(tc.name);
    if (!sqlite.isComplete(sql)) {
        throw new Error(`${tc.name} ist leer oder unvollständig`);
    }
    const stmt = db.prepare(sql);
    const result = stmt.all();
    assertEquals(result, answer);
});
[
  {
    id: 3,
  },
  {
    id: 41,
  },
  {
    id: 60,
  },
  {
    id: 66,
  },
]
