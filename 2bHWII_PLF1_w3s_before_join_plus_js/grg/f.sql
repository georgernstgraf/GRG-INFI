SELECT
    *
FROM
    (
        SELECT
            DISTINCT city
        FROM
            customers
        ORDER BY
            city DESC
        LIMIT
            5
    )
ORDER BY
    city ASC;