SELECT
    department.department_name AS department_name,
    role.department_id AS department_id
FROM
    department
JOIN    
    role ON department.department_id = role.department_id;

SELECT
    employees.role_id AS role_id, 
    role.id AS id
FROM
    employees
JOIN 
    role ON employees.role_id = role.role_id;

-- SELECT
--     employees.manager_id AS manager_id,
--     employees.id AS id
-- FROM 
--     employees
-- JOIN
    