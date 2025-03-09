SELECT
    COUNT(*) AS anzahl
FROM
    customers
WHERE
    ContactName LIKE '%tt%';