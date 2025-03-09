SELECT
    firstname,
    lastname
FROM
    employees
WHERE
    BirthDate IS (
        SELECT
            MAX(BirthDate)
        FROM
            employees
    );