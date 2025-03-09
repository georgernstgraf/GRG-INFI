DROP TABLE IF EXISTS cinema;

CREATE TABLE cinema (
    id INTEGER PRIMARY KEY,
    movie TEXT,
    description TEXT,
    rating REAL
);

INSERT INTO
    cinema (id, movie, description, rating)
VALUES
    (1, 'War', 'great 3D', 8.9);

INSERT INTO
    cinema (id, movie, description, rating)
VALUES
    (2, 'Science', 'fiction', 8.5);

INSERT INTO
    cinema (id, movie, description, rating)
VALUES
    (3, 'irish', 'langweilig', 6.2);

INSERT INTO
    cinema (id, movie, description, rating)
VALUES
    (4, 'Ice song', 'Fantacy', 8.6);

INSERT INTO
    cinema (id, movie, description, rating)
VALUES
    (5, 'House card', 'Interesting', 9.1);