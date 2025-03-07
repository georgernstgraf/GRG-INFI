CREATE TABLE Students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age > 0)
);

INSERT INTO
    Students (id, name, age)
VALUES
    (1, 'Robert', 12);

INSERT INTO
    students
VALUES
    (2, 'Georg', 54);

INSERT INTO
    students
VALUES
    (2, 'Andi', 45);