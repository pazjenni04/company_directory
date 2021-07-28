-- Values for the department table
INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Sales"),
       ("Finance"),
       ("Legal");

-- Values for the employee_role table
INSERT INTO employee_role (id, title, salary, department_id)
VALUES (4000, "Sales Lead", 80000, 2),
       (4001, "Salesperson", 75000, 2),
       (5000, "Lead Engineer", 150000, 1),
       (5001, "Software Engineer", 120000, 1),
       (6000, "Account Manager", 160000, 3),
       (6001, "Accountant", 125000, 3),
       (7000, "Legal Team Lead", 25000, 4),
       (7001, "Lawyer", 190000, 4);

-- Values for the employee table
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (123, "Dwight", "Schrute", 4000, 123),
       (124, "Jim", "Halpert", 4001, 123),
       (125, "Kelly", "Kapoor", 5000, 125),
       (126, "Meredith", "Palmer", 5001, 125),
       (127, "Angela", "Martin", 6000, 127),
       (128, "Kevin","Malone", 6001, 127),
       (129, "Creed", "Bratton", 7000, 132),
       (130, "Darryl", "Philbin", 7000, 132),
       (131, "Karen", "Filippelli", 4001, 123),
       (132, "David", "Wallace", 7001, 132),
       (133, "Jan", "Levinson", 7001, 132),
       (134, "Stanley", "Hudson", 4001, 123),
       (135, "Pam", "Beasley", 4001, 123);

