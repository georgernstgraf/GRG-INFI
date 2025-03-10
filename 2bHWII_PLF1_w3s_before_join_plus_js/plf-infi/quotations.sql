PRAGMA foreign_keys = OFF;

BEGIN TRANSACTION;

DROP TABLE IF EXISTS aussagen;

CREATE TABLE aussagen (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quote TEXT NOT NULL,
    author TEXT NOT NULL,
    ranking integer NOT NULL
);

INSERT INTO
    aussagen
VALUES
    (
        1,
        'Ich weiß, dass ich nichts weiß.',
        'Sokrates',
        3
    );

INSERT INTO
    aussagen
VALUES
    (
        2,
        'Der Mensch ist das Maß aller Dinge.',
        'Protagoras',
        1
    );

INSERT INTO
    aussagen
VALUES
    (
        3,
        'Cogito, ergo sum. (Ich denke, also bin ich.)',
        'René Descartes',
        5
    );

INSERT INTO
    aussagen
VALUES
    (4, 'Gott ist tot.', 'Friedrich Nietzsche', 3);

INSERT INTO
    aussagen
VALUES
    (
        5,
        'Der Mensch ist zur Freiheit verurteilt.',
        'Jean-Paul Sartre',
        4
    );

INSERT INTO
    aussagen
VALUES
    (
        6,
        'Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.',
        'Ludwig Wittgenstein',
        3
    );

INSERT INTO
    aussagen
VALUES
    (
        7,
        'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.',
        'Immanuel Kant',
        3
    );

DELETE FROM
    sqlite_sequence;

INSERT INTO
    sqlite_sequence
VALUES
    ('aussagen', 7);

COMMIT;