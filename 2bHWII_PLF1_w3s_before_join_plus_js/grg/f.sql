SELECT
    COUNT() AS ordersfrom1997
FROM
    orders
WHERE
    orderdate >= '1997-01-01';