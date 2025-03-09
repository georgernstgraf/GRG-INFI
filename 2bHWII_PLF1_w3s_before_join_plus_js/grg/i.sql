SELECT
    country
FROM
    customers
GROUP BY
    country
ORDER BY
    COUNT() DESC
LIMIT
    3;