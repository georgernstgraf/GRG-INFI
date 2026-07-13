-- ============================================================
-- Mock-PLF Datenbank: Schul-System
-- 2ahwii – PLF-Vorbereitung, 30. April 2026
-- ============================================================

-- Tabelle: schueler (~15 Schüler)
DROP TABLE IF EXISTS schueler;
CREATE TABLE schueler (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    vorname     TEXT    NOT NULL,
    nachname    TEXT    NOT NULL,
    klasse      TEXT    NOT NULL,
    eintrittsjahr INTEGER NOT NULL
);

INSERT INTO schueler (vorname, nachname, klasse, eintrittsjahr) VALUES
    ('Anna',     'Gruber',    '2AHWII', 2024),
    ('Bernhard', 'Huber',     '2AHWII', 2024),
    ('Clara',    'Fischer',   '2AHWII', 2024),
    ('David',    'Bauer',     '2AHWII', 2024),
    ('Eva',      'Wagner',    '2AHWII', 2024),
    ('Felix',    'Müller',    '2AHWII', 2024),
    ('Greta',    'Schmidt',   '2BHWII', 2024),
    ('Hans',     'Berger',    '2BHWII', 2024),
    ('Iris',     'Steiner',   '2BHWII', 2024),
    ('Jakob',    'Lechner',   '2BHWII', 2024),
    ('Klara',    'Mayer',     '2CHWII', 2024),
    ('Lukas',    'Graf',      '2CHWII', 2024),
    ('Maria',    'Egger',     '2CHWII', 2024),
    ('Niklas',   'Winkler',   '2CHWII', 2025),
    ('Olga',     'Schwarz',   '2CHWII', 2025);

-- Tabelle: lehrer (~6, mit Hierarchie über chef_id)
DROP TABLE IF EXISTS lehrer;
CREATE TABLE lehrer (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    vorname     TEXT    NOT NULL,
    nachname    TEXT    NOT NULL,
    fachgebiet  TEXT    NOT NULL,
    chef_id     INTEGER,
    FOREIGN KEY (chef_id) REFERENCES lehrer(id)
);

INSERT INTO lehrer (vorname, nachname, fachgebiet, chef_id) VALUES
    -- Direktion (kein Chef)
    ('Dr. Ernst',   'Vogel',     'Direktion',   NULL),
    -- Abteilungsleiter
    ('Mag. Petra',  'Hofer',     'Informatik',  1),
    ('Mag. Thomas', 'Riedl',     'Mathematik',  1),
    -- Lehrer
    ('Sarah',       'Koller',    'Informatik',  2),
    ('Michael',     'Brandner',  'Deutsch',     2),
    ('Julia',       'Auer',      'Englisch',    3);

-- Tabelle: fach (~5 Fächer)
DROP TABLE IF EXISTS fach;
CREATE TABLE fach (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT    NOT NULL
);

INSERT INTO fach (name) VALUES
    ('Inf'),
    ('Mathe'),
    ('D'),
    ('E'),
    ('AM');

-- Tabelle: note (~40 Noten, mit NULL-Werten bei typ)
DROP TABLE IF EXISTS note;
CREATE TABLE note (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    schueler_id INTEGER NOT NULL,
    fach_id     INTEGER NOT NULL,
    lehrer_id   INTEGER NOT NULL,
    note        INTEGER NOT NULL,
    datum       TEXT    NOT NULL,
    typ         TEXT,
    FOREIGN KEY (schueler_id) REFERENCES schueler(id),
    FOREIGN KEY (fach_id)     REFERENCES fach(id),
    FOREIGN KEY (lehrer_id)   REFERENCES lehrer(id)
);

INSERT INTO note (schueler_id, fach_id, lehrer_id, note, datum, typ) VALUES
    -- Anna (1) - 2AHWII
    (1, 1, 3, 1, '2026-01-15', 'S'),
    (1, 2, 4, 2, '2026-01-20', 'T'),
    (1, 3, 5, 3, '2026-02-01', 'M'),
    (1, 1, 3, 1, '2026-03-10', NULL),
    (1, 4, 6, 2, '2026-03-15', 'S'),
    -- Bernhard (2) - 2AHWII
    (2, 1, 3, 3, '2026-01-18', 'T'),
    (2, 2, 4, 4, '2026-01-22', 'S'),
    (2, 1, 3, 3, '2026-02-10', NULL),
    (2, 3, 5, 3, '2026-03-01', 'M'),
    -- Clara (3) - 2AHWII
    (3, 1, 3, 2, '2026-01-16', 'S'),
    (3, 2, 4, 1, '2026-02-05', 'T'),
    (3, 1, 3, 2, '2026-03-12', NULL),
    (3, 4, 6, 2, '2026-03-20', 'S'),
    (3, 5, 3, 1, '2026-04-01', 'M'),
    -- David (4) - 2AHWII
    (4, 1, 3, 4, '2026-01-20', 'T'),
    (4, 2, 4, 5, '2026-02-01', 'S'),
    (4, 3, 5, 4, '2026-02-15', 'M'),
    -- Eva (5) - 2AHWII
    (5, 1, 3, 1, '2026-01-15', 'S'),
    (5, 2, 4, 2, '2026-01-25', 'T'),
    (5, 1, 3, 1, '2026-03-10', NULL),
    (5, 4, 6, 1, '2026-03-18', 'S'),
    (5, 5, 3, 2, '2026-04-02', 'M'),
    -- Felix (6) - 2AHWII
    (6, 1, 3, 3, '2026-01-19', 'T'),
    (6, 2, 4, 3, '2026-02-03', 'S'),
    (6, 3, 5, 2, '2026-02-20', 'M'),
    (6, 1, 3, 4, '2026-03-15', NULL),
    -- Greta (7) - 2BHWII
    (7, 1, 3, 2, '2026-01-17', 'S'),
    (7, 2, 4, 3, '2026-02-08', 'T'),
    (7, 4, 6, 2, '2026-03-22', 'S'),
    -- Hans (8) - 2BHWII
    (8, 1, 3, 5, '2026-01-22', 'T'),
    (8, 2, 4, 4, '2026-02-12', 'S'),
    -- Iris (9) - 2BHWII
    (9, 1, 3, 1, '2026-01-16', 'S'),
    (9, 2, 4, 2, '2026-02-06', 'T'),
    (9, 1, 3, 2, '2026-03-11', NULL),
    (9, 5, 3, 1, '2026-04-03', 'M'),
    -- Jakob (10) - 2BHWII
    (10, 1, 3, 3, '2026-01-20', 'T'),
    (10, 2, 4, 4, '2026-02-10', 'S'),
    (10, 3, 5, 3, '2026-03-01', 'M'),
    -- Klara (11) - 2CHWII
    (11, 1, 3, 2, '2026-01-18', 'S'),
    (11, 2, 4, 2, '2026-02-05', 'T'),
    (11, 4, 6, 3, '2026-03-18', 'S'),
    (11, 1, 3, 1, '2026-04-01', NULL),
    -- Lukas (12) - 2CHWII
    (12, 1, 3, 3, '2026-01-19', 'T'),
    (12, 2, 4, 4, '2026-02-08', 'S'),
    (12, 3, 5, 5, '2026-02-22', 'M'),
    -- Maria (13) - 2CHWII
    (13, 1, 3, 1, '2026-01-15', 'S'),
    (13, 2, 4, 2, '2026-01-28', 'T'),
    (13, 5, 3, 1, '2026-02-15', 'M'),
    (13, 1, 3, 1, '2026-03-10', NULL),
    (13, 4, 6, 2, '2026-03-20', 'S'),
    -- Niklas (14) - 2CHWII
    (14, 1, 3, 4, '2026-03-01', 'T'),
    (14, 2, 4, 3, '2026-03-15', 'S'),
    -- Olga (15) - 2CHWII
    (15, 1, 3, 2, '2026-03-05', 'S'),
    (15, 2, 4, 3, '2026-03-20', 'T'),
    (15, 3, 5, 2, '2026-04-01', 'M');
