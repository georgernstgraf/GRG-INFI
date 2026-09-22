-- seed-musik-mini.sql — vereinfachte Musik-Streaming-DB (UE 2026-09-29, Rep ohne Node).
-- Laufen lassen mit: sqlite3 musik-mini.db < seed-musik-mini.sql
-- Reines SQLite, kein ORM, kein Node. Teilausschnitt der Dauerbeispiel-DB
-- (voller Seed-Stand weiter offen, siehe ../RESOURCES.md → Gaps).
-- Schema-Namen passend zu lessons/0001 (Künstler, Label, label_id).

DROP TABLE IF EXISTS song;
DROP TABLE IF EXISTS kuenstler;
DROP TABLE IF EXISTS label;

CREATE TABLE label(
  id   INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE kuenstler(
  id       INTEGER PRIMARY KEY,
  name     TEXT NOT NULL,
  label_id INTEGER REFERENCES label(id) -- NULL = Independent (für COUNT-Demo)
);

CREATE TABLE song(
  id           INTEGER PRIMARY KEY,
  titel        TEXT NOT NULL,
  dauer_sek    INTEGER NOT NULL,
  kuenstler_id INTEGER NOT NULL REFERENCES kuenstler(id)
);

INSERT INTO label(id, name) VALUES
  (1, 'Nordklang'),
  (2, 'Suedton'),
  (3, 'Westbeat');

INSERT INTO kuenstler(id, name, label_id) VALUES
  (1, 'Auer',  1),
  (2, 'Beck',  1),
  (3, 'Cevik', 2),
  (4, 'Demir', 2),
  (5, 'Egger', 2),
  (6, 'Frei',  NULL); -- Independent, kein Label

INSERT INTO song(id, titel, dauer_sek, kuenstler_id) VALUES
  (1,  'Silent Lines', 210, 1),
  (2,  'Night Ferry',  185, 1),
  (3,  'Hafenlicht',   240, 1),
  (4,  'Kalter Kaffee', 200, 2),
  (5,  'Dust Choir',   230, 3),
  (6,  'Bergwind',     195, 4),
  (7,  'TalEcho',      220, 4),
  (8,  'Suedhang',     205, 5),
  (9,  'Freies Feld',  250, 6),
  (10, 'Ohne Netz',    190, 6);
