-- shows the table to display roles, the id, salary and the department they belong to
SELECT employee_role.id, employee_role.title, employee_role.salary, department.department_name
FROM employee_role
LEFT JOIN department on employee_role.department_id = department.id


-- views all employees, their ids, first names, last names, their title, salary, department they belong to and the name of their manager
SELECT employee.id, employee.first_name, employee.last_name, employee_role.title, employee_role.salary, department.department_name, CONCAT(manager.first_name,' ', manager.last_name) AS Manager
FROM employee 
LEFT JOIN employee_role ON employee.role_id = employee_role.id 
LEFT JOIN department on employee_role.department_id = department.id
LEFT JOIN employee manager on manager.id = employee.manager_id;


-- views current roles and its corresponding department
SELECT employee_role.id, employee_role.title, department.department_name
FROM employee_role
LEFT JOIN department on employee_role.department_id = department.id