require("dotenv").config();
const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoletable = require("console.table");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: process.env.DB_PASSWORD,
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

//inquirer prompts that will determine which function to execute
function generateTask() {
  inquirer
    .prompt([
      {
        name: "mainmenu",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "Delete Role",
          "View All Departments",
          "Add Department",
          "Delete Department",
          "Quit",
        ],
      },
    ])
    .then((response) => {
      switch (response.mainmenu) {
        case "View Employees":
          viewEmployees();
          break;

        case "Add Employee":
          addedEmployeeInfo();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "View All Roles":
          allRoles();
          break;

        case "Add Role":
          addRole();
          break;

        case "Delete Role":
          deleteRole();
          break;

        case "View All Departments":
          allDepartments();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Delete Department":
          deleteDepartment();
          break;

        case "Quit":
          quit();
          break;
      }
    });
}

generateTask();

function viewEmployees() {
  db.query(
    "SELECT employee.id, employee.first_name, employee.last_name, employee_role.title, employee_role.salary, department.department_name, CONCAT(manager.first_name,' ', manager.last_name) AS Manager FROM employee LEFT JOIN employee_role ON employee.role_id = employee_role.id LEFT JOIN department on employee_role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;",
    function (err, results) {
      console.table(results);
      generateTask();
    }
  );
}

//run prompts if choose add employee
function addedEmployeeInfo(employee) {
  db.query("SELECT id, title FROM employee_role", (err, results) => {
    console.table(results);

    inquirer
      .prompt([
        {
          name: "employeeRoleId",
          type: "input",
          message: "What is the employee's role ID? (see above table)",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              return "Please insert a valid input.";
            }
          },
        },
        {
          name: "employeeFirst",
          type: "input",
          message: "What is the employee's first name?",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              return "Please insert a valid input.";
            }
          },
        },
        {
          name: "employeeLast",
          type: "input",
          message: "What is the employee's last name?",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              return "Please insert a valid input.";
            }
          },
        },
        {
          name: "employeeManager",
          type: "list",
          message: "Who is the employee's manager?",
          choices: [
            {
              name: "Dwight Schrute",
              value: 100,
            },
            {
              name: "Kelly Kapoor",
              value: 102,
            },
            {
              name: "Angela Martin",
              value: 104,
            },
            {
              name: "David Wallace",
              value: 109,
            },
          ],
        },
      ])
      .then((employeeResponse) => {
        db.query(
          `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${employeeResponse.employeeFirst}", "${employeeResponse.employeeLast}", ${employeeResponse.employeeRoleId}, ${employeeResponse.employeeManager});`,
          function (err, results) {
            console.table(results);
            console.log(err);
          }
        );
        generateTask();
      });
  });
}

//view all roles function
function allRoles() {
  db.query(
    "SELECT employee_role.id, employee_role.title, employee_role.salary, department.department_name FROM employee_role LEFT JOIN department on employee_role.department_id = department.id;",
    function (err, results) {
      console.table(results);
      generateTask();
    }
  );
}

//view all departments function
function allDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    generateTask();
  });
}

//update employee role function
function updateEmployeeRole() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    let employeesChoices = results.map((employee) => {
      return {
        name: employee.first_name,
        value: employee.id,
      };
    });

    inquirer
      .prompt([
        {
          name: "updateEmployee",
          type: "list",
          choices: employeesChoices,
        },
        {
          name: "newRole",
          type: "list",
          message: "Please select a new role for the employee.",
          choices: [
            {
              name: "Sales Lead",
              value: 1000,
            },
            {
              name: "Salesperson",
              value: 1001,
            },
            {
              name: "Lead Engineer",
              value: 1002,
            },
            {
              name: "Software Engineer",
              value: 1003,
            },
            {
              name: "Account Manager",
              value: 1004,
            },
            {
              name: "Accountant",
              value: 1005,
            },
            {
              name: "Legal Team Lead",
              value: 1006,
            },
            {
              name: "Lawyer",
              value: 1007,
            },
          ],
        },
      ])
      .then((updateResponse) => {
        db.query(
          `UPDATE employee SET role_id = ${updateResponse.newRole} WHERE id = ${updateResponse.updateEmployee};`
        );
        console.table(results);
        generateTask();
      });
  });
}

//add role funtion
function addRole() {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    let existingDepartments = results.map((departments) => {
      return {
        name: departments.department_name,
        value: departments.id,
      };
    });

    inquirer
      .prompt([
        {
          name: "titleRole",
          type: "input",
          message: "What's the title of the new role?",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              return "Please insert a valid input.";
            }
          },
        },
        {
          name: "salaryRole",
          type: "input",
          message: "What's the salary for this role?",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              return "Please insert a valid input.";
            }
          },
        },
        {
          name: "departmentRole",
          type: "list",
          message: "What department does this role belong to?",
          choices: existingDepartments,
        },
      ])
      .then((addedRole) => {
        db.query(
          `INSERT INTO employee_role (title, salary, department_id) VALUES ("${addedRole.titleRole}", "${addedRole.salaryRole}", "${addedRole.departmentRole}");`,
          function (err, results) {
            console.table(results);
            generateTask();
          }
        );
      });
  });
}

//add department function
function addDepartment() {
  db.query("SELECT * from department", function (err, results) {
    console.table(results);

    inquirer
      .prompt([
        {
          name: "newDepartment",
          type: "input",
          message: "What is the name of the new department?",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              return "Please insert a valid input.";
            }
          },
        },
      ])
      .then((addDepartment) => {
        db.query(
          `INSERT INTO department (department_name) VALUES ("${addDepartment.newDepartment}");`,
          function (err, results) {
            console.table(results);
            generateTask();
          }
        );
      });
  });
}

//deletes department from list
function deleteDepartment() {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    let departmentlist = results.map((departments) => {
      return {
        name: departments.department_name,
        value: departments.id,
      };
    });

    inquirer
      .prompt([
        {
          name: "selectDepartment",
          type: "list",
          message: "Please select the department you would like to remove.",
          choices: departmentlist,
        },
      ])
      .then((deletedDepartment) => {
        db.query(
          `DELETE FROM department WHERE department.id = ${deletedDepartment.selectDepartment};`,
          function (err, results) {
            console.table(results);
            generateTask();
          }
        );
      });
  });
}

//deletes role from the list
function deleteRole() {
  db.query("SELECT * FROM employee_role", function (err, results) {
    console.table(results);
    let rolelist = results.map((roles) => {
      return {
        name: roles.title,
        value: roles.id,
      };
    });

    inquirer
      .prompt([
        {
          name: "selectRole",
          type: "list",
          message: "Please select the role you would like to remove.",
          choices: rolelist,
        },
      ])
      .then((deletedRole) => {
        db.query(
          `DELETE FROM department WHERE department.id = ${deletedRole.selectRole};`,
          function (err, results) {
            console.table(results);
            generateTask();
          }
        );
      });
  });
}

// quit function
function quit() {
  db.end();
  console.log("Goodbye");
}
