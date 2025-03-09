SELECT
    *
FROM
    cinema
WHERE
    description <> 'langweilig'
    AND (id % 2 = 1)
ORDER BY
    rating DESC;