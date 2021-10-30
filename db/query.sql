--  put into functions to export
SELECT
    department.department_name AS department,
FROM
    department
LEFT JOIN    
    companyRole ON department.department_id = companyRole.department_id;

SELECT
    employees.role_id AS role_id, 
    companyRole.id AS id
FROM
    employees
JOIN 
    companyRole ON employees.role_id = companyRole.role_id;

-- SELECT
--     employees.manager_id AS manager_id,
--     employees.id AS id
-- FROM 
--     employees
-- JOIN
    