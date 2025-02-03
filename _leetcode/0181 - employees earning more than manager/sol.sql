SELECT
    name AS Employee
FROM
    employee e
WHERE
    e.salary > (
        SELECT
            salary
        FROM
            employee
        WHERE
            id = e.managerid
    );

-- not performance optimal