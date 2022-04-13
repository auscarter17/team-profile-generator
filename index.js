const inquirer = require('inquirer');
const fs = require('fs');

// array to store members of team
team = [];

// questions 
const employeeQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: `What is the employee's name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter employee name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the employee's ID?`,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ("Please enter employee ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the employee's email address?`,
            validaite: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`Please enter employee's email address.`);
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: `What is the employee's role?`,
            choices: [
                'Manager',
                'Engineer',
                'Intern'
            ]
        }
    ])
}

// questions to determine role of next employee input
const roleDecision = () => {
    inquirer.prompt(employeeQuestions).then((answers) => {
        if 
        (answers.employee === 'Manager') {
            managerQuestions();
        } else if 
        (answers.employee === 'Engineer') {
            engineerQuestions();
        } else if 
        (answers.employee === 'Intern') {
            internQuestions();
        }
    })
}

// first prompt, answers questions about manager
const managerQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: `What is the manager's name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter employee name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the manager's ID?`,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ("Please enter employee ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the manager's email address?`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log(`Please enter employee's email address.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: `What is the manager's office number?`,
            validate:  officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log(`Please enter the manager's office number.`);
                    return false;
                }
            }
        }
    ])
}

// prompt to see if there are additional employees to be added
const addEmployee = () => {
    return inquirer.prompt (
        {
            type: 'confirm',
            name: 'plusEmployee',
            message: 'Would you like to add another employee?',
            default: false
        },
        
    )
}

// initializes app and begins inquirer prompt
managerQuestions()
    .then(addEmployee);