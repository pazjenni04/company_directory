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
          // "Add Employee",
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

        // case "Add Employee":
        //   addEmployee();
        //   break;

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

//create view all employees function
function viewEmployees() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.log(results);
  });
}

//create add employee function
// function addEmployee() {
//   db.query("INSERT INTO employee", function (err, results) {
//     console.log(results);
//   });
// };

//update employee role function
// function updateEmployeeRole() {
// db.query("INSERT INTO employee", function (err, results) {
//   console.log(results);
// });
// };

//view all roles function
function allRoles() {
  db.query("SELECT * FROM employee_roles", function (err, results) {
    console.log(results);
  });
}

//add role funtion
// function addRole() {

// };

//view all departments function
function allDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    console.log(results);
  });
}

//add department function
// function addDepartment() {

// }

//quit function
// function quit() {

// }
