PRAGMA foreign_keys = OFF;

BEGIN TRANSACTION;

CREATE TABLE sales (
    sale_id int,
    product_id int,
    year int,
    quantity int,
    price int
);

INSERT INTO
    sales
VALUES
    (1, 100, 2008, 10, 5000);

INSERT INTO
    sales
VALUES
    (2, 100, 2009, 12, 5000);

INSERT INTO
    sales
VALUES
    (3, 200, 2011, 15, 9000);

CREATE TABLE product (product_id int, product_name text);

INSERT INTO
    product
VALUES
    (100, 'Nokia');

INSERT INTO
    product
VALUES
    (200, 'Apple');

INSERT INTO
    product
VALUES
    (300, 'Samsung');

COMMIT;