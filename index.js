const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoletable = require("console.table");
const fs = require("fs");
const { listenerCount } = require("events");
const Choices = require("inquirer/lib/objects/choices");

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
          // "Quit",
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

        //   case "Quit":
        //     quit();
        //     break;
      }
    });
}

generateTask();

//run prompts if choose add employee
function addedEmployeeInfo(employee) {
  inquirer.prompt([
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
      name: "employeeRoleId",
      type: "list",
      message: "What is the employee's role ID?",
      choices: ["4000", "4001", "5000", "5001", "6000", "6001", "7000", "7001"],
    },
  ]);
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

//quit function
// function quit() {

// }
