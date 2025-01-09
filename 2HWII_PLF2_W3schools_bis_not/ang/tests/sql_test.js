import { assertEquals } from "jsr:@std/assert";
import * as sqlite from "jsr:@db/sqlite";

const db = new sqlite.Database("persons.db");

Deno.test("a.sql", (tc) => {
    const answer = [{ id: 38 }, { id: 54 }];
    const sql = Deno.readTextFileSync(tc.name);
    if (!sql) {
        throw new Error(`${tc.name} ist leer`);
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
