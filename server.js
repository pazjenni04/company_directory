const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: DB_PASSWORD,
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

//create view all employees function
function viewEmployees() {
  app.get("/api/employee", (req, res) => {
    db.query("SELECT * FROM employee", function (err, results) {
      console.log(results);
    });
  });
}

//create add employee function
function addEmployee() {
  db.query(
    "INSERT INTO employee (id, first_name, last_name, role_id, manager_id VALUES `${employee.employeeID}, ${employee.employeeFirst}, ${employee.employeeLast}, ${employee.employeeRoleId};`",
    function (err, results) {
      console.log(results);
    }
  );
}

//view all roles function
function allRoles() {
  app.get("/api/roles", (req, res) => {
    db.query("SELECT * FROM employee_roles", function (err, results) {
      console.log(results);
    });
  });
}

//view all departments function
function allDepartments() {
  app.get("/api/department", (req, res) => {
    db.query("SELECT * FROM department", function (err, results) {
      console.log(results);
    });
  });
}

module.exports = addEmployee();
