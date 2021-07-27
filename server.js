const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "Paznunez$7294",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

// turn on connection to db and server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
