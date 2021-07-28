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
          // "Update Employee Role",
          "View All Roles",
          // "Add Role",
          "View All Departments",
          // "Add Department",
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

        // case "Update Employee Role":
        //   updateEmployeeRole();
        //   break;

        case "View All Roles":
          allRoles();
          break;

        // case "Add Role":
        //   addRole();
        //   break;

        case "View All Departments":
          allDepartments();
          break;

        // case "Add Department":
        //   addDepartment();
        //   break;

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
  });
  generateTask();
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
          name: "employeeID",
          type: "input",
          message: "What is the employee's ID?",
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
            "Dwight Shrute",
            "Kelly Kapoor",
            "Angela Martin",
            "David Wallace",
          ],
        },
      ])
      .then((employeeResponse) => {
        db.query(
          "INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES(`${employeeResponse.employeeID}`, `${employeeResponse.employeeFirst}`, `${employeeResponse.employeeLast}`, `${employeeResponse.employeeRoleId}`, `${employeeResponse.employeeManager}`",
          function (err, results) {
            console.table(employeeResponse);
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
  });
  generateTask();
}

//view all departments function
function allDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
  });
  generateTask();
}

//update employee role function
// function updateEmployeeRole() {
// db.query("INSERT INTO employee", function (err, results) {
//   console.log(results);
// });
// };

//add role funtion
// function addRole() {

// };

//add department function
// function addDepartment() {

// }

// quit function
function quit() {
  db.query("quit", function (err, results) {
    console.log("Goodbye");
  });
}
