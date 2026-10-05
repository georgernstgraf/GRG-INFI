-- seed-normalisierung.sql — Beispieltabellen zur Lesson KM5-02 (1NF–3NF).
-- Laden mit:  sqlite3 normalisierung.db < seed-normalisierung.sql
-- Reines SQLite, kein ORM, kein Node.

----------------------------------------------------------------------
-- 1NF — Liste in einer Zelle
----------------------------------------------------------------------
DROP TABLE IF EXISTS kunde_hobby_denorm;
CREATE TABLE kunde_hobby_denorm(
  kunde_id INTEGER PRIMARY KEY,
  name     TEXT NOT NULL,
  hobbys   TEXT NOT NULL            -- "Lesen, Schwimmen" -> nicht atomar
);
INSERT INTO kunde_hobby_denorm(kunde_id, name, hobbys) VALUES
  (1, 'Auer', 'Lesen, Schwimmen'),
  (2, 'Beck', 'Schach');

-- 1NF-Fix: eine Zeile pro Wert (Kindtabelle)
DROP TABLE IF EXISTS hobby;
CREATE TABLE hobby(
  kunde_id INTEGER NOT NULL,
  hobby    TEXT NOT NULL,
  PRIMARY KEY(kunde_id, hobby)
);
INSERT INTO hobby(kunde_id, hobby) VALUES
  (1, 'Lesen'), (1, 'Schwimmen'), (2, 'Schach');

----------------------------------------------------------------------
-- 1NF — Wiederholgruppe als Spalten (track1, track2, track3)
----------------------------------------------------------------------
DROP TABLE IF EXISTS bestellung_repeat;
CREATE TABLE bestellung_repeat(
  bestell_nr INTEGER PRIMARY KEY,
  kunde      TEXT NOT NULL,
  track1     INTEGER,
  track2     INTEGER,
  track3     INTEGER
);
INSERT INTO bestellung_repeat(bestell_nr, kunde, track1, track2, track3) VALUES
  (101, 'Auer', 1, 2, NULL),
  (102, 'Beck', 3, NULL, NULL);

-- 1NF-Fix: eine Zeile pro Vorkommen (Positionsnummer statt Spalten)
DROP TABLE IF EXISTS bestellposition;
CREATE TABLE bestellposition(
  bestell_nr INTEGER NOT NULL,
  position   INTEGER NOT NULL,
  track_id   INTEGER NOT NULL,
  PRIMARY KEY(bestell_nr, position)
);
INSERT INTO bestellposition(bestell_nr, position, track_id) VALUES
  (101, 1, 1), (101, 2, 2), (102, 1, 3);

----------------------------------------------------------------------
-- 2NF — Entitäten und die (korrekte) Zwischentabelle
----------------------------------------------------------------------
DROP TABLE IF EXISTS song;
CREATE TABLE song(
  song_id   INTEGER PRIMARY KEY,
  titel     TEXT NOT NULL,
  dauer_sek INTEGER NOT NULL
);
INSERT INTO song(song_id, titel, dauer_sek) VALUES
  (1, 'Silent Lines', 215),
  (2, 'Night Ferry', 240),
  (3, 'Dust Choir', 198);

DROP TABLE IF EXISTS playlist;
CREATE TABLE playlist(
  playlist_id INTEGER PRIMARY KEY,
  name        TEXT NOT NULL
);
INSERT INTO playlist(playlist_id, name) VALUES (10, 'Fokus'), (20, 'Nachtfahrt');

-- 2NF-Verletzung: song_titel hängt nur an song_id (Teil des zusammengesetzten PK)
DROP TABLE IF EXISTS song_playlist_denorm;
CREATE TABLE song_playlist_denorm(
  song_id     INTEGER NOT NULL,
  playlist_id INTEGER NOT NULL,
  song_titel  TEXT NOT NULL,
  PRIMARY KEY(song_id, playlist_id)
);
INSERT INTO song_playlist_denorm(song_id, playlist_id, song_titel) VALUES
  (1, 10, 'Silent Lines'),
  (1, 20, 'Silent Lines'),
  (2, 20, 'Night Ferry');

-- 2NF-Fix: die Zwischentabelle hält nur noch die Beziehung
DROP TABLE IF EXISTS song_playlist;
CREATE TABLE song_playlist(
  song_id     INTEGER NOT NULL REFERENCES song(song_id),
  playlist_id INTEGER NOT NULL REFERENCES playlist(playlist_id),
  PRIMARY KEY(song_id, playlist_id)
);
INSERT INTO song_playlist(song_id, playlist_id) VALUES (1, 10), (1, 20), (2, 20);

-- 2NF-Verletzung 2: produkt_name hängt nur an produkt_nr
DROP TABLE IF EXISTS produkt;
CREATE TABLE produkt(
  produkt_nr INTEGER PRIMARY KEY,
  name       TEXT NOT NULL
);
INSERT INTO produkt(produkt_nr, name) VALUES (1, 'Kabel'), (2, 'Stecker');

DROP TABLE IF EXISTS bestellposition_prod_denorm;
CREATE TABLE bestellposition_prod_denorm(
  bestell_nr   INTEGER NOT NULL,
  produkt_nr   INTEGER NOT NULL,
  menge        INTEGER NOT NULL,
  produkt_name TEXT NOT NULL,
  PRIMARY KEY(bestell_nr, produkt_nr)
);
INSERT INTO bestellposition_prod_denorm(bestell_nr, produkt_nr, menge, produkt_name) VALUES
  (101, 1, 2, 'Kabel'),
  (101, 2, 1, 'Stecker'),
  (102, 1, 5, 'Kabel');

-- 2NF hält: die Note braucht beide Schlüsselteile (wer, welche LV)
DROP TABLE IF EXISTS pruefung;
CREATE TABLE pruefung(
  matr_nr INTEGER NOT NULL,
  lv_nr   TEXT NOT NULL,
  note    INTEGER NOT NULL,
  PRIMARY KEY(matr_nr, lv_nr)
);
INSERT INTO pruefung(matr_nr, lv_nr, note) VALUES
  (1, 'DBI', 1), (1, 'SWP', 2), (2, 'DBI', 3);

----------------------------------------------------------------------
-- 3NF — transitive Abhängigkeit (Bestellung -> PLZ -> Ort)
----------------------------------------------------------------------
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

-- SWP-Crossover: Konto (IBAN -> BLZ -> Bankname)
DROP TABLE IF EXISTS konto_denorm;
CREATE TABLE konto_denorm(
  iban     TEXT PRIMARY KEY,
  inhaber  TEXT NOT NULL,
  blz      TEXT NOT NULL,
  bankname TEXT NOT NULL
);
INSERT INTO konto_denorm(iban, inhaber, blz, bankname) VALUES
  ('AT01', 'Auer', '1000', 'Erste Bank'),
  ('AT02', 'Beck', '1000', 'Erste Bank');

-- SWP-Crossover: Person (SVNr -> PLZ -> Ort)
DROP TABLE IF EXISTS person_denorm;
CREATE TABLE person_denorm(
  svnr TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  plz  TEXT NOT NULL,
  ort  TEXT NOT NULL
);
INSERT INTO person_denorm(svnr, name, plz, ort) VALUES
  ('1001', 'Auer', '1020', 'Wien'),
  ('1002', 'Beck', '1020', 'Wien');
