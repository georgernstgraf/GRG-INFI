import { assertEquals } from "jsr:@std/assert";
import * as sqlite from "jsr:@db/sqlite";

const db = new sqlite.Database("w3schools.sqlite");

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

Deno.test("a.sql", (tc) => {
    const answer = [{ id: 38 }, { id: 54 }];
    assertEquals(getResult(tc), answer);
});
Deno.test("b.sql", (tc) => {
    const answer = [];
    assertEquals(getResult(tc), answer);
});
Deno.test("c.sql", (tc) => {
    const answer = [{ anzahl: 8 }];
    assertEquals(getResult(tc), answer);
});
Deno.test("d.sql", (tc) => {
    const answer = [
        {
            ContactName: "Sven Ottlieb",
        },
        {
            ContactName: "Matti Karttunen",
        },
        {
            ContactName: "Jytte Petersen",
        },
        {
            ContactName: "Jose Pavarotti",
        },
        {
            ContactName: "Henriette Pfalzheim",
        },
        {
            ContactName: "Helen Bennett",
        },
        {
            ContactName: "Carine Schmitt",
        },
        {
            ContactName: "Annette Roulet",
        },
    ];
    assertEquals(getResult(tc), answer);
});
Deno.test("e.sql", (tc) => {
    const answer = [
        {
            FirstName: "Anne",
            LastName: "Dodsworth",
        },
    ];
    assertEquals(getResult(tc), answer);
});
Deno.test("f.sql", (tc) => {
    const answer = [{
        "ordersfrom1997": 44,
    }];
    assertEquals(getResult(tc), answer);
});
Deno.test("g.sql", (tc) => {
    const answer = [
        {
            Price: 263.5,
            ProductName: "Côte de Blaye",
        },
        {
            Price: 2.5,
            ProductName: "Geitost",
        },
    ];
    assertEquals(getResult(tc), answer);
});
Deno.test("h.sql", (tc) => {
    const answer = [
        {
            city: "Vancouver",
        },
        {
            city: "Versailles",
        },
        {
            city: "Walla",
        },
        {
            city: "Walla Walla",
        },
        {
            city: "Århus",
        },
    ];
    assertEquals(getResult(tc), answer);
});
Deno.test("i.sql", (tc) => {
    const answer = [{
        "Country": "USA",
    }, {
        "Country": "Germany",
    }, {
        "Country": "France",
    }];
    assertEquals(getResult(tc), answer);
});
