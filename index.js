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

        case "View All Departments":
          allDepartments();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Add Department":
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
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    generateTask();
  });
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
        },
        {
          name: "employeeFirst",
          type: "input",
          message: "What is the employee's first name?",
        },
        {
          name: "employeeLast",
          type: "input",
          message: "What is the employee's last name?",
        },
        {
          name: "employeeManager",
          type: "list",
          message: "Who is the employee's manager?",
          choices: [
            {
              name: "Dwight Shrute",
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
  db.query("SELECT * FROM employee_role", function (err, results) {
    console.table(results);
    generateTask();
  });
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
  db.query("SELECT * FROM employee_role;", function (err, results) {
    console.table(results);

    inquirer
      .prompt([
        {
          name: "titleRole",
          type: "input",
          message: "What's the title of the new role?",
        },
        {
          name: "salaryRole",
          type: "input",
          message: "What's the salary for this role?",
        },
        {
          name: "departmentRole",
          type: "list",
          message: "What department does this role belong to?",
          choices: [
            {
              name: "Engineering",
              value: 1,
            },
            {
              name: "Sales",
              value: 2,
            },
            {
              name: "Finance",
              value: 3,
            },
            {
              name: "Legal",
              value: 4,
            },
          ],
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

//deletes department
function deleteDepartment() {
  db.query("SELECT * FROM department;", function (err, results) {
    console.log(err);
    console.log(results);
    console.table(results);
    let departmentslist = results.map((departments) => {
      return {
        name: departments.department_name,
        value: departments.id,
      };
    });

    // inquirer
    //   .prompt([
    //     {
    //       name: "editDepartment",
    //       type: "list",
    //       message: "Please select the department you would like to remove.",
    //       choices: departmentslist,
    //     },
    //   ])
    //   .then((removedDep) => {
    //     db.query(
    //       `DELETE FROM department WHERE id = ${removedDep.editDepartment}`,
    //       function (err, results) {
    //         console.table(results);
    //         generateTask();
    //       }
    //     );
    //   });
  });
}

// quit function
function quit() {
  db.end();
  console.log("Goodbye");
}
