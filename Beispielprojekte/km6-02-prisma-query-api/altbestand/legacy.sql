-- Altdatenbank OHNE Prisma-Schema: dient der `db pull`-Demo (Introspection).
-- Anlegen:  sqlite3 altbestand/legacy.db < altbestand/legacy.sql
DROP TABLE IF EXISTS buecher;
CREATE TABLE buecher (
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  titel  TEXT NOT NULL,
  autor  TEXT,
  jahr   INTEGER
);
INSERT INTO buecher (titel, autor, jahr) VALUES
  ('Effektives SQL',     'A. Normalform', 2019),
  ('Datenbanken kompakt', 'B. Index',     2021);
