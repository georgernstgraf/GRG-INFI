// Sync Adapter für SQLite
import { DatabaseSync } from "node:sqlite";

// konkreter "handle" für eine spezifische Datenbank
const db = new DatabaseSync("2ahwii.db");

// Statement wird zuerst "prepared" und dann "executed"
let stmt = db.prepare("SELECT * FROM students");

// hier das execute:
const rows = stmt.all();

stmt = db.prepare("INSERT INTO students (name, age) VALUES (?, ?)");
stmt.run("Anna", 20);
stmt.run("Berta", 21);
stmt.run("Cäcilia", 22);

// nochmal select
stmt = db.prepare("SELECT * FROM students");
const rows2 = stmt.all();
console.log(rows);
