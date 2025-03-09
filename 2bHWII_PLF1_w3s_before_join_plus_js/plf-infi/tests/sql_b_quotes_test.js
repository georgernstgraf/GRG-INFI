import { assertEquals, assertGreater } from "jsr:@std/assert";
import * as sqlite from "jsr:@db/sqlite";

const dbname = "quotations.sqlite";
const db = new sqlite.Database(dbname);

function checkSql(sql, filename) {
    if (!sql) {
        throw new Error(`${filename} ist leer`);
    }
    if (!sqlite.isComplete(sql)) {
        throw new Error(`${filename} enthält fehlerhaftes sql`);
    }
}

function getResult(tc) {
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const stmt = db.prepare(sql);
    return stmt.all();
}

function runFile(tc) {
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    db.exec(sql);
}

Deno.test("h.sql", (tc) => {
    db.sql`insert into aussagen (quote, author, ranking) values ('Die Existenz geht der Essenz voraus.',
            'Jean-Paul Sartre', 1);`;
    runFile(tc);
    assertEquals(
        db.sql`select distinct ranking from aussagen where author = 'Jean-Paul Sartre';`,
        [{ ranking: 3 }],
    );
    db.sql`delete from aussagen where quote = 'Die Existenz geht der Essenz voraus.'`;
});
Deno.test("i.sql", (tc) => {
    runFile(tc);
    assertGreater(
        db.prepare(`select count() as c from aussagen;`).get()["c"],
        7,
    );
});
Deno.test("j.sql", (tc) => {
    runFile(tc);
    assertEquals(
        db.prepare(
            `select count() as c from aussagen where author = 'Ludwig Wittgenstein';`,
        ).get()["c"],
        0,
    );
});
