SELECT
    productname,
    price
FROM
    products
WHERE
    price = (
        SELECT
            MIN(price)
        FROM
            products
    )
    OR price = (
        SELECT
            MAX(price)
        FROM
            products
    )
ORDER BY
    productname ASC;