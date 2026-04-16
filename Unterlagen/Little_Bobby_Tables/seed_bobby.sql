CREATE TABLE if not exists Students (
    id integer PRIMARY KEY autoincrement,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age > 0)
);

INSERT INTO
    Students (name, age)
VALUES
    ('Robert', 12);

INSERT INTO
    students (name, age)
VALUES
    ('Georg', 54);

INSERT INTO
    students (name, age)
VALUES
    ('Andi', 45);
