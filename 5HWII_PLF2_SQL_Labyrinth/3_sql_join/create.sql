DROP TABLE IF EXISTS Person;

CREATE TABLE Person (
    personId int,
    firstName varchar(255),
    lastName varchar(255)
);

DROP TABLE IF EXISTS Address;

CREATE TABLE Address (
    addressId int,
    personId int,
    city varchar(255),
    state varchar(255)
);

INSERT INTO
    Person (personId, lastName, firstName)
VALUES
    ('1', 'Wang', 'Allen');

INSERT INTO
    Person (personId, lastName, firstName)
VALUES
    ('2', 'Alice', 'Bob');

INSERT INTO
    Address (addressId, personId, city, state)
VALUES
    ('1', '2', 'New York City', 'New York');

INSERT INTO
    Address (addressId, personId, city, state)
VALUES
    ('2', '3', 'Leetcode', 'California');