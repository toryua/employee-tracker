const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'employees_db'
    },
    console.log("Connected to the employee_db database")
);

db.connect((err) => {
    if (err) {
        console.log(err);
    }
});
module.exports = db;