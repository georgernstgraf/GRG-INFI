SELECT
    contactname
FROM
    customers
WHERE
    contactname LIKE '%tt%'
ORDER BY
    contactname DESC;