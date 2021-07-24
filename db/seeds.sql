-- Values for the department table
INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Sales"),
       ("Finance"),
       ("Legal"),

-- Values for the employee_role table
INSERT INTO employee_role (title, salary, department_id)
VALUES ("Sales Lead", 80000),
       ("Salesperson", 75000),
       ("Lead Engineer", 150000),
       ("Software Engineer", 120000),
       ("Account Manager", 160000),
       ("Accountant", 125000),
       ("Legal Team Lead", 25000),
       ("Lawyer", 190000);

-- Values for the employee table
-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Rebecca", "Davis", 40001),
--        ("Salesperson", 75000),
--        ("Lead Engineer", 150000),
--        ("Software Engineer", 120000),
--        ("Account Manager", 160000),
--        ("Accountant", 125000),
--        ("Legal Team Lead", 25000),
--        ("Lawyer", 190000);