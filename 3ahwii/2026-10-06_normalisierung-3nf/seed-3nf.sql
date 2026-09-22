-- seed-3nf.sql — Quiz-Tabellen zur UE 2026-10-06 (3NF-Fehlersuche).
-- Laufen lassen mit: sqlite3 normalisierung-3nf.db < seed-3nf.sql
-- Reines SQLite, kein ORM, kein Node.

DROP TABLE IF EXISTS bestellung_denorm;
CREATE TABLE bestellung_denorm(
  bestell_nr INTEGER PRIMARY KEY,
  kunde      TEXT NOT NULL,
  plz        TEXT NOT NULL,
  ort        TEXT NOT NULL
);
INSERT INTO bestellung_denorm(bestell_nr, kunde, plz, ort) VALUES
  (101, 'Auer',  '1020', 'Wien'),
  (102, 'Beck',  '1020', 'Wien'),
  (103, 'Cevik', '4020', 'Linz');

-- 3NF-Fix zum Vergleichen (jede Tatsache genau einmal):
DROP TABLE IF EXISTS plz;
CREATE TABLE plz(
  plz TEXT PRIMARY KEY,
  ort TEXT NOT NULL
);
INSERT INTO plz(plz, ort) VALUES ('1020', 'Wien'), ('4020', 'Linz');

DROP TABLE IF EXISTS bestellung;
CREATE TABLE bestellung(
  bestell_nr INTEGER PRIMARY KEY,
  kunde      TEXT NOT NULL,
  plz        TEXT NOT NULL REFERENCES plz(plz)
);
INSERT INTO bestellung(bestell_nr, kunde, plz) VALUES
  (101, 'Auer',  '1020'),
  (102, 'Beck',  '1020'),
  (103, 'Cevik', '4020');

-- Quiz 2: Schueler (Klasse -> Sprecher transitiv)
DROP TABLE IF EXISTS schueler_denorm;
CREATE TABLE schueler_denorm(
  matr_nr           INTEGER PRIMARY KEY,
  name              TEXT NOT NULL,
  klasse            TEXT NOT NULL,
  klassensprecher   TEXT NOT NULL
);
INSERT INTO schueler_denorm(matr_nr, name, klasse, klassensprecher) VALUES
  (1, 'Auer',  '3AHWII', 'Beck'),
  (2, 'Beck',  '3AHWII', 'Beck'),
  (3, 'Cevik', '3BHWII', 'Demir');

-- Quiz 3: Album mit Label-Adresse (Musik-DB)
DROP TABLE IF EXISTS album_denorm;
CREATE TABLE album_denorm(
  album_id      INTEGER PRIMARY KEY,
  titel         TEXT NOT NULL,
  label         TEXT NOT NULL,
  label_adresse TEXT NOT NULL
);
INSERT INTO album_denorm(album_id, titel, label, label_adresse) VALUES
  (1, 'Silent Lines', 'Nordklang', 'Hafenstr. 4, Hamburg'),
  (2, 'Night Ferry',  'Nordklang', 'Hafenstr. 4, Hamburg'),
  (3, 'Dust Choir',   'Suedton',   'Ringstr. 9, Graz');

-- Quiz 4: Mitarbeiter (AbtNr -> Name/Leiter)
DROP TABLE IF EXISTS mitarbeiter_denorm;
CREATE TABLE mitarbeiter_denorm(
  personal_nr INTEGER PRIMARY KEY,
  abt_nr      TEXT NOT NULL,
  abt_name    TEXT NOT NULL,
  abt_leiter  TEXT NOT NULL
);
INSERT INTO mitarbeiter_denorm(personal_nr, abt_nr, abt_name, abt_leiter) VALUES
  (11, 'E1', 'Einkauf',  'Auer'),
  (12, 'E1', 'Einkauf',  'Auer'),
  (13, 'V2', 'Verkauf',  'Beck');

-- Quiz 5/6: SWP-Domaenen (Konto, Person)
DROP TABLE IF EXISTS konto_denorm;
CREATE TABLE konto_denorm(
  iban      TEXT PRIMARY KEY,
  inhaber    TEXT NOT NULL,
  blz       TEXT NOT NULL,
  bankname   TEXT NOT NULL
);
INSERT INTO konto_denorm(iban, inhaber, blz, bankname) VALUES
  ('AT01', 'Auer',  '1000', 'Erste Bank'),
  ('AT02', 'Beck',  '1000', 'Erste Bank');

DROP TABLE IF EXISTS person_denorm;
CREATE TABLE person_denorm(
  svnr TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  plz  TEXT NOT NULL,
  ort  TEXT NOT NULL
);
INSERT INTO person_denorm(svnr, name, plz, ort) VALUES
  ('1001', 'Auer',  '1020', 'Wien'),
  ('1002', 'Beck',  '1020', 'Wien');

-- Quiz 7/9: Hält-Fälle (zusammengesetzter Schlüssel, voll abhängig)
DROP TABLE IF EXISTS pruefung;
CREATE TABLE pruefung(
  matr_nr INTEGER NOT NULL,
  lv_nr   TEXT NOT NULL,
  note    INTEGER NOT NULL,
  PRIMARY KEY(matr_nr, lv_nr)
);
INSERT INTO pruefung(matr_nr, lv_nr, note) VALUES (1, 'DBI', 1), (1, 'SWP', 2), (2, 'DBI', 3);

DROP TABLE IF EXISTS bestellposition;
CREATE TABLE bestellposition(
  bestell_nr  INTEGER NOT NULL,
  produkt_nr  INTEGER NOT NULL,
  menge       INTEGER NOT NULL,
  PRIMARY KEY(bestell_nr, produkt_nr)
);
INSERT INTO bestellposition(bestell_nr, produkt_nr, menge) VALUES (101, 1, 2), (101, 2, 1), (102, 1, 5);
