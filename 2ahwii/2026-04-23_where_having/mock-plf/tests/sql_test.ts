import { assertEquals } from "jsr:@std/assert";
import * as sqlite from "jsr:@db/sqlite";

// Datenbank aus setup.sql erzeugen
const setupSql = Deno.readTextFileSync("setup.sql");
const db = new sqlite.Database("schule.db");
db.exec(setupSql);

function checkSql(sql: string, filename: string) {
    if (!sql) {
        throw new Error(`${filename} ist leer`);
    }
    if (!sqlite.isComplete(sql)) {
        throw new Error(`${filename} enthält fehlerhaftes SQL`);
    }
}

// Aufgabe a: Schüler der 2AHWII
Deno.test("a.sql", (tc) => {
    const answer = [
        { vorname: "David", nachname: "Bauer" },
        { vorname: "Clara", nachname: "Fischer" },
        { vorname: "Anna", nachname: "Gruber" },
        { vorname: "Bernhard", nachname: "Huber" },
        { vorname: "Felix", nachname: "Müller" },
        { vorname: "Eva", nachname: "Wagner" },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const result = db.prepare(sql).all();
    assertEquals(result, answer);
});

// Aufgabe b: Alle verschiedenen Klassen
Deno.test("b.sql", (tc) => {
    const answer = [
        { klasse: "2AHWII" },
        { klasse: "2BHWII" },
        { klasse: "2CHWII" },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const result = db.prepare(sql).all();
    assertEquals(result, answer);
});

// Aufgabe c: Neue Schüler, aber nicht 2AHWII
Deno.test("c.sql", (tc) => {
    const answer = [
        { vorname: "Hans", nachname: "Berger", klasse: "2BHWII" },
        { vorname: "Maria", nachname: "Egger", klasse: "2CHWII" },
        { vorname: "Lukas", nachname: "Graf", klasse: "2CHWII" },
        { vorname: "Jakob", nachname: "Lechner", klasse: "2BHWII" },
        { vorname: "Klara", nachname: "Mayer", klasse: "2CHWII" },
        { vorname: "Greta", nachname: "Schmidt", klasse: "2BHWII" },
        { vorname: "Olga", nachname: "Schwarz", klasse: "2CHWII" },
        { vorname: "Iris", nachname: "Steiner", klasse: "2BHWII" },
        { vorname: "Niklas", nachname: "Winkler", klasse: "2CHWII" },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const result = db.prepare(sql).all();
    assertEquals(result, answer);
});

// Aufgabe d: Schüler pro Klasse
Deno.test("d.sql", (tc) => {
    const answer = [
        { klasse: "2AHWII", anzahl: 6 },
        { klasse: "2CHWII", anzahl: 5 },
        { klasse: "2BHWII", anzahl: 4 },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const result = db.prepare(sql).all();
    assertEquals(result, answer);
});

// Aufgabe e: Schlechte Noten (Note > 3)
Deno.test("e.sql", (tc) => {
    const answer = [
        { vorname: "David", nachname: "Bauer", fach: "D" },
        { vorname: "David", nachname: "Bauer", fach: "Inf" },
        { vorname: "David", nachname: "Bauer", fach: "Mathe" },
        { vorname: "Hans", nachname: "Berger", fach: "Inf" },
        { vorname: "Hans", nachname: "Berger", fach: "Mathe" },
        { vorname: "Lukas", nachname: "Graf", fach: "D" },
        { vorname: "Lukas", nachname: "Graf", fach: "Mathe" },
        { vorname: "Bernhard", nachname: "Huber", fach: "Mathe" },
        { vorname: "Jakob", nachname: "Lechner", fach: "Mathe" },
        { vorname: "Felix", nachname: "Müller", fach: "Inf" },
        { vorname: "Niklas", nachname: "Winkler", fach: "Inf" },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const result = db.prepare(sql).all();
    assertEquals(result, answer);
});

// Aufgabe f: Leichte Fächer mit HAVING
Deno.test("f.sql", (tc) => {
    const answer = [
        { fach: "AM", durchschnitt: 1.25, anzahl: 4 },
        { fach: "E", durchschnitt: 2, anzahl: 6 },
        { fach: "Inf", durchschnitt: 2.26, anzahl: 23 },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const result = db.prepare(sql).all();
    assertEquals(result, answer);
});

// Aufgabe g: Lehrer und ihr Vorgesetzter (Self-JOIN mit LEFT JOIN)
Deno.test("g.sql", (tc) => {
    const answer = [
        { lehrer: "Julia Auer", vorgesetzter: "Mag. Thomas Riedl" },
        { lehrer: "Michael Brandner", vorgesetzter: "Mag. Petra Hofer" },
        { lehrer: "Mag. Petra Hofer", vorgesetzter: "Dr. Ernst Vogel" },
        { lehrer: "Sarah Koller", vorgesetzter: "Mag. Petra Hofer" },
        { lehrer: "Mag. Thomas Riedl", vorgesetzter: "Dr. Ernst Vogel" },
        { lehrer: "Dr. Ernst Vogel", vorgesetzter: null },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const result = db.prepare(sql).all();
    assertEquals(result, answer);
});

// Aufgabe h: Schüler mit mindestens einer 1er-Note
Deno.test("h.sql", (tc) => {
    const answer = [
        { vorname: "Maria", nachname: "Egger" },
        { vorname: "Clara", nachname: "Fischer" },
        { vorname: "Anna", nachname: "Gruber" },
        { vorname: "Klara", nachname: "Mayer" },
        { vorname: "Iris", nachname: "Steiner" },
        { vorname: "Eva", nachname: "Wagner" },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const result = db.prepare(sql).all();
    assertEquals(result, answer);
});

// Aufgabe i: Noten der 2AHWII sortiert (Fach ASC, Note ASC, Datum DESC)
Deno.test("i.sql", (tc) => {
    const answer = [
        { nachname: "Fischer", fach: "AM", note: 1, datum: "2026-04-01" },
        { nachname: "Wagner", fach: "AM", note: 2, datum: "2026-04-02" },
        { nachname: "Müller", fach: "D", note: 2, datum: "2026-02-20" },
        { nachname: "Huber", fach: "D", note: 3, datum: "2026-03-01" },
        { nachname: "Gruber", fach: "D", note: 3, datum: "2026-02-01" },
        { nachname: "Bauer", fach: "D", note: 4, datum: "2026-02-15" },
        { nachname: "Wagner", fach: "E", note: 1, datum: "2026-03-18" },
        { nachname: "Fischer", fach: "E", note: 2, datum: "2026-03-20" },
        { nachname: "Gruber", fach: "E", note: 2, datum: "2026-03-15" },
        { nachname: "Gruber", fach: "Inf", note: 1, datum: "2026-03-10" },
        { nachname: "Wagner", fach: "Inf", note: 1, datum: "2026-03-10" },
        { nachname: "Gruber", fach: "Inf", note: 1, datum: "2026-01-15" },
        { nachname: "Wagner", fach: "Inf", note: 1, datum: "2026-01-15" },
        { nachname: "Fischer", fach: "Inf", note: 2, datum: "2026-03-12" },
        { nachname: "Fischer", fach: "Inf", note: 2, datum: "2026-01-16" },
        { nachname: "Huber", fach: "Inf", note: 3, datum: "2026-02-10" },
        { nachname: "Müller", fach: "Inf", note: 3, datum: "2026-01-19" },
        { nachname: "Huber", fach: "Inf", note: 3, datum: "2026-01-18" },
        { nachname: "Müller", fach: "Inf", note: 4, datum: "2026-03-15" },
        { nachname: "Bauer", fach: "Inf", note: 4, datum: "2026-01-20" },
        { nachname: "Fischer", fach: "Mathe", note: 1, datum: "2026-02-05" },
        { nachname: "Wagner", fach: "Mathe", note: 2, datum: "2026-01-25" },
        { nachname: "Gruber", fach: "Mathe", note: 2, datum: "2026-01-20" },
        { nachname: "Müller", fach: "Mathe", note: 3, datum: "2026-02-03" },
        { nachname: "Huber", fach: "Mathe", note: 4, datum: "2026-01-22" },
        { nachname: "Bauer", fach: "Mathe", note: 5, datum: "2026-02-01" },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const result = db.prepare(sql).all();
    assertEquals(result, answer);
});

// Aufgabe j: Bestnoten-Übersicht (≥5 Noten, sortiert nach Durchschnitt ASC, Nachname ASC)
Deno.test("j.sql", (tc) => {
    const answer = [
        {
            vorname: "Maria",
            nachname: "Egger",
            klasse: "2CHWII",
            durchschnitt: 1.4,
            anzahl: 5,
        },
        {
            vorname: "Eva",
            nachname: "Wagner",
            klasse: "2AHWII",
            durchschnitt: 1.4,
            anzahl: 5,
        },
        {
            vorname: "Clara",
            nachname: "Fischer",
            klasse: "2AHWII",
            durchschnitt: 1.6,
            anzahl: 5,
        },
        {
            vorname: "Anna",
            nachname: "Gruber",
            klasse: "2AHWII",
            durchschnitt: 1.8,
            anzahl: 5,
        },
    ];
    const sql = Deno.readTextFileSync(tc.name);
    checkSql(sql, tc.name);
    const result = db.prepare(sql).all();
    assertEquals(result, answer);
});
