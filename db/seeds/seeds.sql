INSERT INTO department (department_id, department_name)
VALUES  (1, "Sales"),
        (2, "Administration"),
        (3, "Information Technology");

INSERT INTO role (role_id, title, salary, department_id)
VALUES  (1, "Engineer", 150000, 3),
        (2, "Salesperson", 105000, 1),
        (3, "Developer", 180000, 3),
        (4, "Human Resources Representative", 80000, 2),
        (5, "Manager", 140000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Charmaine", "Walton", 1, 5),
        ("Katharine", "Welsh", 2, 5),
        ("Francis", "Randall", 3, 5),
        ("Amelia-Rose", "Thorne", 4, 5),
        ("Ruqayyah", "Irving", 5),
        ("Bronwyn", "Hirst", 1, 10),
        ("Frederick", "Hall", 2, 10),
        ("Daniel", "Atkins", 3, 10),
        ("Zaid", "Rigley", 4, 10),
        ("Laurel", "Gutierrez", 5);
