-- ============================================================
-- Übungs-Datenbank: WHERE vs HAVING, COUNT, Self-JOIN, ORDER BY
-- Für die Stunde am 30. April 2026, 2ahwii
-- ============================================================

-- Tabelle: person (enthält doppelte E-Mail-Adressen!)
DROP TABLE IF EXISTS person;
CREATE TABLE person (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    vorname     TEXT    NOT NULL,
    nachname    TEXT    NOT NULL,
    email       TEXT,
    stadt       TEXT,
    alter_jahre INTEGER
);

INSERT INTO person (vorname, nachname, email, stadt, alter_jahre) VALUES
    ('Anna',     'Müller',   'anna.mueller@mail.at',     'Wien',      17),
    ('Bernhard', 'Gruber',   'bernhard.gruber@mail.at',  'Graz',      16),
    ('Clara',    'Müller',   'anna.mueller@mail.at',     'Linz',      17),
    ('David',    'Huber',    'david.huber@mail.at',      'Wien',      18),
    ('Eva',      'Bauer',    'eva.bauer@mail.at',        'Salzburg',  16),
    ('Felix',    'Wagner',   'felix.wagner@mail.at',     'Wien',      17),
    ('Greta',    'Huber',    'greta.huber@mail.at',      'Graz',      15),
    ('Hans',     'Bauer',    'eva.bauer@mail.at',        'Linz',      18),
    ('Iris',     'Schmidt',  'iris.schmidt@mail.at',     'Wien',      17),
    ('Jakob',    'Fischer',  'jakob.fischer@mail.at',    'Graz',      16),
    ('Klara',    'Wagner',   'klara.wagner@mail.at',     'Salzburg',  17),
    ('Lukas',    'Gruber',   'bernhard.gruber@mail.at',  'Wien',      15),
    ('Maria',    'Fischer',  'maria.fischer@mail.at',    'Linz',      18),
    ('Niklas',   'Schmidt',  'niklas.schmidt@mail.at',   'Graz',      17),
    ('Olga',     'Müller',   'olga.mueller@mail.at',     'Wien',      16),
    ('Paul',     'Bauer',    'paul.bauer@mail.at',       'Salzburg',  17),
    ('Quentin',  'Huber',    'quentin.huber@mail.at',    'Linz',      18),
    ('Rosa',     'Wagner',   'rosa.wagner@mail.at',      'Wien',      16),
    ('Stefan',   'Müller',   'stefan.mueller@mail.at',   'Graz',      17),
    ('Theresa',  'Fischer',  'theresa.fischer@mail.at',  'Wien',      18);

-- Tabelle: mitarbeiter (enthält Hierarchie über chef_id)
DROP TABLE IF EXISTS mitarbeiter;
CREATE TABLE mitarbeiter (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT    NOT NULL,
    abteilung   TEXT    NOT NULL,
    gehalt      REAL    NOT NULL,
    chef_id     INTEGER,
    FOREIGN KEY (chef_id) REFERENCES mitarbeiter(id)
);

INSERT INTO mitarbeiter (name, abteilung, gehalt, chef_id) VALUES
    -- Geschäftsführung (kein Chef)
    ('Frau Dr. Huber',    'GF',       8000,  NULL),
    -- IT-Abteilung
    ('Herr Mayer',        'IT',       5000,  1),
    ('Frau Schwarz',      'IT',       4200,  2),
    ('Herr Winkler',      'IT',       3800,  2),
    -- Vertrieb
    ('Frau Berger',       'Vertrieb', 4500,  1),
    ('Herr Steiner',      'Vertrieb', 3900,  5),
    ('Frau Lechner',      'Vertrieb', 3600,  5),
    -- HR
    ('Herr Graf',         'HR',       4800,  1),
    ('Frau Egger',        'HR',       3500,  8);

-- Tabelle: kunde
DROP TABLE IF EXISTS kunde;
CREATE TABLE kunde (
    id    INTEGER PRIMARY KEY AUTOINCREMENT,
    name  TEXT    NOT NULL,
    stadt TEXT    NOT NULL,
    land  TEXT    NOT NULL
);

INSERT INTO kunde (name, stadt, land) VALUES
    ('TechCorp',      'Wien',      'Österreich'),
    ('DataSoft',      'Graz',      'Österreich'),
    ('CloudNet',      'München',   'Deutschland'),
    ('AlpineTech',    'Innsbruck', 'Österreich'),
    ('WebDesign24',   'Salzburg',  'Österreich'),
    ('ByteForge',     'Berlin',    'Deutschland'),
    ('NetWorks',      'Zürich',    'Schweiz'),
    ('SiliconAlps',   'Graz',      'Österreich');

-- Tabelle: produkt
DROP TABLE IF EXISTS produkt;
CREATE TABLE produkt (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT    NOT NULL,
    kategorie TEXT    NOT NULL,
    preis     REAL    NOT NULL
);

INSERT INTO produkt (name, kategorie, preis) VALUES
    ('Laptop Pro',       'Hardware', 1299.99),
    ('Wireless Maus',    'Hardware', 29.99),
    ('USB Stick 64GB',   'Hardware', 12.99),
    ('Office Suite',     'Software', 149.99),
    ('Antivirus Pro',    'Software', 49.99),
    ('Monitor 27"',      'Hardware', 349.99),
    ('Tastatur RGB',     'Hardware', 89.99),
    ('Cloud Backup',     'Software', 59.99),
    ('Webcam HD',        'Hardware', 69.99),
    ('VPN Client',       'Software', 39.99);

-- Tabelle: bestellung (enthält NULL-Werte bei bewertung!)
DROP TABLE IF EXISTS bestellung;
CREATE TABLE bestellung (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    kunde_id   INTEGER NOT NULL,
    produkt_id INTEGER NOT NULL,
    menge      INTEGER NOT NULL,
    datum      TEXT    NOT NULL,
    bewertung  INTEGER,
    FOREIGN KEY (kunde_id)   REFERENCES kunde(id),
    FOREIGN KEY (produkt_id) REFERENCES produkt(id)
);

INSERT INTO bestellung (kunde_id, produkt_id, menge, datum, bewertung) VALUES
    (1, 1, 2,  '2026-01-15', 5),
    (1, 4, 1,  '2026-01-20', NULL),
    (2, 6, 3,  '2026-02-01', 4),
    (2, 7, 5,  '2026-02-03', 4),
    (3, 2, 10, '2026-02-10', 3),
    (3, 3, 20, '2026-02-12', NULL),
    (4, 1, 1,  '2026-02-15', 5),
    (4, 5, 2,  '2026-02-18', NULL),
    (5, 8, 1,  '2026-03-01', 4),
    (5, 10, 3, '2026-03-05', NULL),
    (6, 1, 4,  '2026-03-10', 5),
    (6, 9, 2,  '2026-03-12', 3),
    (7, 4, 2,  '2026-03-15', 4),
    (7, 6, 1,  '2026-03-18', NULL),
    (8, 7, 6,  '2026-03-20', 5),
    (1, 6, 1,  '2026-03-25', 4),
    (2, 1, 2,  '2026-04-01', 5),
    (3, 4, 1,  '2026-04-05', NULL),
    (4, 7, 3,  '2026-04-10', 3),
    (5, 2, 8,  '2026-04-15', 4);
