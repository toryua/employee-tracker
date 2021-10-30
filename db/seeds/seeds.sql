INSERT INTO department (department_name)
VALUES  ("Sales"),
        ("Administration"),
        ("Information Technology");

INSERT INTO companyRole (title, salary, department_id)
VALUES  ("Engineer", 150000, 3),
        ("Salesperson", 105000, 1),
        ("Developer", 180000, 3),
        ("Human Resources Representative", 80000, 2),
        ("Manager", 140000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Charmaine", "Walton", 5, NULL),
        ("Katharine", "Welsh", 2, 1),
        ("Francis", "Randall", 3, 1),
        ("Amelia-Rose", "Thorne", 4, 1),
        ("Ruqayyah", "Irving", 1, 1),
        ("Bronwyn", "Hirst", 5, NULL),
        ("Frederick", "Hall", 2, 6),
        ("Daniel", "Atkins", 3, 6),
        ("Zaid", "Rigley", 4, 6),
        ("Laurel", "Gutierrez", 1, 6);
