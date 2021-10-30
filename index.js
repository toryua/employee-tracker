const mysql = require('mysql2');
const cTable = require('console.table');
const PORT = process.env.PORT || 3001;
const inquirer = require('inquirer');
const db = require('./db');
const conn = require('./db/connection');
const { addDepartment } = require('./db');
require('dotenv').config

employeePrompts = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'initialPrompt',
            message: 'Please select an option:',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role'],
        }])
        .then(data => {
            let response = data.userResponse;
            console.log(data.initialPrompt);
            switch (data.initialPrompt) {
                case 'View All Departments':
                    db.viewAllDepartments().then(data => {
                        console.table(data)
                    })
                    break;
                case 'View All Roles':
                    db.viewAllRoles().then(data => {
                        console.table(data)
                    })
                    break;
                case 'View All Employees':
                        db.findAllEmployees().then(data => {
                            console.table(data)
                        })
                        break;
                case 'Add An Employee':
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'first_name',
                            message: 'Enter the first name: '

                        },
                        {
                            type: 'input',
                            name: 'last_name',
                            message: 'Enter the last name: '

                        },
                        {
                            type: 'list',
                            name: 'role_id',
                            message: 'Enter the employee role:',
                            choices: [
                                    {name: "Engineer", value: 1},
                                    {name: "Salesperson", value: 2},
                                    {name: "Developer", value: 3},
                                    {name: "Human Resources Representative", value: 4},                              
                                    {name: "Manager", value: 5}
                            ]
                        },
                        {
                            type: 'list',
                            name: 'manager_id',
                            message: 'Choose the manager name:',
                            choices: [
                                    {name: "Charmaine", value: 1},
                                    {name: "Bronwyn", value: 6}
                            ]
                        },


                    ])
                        .then((answer) => {
                            console.log(answer)
                            db.addEmployee(answer)
                            db.findAllEmployees().then(data => {
                                console.table(data)
                            })
                            
                        }
                        )
                        break;
                case 'Add A Role':
                            inquirer.prompt([
                                {
                                    type: 'input',
                                    name: 'title',
                                    message: 'Enter the Role Name:' 
                                },
                                {
                                    type: 'input',
                                    name: 'salary',
                                    message: 'Enter the annual salary (numbers only)',
                                },
                                {
                                    type: 'list',
                                    name: 'department_id',
                                    message: 'Choose the Department',
                                    choices: [
                                        {name: 'Sales', value: 1},
                                        {name:'Administration', value: 2},
                                        {name:'Information Technology', value: 3}
                                    ],
                                }
                            ])
                            .then((answer) => {
                                console.log(answer)
                                db.addRole(answer)
                                db.viewAllRoles().then(data => {
                                    console.table(data)
                                })
                                
                            }
                            )
                            break;
                case 'Add A Department':                
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'department_name',
                            message: 'Enter the new department name: ',
                        },
                    ])
                    .then((answer) => {
                        db.addDepartment(answer)
                        db.viewAllDepartments().then(data => {
                            console.table(data)
                        })
                    })
                    break;
                case 'Update An Employee Role':
                    db.findAllEmployees().then(data => {
                        console.table(data)
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'employeeId',
                            message: 'Which employee ID do you want to update?'
                        },
                        {
                            type: 'list',
                            name: 'role_id',
                            message: 'What is the updated role for the employee?',
                            choices: [
                                {name: "Engineer", value: 1},
                                {name: "Salesperson", value: 2},
                                {name: "Developer", value: 3},
                                {name: "Human Resources Representative", value: 4},
                                {name: "Manager", value: 5}                            
                            ]
                        },
                    ])
                    .then((answer) => {
                        console.log(answer)
                        return this.connection.promise(answer).query(
                                'UPDATE employees SET role_id = role_id WHERE ' + employeeId, answer
                        )
                        })
                    .then(data => {
                            console.table(data)
                        })    
                    })}
                    }
                )}




    employeePrompts();