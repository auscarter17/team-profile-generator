const managerCard = function(manager) {
    return `
    <div class="col-4"
        <div class="card"
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>

            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: ${manaer.email}</p>
                <p>Office Number: ${manager.office}</p>
            </div>
        </div>
    </div>
    `;
}

const engineerCard = function(engineer) {
    return `
    <div class="col-4"
        <div class="card"
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: ${engineer.id}</p>
                <p>Github: ${engineer.github}</p>
            </div>
        </div>
    </div>
    `;
}

const internCard = function(intern) {
    return `
    <div class="col-4"
        <div class="card"
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>

            <div class="card-body>
                <p>ID: ${intern.id}</p>
                <p>Email: ${intern.email}</p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
}

generateArray = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const makeManagerCard = managerCard(employee);
            pageArray.push(makeManagerCard);
        }

        if (role === 'Engineer') {
            const makeEngineerCard = engineerCard(employee);
            pageArray.push(makeEngineerCard);
        }
    }
}

const generateTeam = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
            </div>
        </header>

        <main class="container">
        ${teamArray}
        </main>
    </body
    `
}