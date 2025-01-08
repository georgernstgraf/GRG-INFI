import { assertEquals } from "jsr:@std/assert";
import * as sqlite from "jsr:@db/sqlite";

const sqlfiles = [
    "a.sql",
    "b.sql",
    "c.sql",
    "d.sql",
    "e.sql",
    "f.sql",
    "g.sql",
    "h.sql",
    "i.sql",
];

const answers = { "a.sql": [{ id: 38 }, { id: 54 }], "b.sql": [38, 54], "c.sql": [38, 54], "d.sql": [38, 54], "e.sql": [38, 54], "f.sql": [38, 54], "g.sql": [38, 54], "h.sql": [38, 54], "i.sql": [38, 54] };

const db = new sqlite.Database("persons.db");

sqlfiles.forEach((sqlfile) => {
    Deno.test(sqlfile, (tc) => {
        const answer = answers[tc.name];
        if (!answer) {
            throw new Error(`No answer for ${tc.name}`);
        }
        const sql = Deno.readTextFileSync(sqlfile);
        const stmt = db.prepare(sql);
        const result = stmt.all();
        assertEquals(result, answer);
        //console.info(result);
    });
});
