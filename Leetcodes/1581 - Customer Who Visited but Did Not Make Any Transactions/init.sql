CREATE TABLE visits (visit_id int, customer_id int);

INSERT INTO
    visits
VALUES
    (1, 23),
    (2, 9),
    (4, 30),
    (5, 54),
    (6, 96),
    (7, 54),
    (8, 54);

CREATE TABLE transactions (transaction_id int, visit_id int, amount int);

INSERT INTO
    transactions
VALUES
    (2, 5, 310),
    (3, 5, 300),
    (9, 5, 200),
    (12, 1, 910),
    (13, 2, 970);