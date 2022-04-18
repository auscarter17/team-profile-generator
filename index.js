const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/page-template')
// array to store members of team
team = [];

// questions 
const employeeQuestions = () => {
    console.log(`
        ===================
        ADDING NEW EMPLOYEE
        ===================
    `)
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: `What is this employee's role?`,
            choices: [
                'Engineer',
                'Intern'
            ]
        },
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
            type: 'input',
            name: 'github',
            message: `What is the employee's Github username?`,
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: `Which school is the employee attending?`,
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee's school.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: `Would you like to add another employee?`,
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }
        team.push(employee);

        if (confirmAddEmployee) {
            return employeeQuestions(team);
        } else {
            return team;
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
    .then(managerData => {
        const { name, id, email, office } = managerData;
        const manager = new Manager (name, id, email, office);

        team.push(manager);
    })
    
}

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

// initializes app and begins inquirer prompt
managerQuestions()
    .then(employeeQuestions)
    .then(team => {
        return generateTeam(team);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });