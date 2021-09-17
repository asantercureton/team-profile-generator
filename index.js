const inquirer = require('inquirer');
const fs = require('fs');
// const prettify = require('html-prettify');


const Employee = require('./assets/js/Employee.js');
const Manager = require('./assets/js/Manager.js');
const Engineer = require('./assets/js/Engineer.js');
const Intern = require('./assets/js/Intern.js');

let myTeam = [];

// RUN PROMPTS
const addTeam = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What type of employee do you want to add to your team?",
            choices: ["Manager", "Engineer", "Intern", "none"],
            name: "addEmployee"
        }
    ]).then((res) => {
        if (res.addEmployee === "Manager") {
            addManager();
        } else if (res.addEmployee === "Engineer") {
            addEngineer();
        } else if (res.addEmployee === "Intern") {
            addIntern();
        } else {
            outputHTML(myTeam);
        }
    });
}

// ADD MANAGER
const addManager = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "nameMgr",
            validate: your_nameMgr => {
                if (your_nameMgr) {
                    return true;
                } else {
                    console.log('Provide your name');
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is your id?",
            name: "idMgr",
            validate: your_idMgr => {
                if (your_idMgr) {
                    return true;
                } else {
                    console.log('Provide your id');
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is your email?",
            name: "emailMgr",
            validate: your_emailMgr => {
                if (your_emailMgr) {
                    return true;
                } else {
                    console.log('Provide your email');
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is your office phone number?",
            name: "phoneMgr",
            validate: your_phoneMgr => {
                if (your_phoneMgr) {
                    return true;
                } else {
                    console.log('Provide your office phone number');
                    return false;
                }
            }
        },
    ]).then((res) => {
        const mgr = new Manager(
            res.nameMgr, 
            res.titleMgr, 
            res.idMgr, 
            res.emailMgr, 
            res.phoneMgr
            );
        myTeam.push(mgr);
        addTeam();
    });
}
// ADD ENGINEER
const addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "nameEngineer",
            validate: your_nameEng => {
                if (your_nameEng) {
                    return true;
                } else {
                    console.log('Provide your name');
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is your id?",
            name: "idEngineer",
            validate: your_idEng => {
                if (your_idEng) {
                    return true;
                } else {
                    console.log('Provide your id');
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is your email?",
            name: "emailEngineer",
            validate: your_emailEng => {
                if (your_emailEng) {
                    return true;
                } else {
                    console.log('Provide your email');
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "gitHubEngineer",
            validate: your_gitHubEng => {
                if (your_gitHubEng) {
                    return true;
                } else {
                    console.log('Provide your GitHub username');
                    return false;
                }
            }
        },
    ]).then((res) => {
        const engineer = new Engineer(
            res.nameEngineer, 
            res.titleEngineer, 
            res.idEngineer, 
            res.emailEngineer, 
            res.gitHubEngineer
            );
        myTeam.push(engineer);
        addTeam();
    });
}
// ADD INTERN
const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "nameIntern",
            validate: your_nameIntern => {
                if (your_nameIntern) {
                    return true;
                } else {
                    console.log('Provide your name');
                    return false;
                }
            }

        },
        {
            type: "input",
            message: "What is your id?",
            name: "idIntern",
            validate: your_idIntern => {
                if (your_idIntern) {
                    return true;
                } else {
                    console.log('Provide your id');
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is your email?",
            name: "emailIntern",
            validate: your_emailIntern => {
                if (your_emailIntern) {
                    return true;
                } else {
                    console.log('Provide your email');
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What school are you currently attending?",
            name: "schoolIntern",
            validate: your_schoolIntern => {
                if (your_schoolIntern) {
                    return true;
                } else {
                    console.log('Provide the school you are currently attending');
                    return false;
                }
            }
        },
    ]).then((res) => {
        const intern = new Intern(
            res.nameIntern, 
            res.titleIntern, 
            res.idIntern, 
            res.emailIntern,
            res.schoolIntern
            );
        myTeam.push(intern);
        addTeam();
    });
}

addTeam();


// WRITE TO HTML
const outputHTML = (myTeam) => {
    console.log(myTeam);
    let htmlTemplate = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    </head>
    
    <body>
        <main class="container">`
        for (var i=0; i<myTeam.length; i++) {
            htmlTemplate += `<div>
        ${myTeam[i].name}
        ${myTeam[i].title}
        ${myTeam[i].id}
        ${myTeam[i].email}
        ${myTeam[i].gitHub}
        ${myTeam[i].phone}
        ${myTeam[i].school}
        </div>`
        }
        htmlTemplate += 
        `</main>
    </body>
    
    </html>`
    fs.writeFile('myTeam.html', htmlTemplate, (err) => {
        if (err) console.log(err);
        console.log('Success');
    });
};