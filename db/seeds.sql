-- Values for the department table
INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Sales"),
       ("Finance"),
       ("Legal");

-- Values for the employee_role table
INSERT INTO employee_role (title, salary, department_id)
VALUES ("Sales Lead", 80000, 2),
       ("Salesperson", 75000, 2),
       ("Lead Engineer", 150000, 1),
       ("Software Engineer", 120000, 1),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 25000, 4),
       ("Lawyer", 190000, 4);

-- Values for the employee table
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Dwight", "Schrute", 1000),
       ("Jim", "Halpert", 1001),
       ("Kelly", "Kapoor", 1002),
       ("Meredith", "Palmer", 1003),
       ("Angela", "Martin", 1004),
       ("Kevin","Malone", 1005),
       ("Creed", "Bratton", 1007),
       ("Darryl", "Philbin", 1007),
       ("Karen", "Filippelli", 1001),
       ("David", "Wallace", 1006),
       ("Jan", "Levinson", 1003),
       ("Stanley", "Hudson", 1001),
       ("Pam", "Beasley", 1001);

-- salesteam manager is Dwight Schrute
UPDATE employee
SET manager_id = 100
WHERE first_name = "Dwight";

UPDATE employee
SET manager_id = 100
WHERE first_name = "Jim";

UPDATE employee
SET manager_id = 100
WHERE first_name = "Stanley";

UPDATE employee
SET manager_id = 100
WHERE first_name = "Pam";

UPDATE employee
SET manager_id = 100
WHERE first_name = "Karen";

-- engineer manager Kelly Kapoor

UPDATE employee
SET manager_id = 102
WHERE first_name = "Kelly";

UPDATE employee
SET manager_id = 102
WHERE first_name = "Meredith";

UPDATE employee
SET manager_id = 102
WHERE first_name = "Jan";

-- Account manager is Angela Martin

UPDATE employee
SET manager_id = 104
WHERE first_name = "Angela";

UPDATE employee
SET manager_id = 104
WHERE first_name = "Kevin";

-- Legal team manager is David Wallace

UPDATE employee
SET manager_id = 109
WHERE first_name = "David";

UPDATE employee
SET manager_id = 109
WHERE first_name = "Creed";

UPDATE employee
SET manager_id = 109
WHERE first_name = "Darryl";



