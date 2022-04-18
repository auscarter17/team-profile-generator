// generates card for manager to be pushed into html body
const managerCard = function(manager) {
    return `
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>

            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href = "mailto: ${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.office}</p>
            </div>
        </div>
    </div>
    `;
}

// generates card for engineers
const engineerCard = function(engineer) {
    return `
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href = "mailto: ${engineer.email}">${engineer.email}</a></p>
                <p>Github: <a href="https://www.github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

// generates card for interns
const internCard = function(intern) {
    return `
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>

            <div class="card-body">
                <p>ID: ${intern.id}</p>
                <p>Email: <a href = "mailto: ${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
}

// loops through employees and sorts them by role
generateTeam = (data) => {
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

        if (role === 'Intern') {
            const makeInternCard = internCard(employee);
            pageArray.push(makeInternCard)
        }
    }
    // creates array to store employees with card elements
    const staffCards = pageArray.join('')

    // takes array of cards and runs them through function to generate full page
    const generateTeam = generatePage (staffCards);
    return generateTeam;
}

// creates layout for index.html that will house staff cards
const generatePage = function (staffCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h3>Team Profile</h3>
            </div>
        </header>

        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">        
                    ${staffCards}
                </div>
            </div>
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
    `;
}

module.exports = generateTeam;