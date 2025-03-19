CREATE TABLE employee (
    id INTEGER,
    name TEXT,
    salary INTEGER,
    managerid INTEGER
);

INSERT INTO
    employee (id, name, salary, managerid)
VALUES
    (1, 'Joe', 70000, 3),
    (2, 'Henry', 80000, 4),
    (3, 'Sam', 60000, NULL),
    (4, 'Max', 90000, NULL);