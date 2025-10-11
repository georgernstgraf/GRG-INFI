CREATE TABLE `person` (
    `personid` INTEGER,
    `lastname` TEXT,
    `firstname` TEXT
);

INSERT INTO
    person
VALUES
    (1, 'Wang', 'Allen');

INSERT INTO
    person
VALUES
    (2, 'Alice', 'Bob');

CREATE TABLE address (
    addressid integer,
    personid int,
    city text,
    state text
);

INSERT INTO
    address
VALUES
    (1, 2, 'New York City', 'New York');

INSERT INTO
    address
VALUES
    (2, 3, 'Leetcode', 'California');