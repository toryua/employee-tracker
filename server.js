const mysql = require('mysql2');
const cTable = require('console.table');
const PORT = process.env.PORT || 3001;
const inquirer = require('inquirer');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: passwords.env.DB_USER,
        password: passwords.env.DB_PASS,
        database: 'employees_db'
    },
    console.log("Connected to the employee_db database")
);

console.table([
    {
        id:
    
    }
])