const conn = require('./connection.js')

class DB {
    constructor(connection) {
        this.connection = connection
    }

    findAllEmployees() {
        return this.connection.promise().query(
               'SELECT employees.id, employees.first_name, employees.last_name, ' +
                'companyRole.title, department.department_name AS department, ' + 
                'companyRole.salary, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employees LEFT JOIN companyRole ON employees.role_id = companyRole.id ' +
                'LEFT JOIN department ON companyRole.department_id = department.id ' +
                'LEFT JOIN employees manager ON manager.id = employees.manager_id'
                ).then(([results])  => {console.table(results);

        });
    };
    viewAllRoles() {
        return this.connection.promise().query(
            'SELECT companyRole.title, companyRole.salary, department.department_name AS department FROM companyRole LEFT JOIN department ON companyRole.department_id = department.id').then(([results]) => {
                console.table(results);
        });
    };

    viewAllDepartments() {
        return this.connection.promise().query(
            'SELECT * FROM `department`').then(([results]) => {
                console.table(results);
        });
    };

    updateRole(role) {
        return this.connection.promise().query(
            'UPDATE companyRole SET companyRole.title WHERE ' + (role), role

        )
    }

    addEmployee(added) {
        return this.connection.promise().query(
            'INSERT INTO employees SET ?', added
        )
    }

    addDepartment(dept) {
        return this.connection.promise().query(
            'INSERT INTO department SET ?', dept
        )
    }

    addRole(role) {
        return this.connection.promise().query(
            'INSERT INTO companyRole SET ?', role
        )
    }
    

};

module.exports = new DB(conn)