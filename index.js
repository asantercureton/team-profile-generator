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
            validate: your_name => {
                if (your_name) {
                    return true;
                } else {
                    console.log('Provide your name');
                    return false;
                }
            }
        },
        {
            type: "confirm",
            message: "Are you the Manager for this team?",
            name: "titleMgr",
            validate: is_mgr => {
                if (is_mgr) {
                    return true;
                } else {
                    console.log('Provide your name');
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is your name?",
            name: "nameMgr",
            validate: your_name => {
                if (your_name) {
                    return true;
                } else {
                    console.log('Provide your name');
                    return false;
                }
            }
        },
    ]).then((res) => {
        const mgr = new Manager(
            res.nameMgr, 
            res.titleMgr, 
            // res.id, 
            // res.email, 
            // res.officeNumber
            );
        myTeam.push(mgr);
        addTeam();
    });
}
// ADD ENGINEER
const addEngineer = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Are you an Engineer for this team?",
            choices: ["Yes", "No"],
            name: "addEngineer"
        }
    ]).then((res) => {
        if (res.addEngineer === "Yes") {
            newEngineer();
        } else {
            newIntern();
        }
    });
}
// ADD INTERN
const addIntern = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Are you an Intern for this team?",
            choices: ["Yes", "No"],
            name: "addIntern"
        }
    ]).then((res) => {
        if (res.addIntern === "Yes") {
            newIntern();
        } else {
            addTeam();
        }
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
            htmlTemplate += `<div>${myTeam[i].name}
            ${myTeam[i].title}</div>`
        }
        htmlTemplate += `</main>
    </body>
    
    </html>`
    fs.writeFile('myTeam.html', htmlTemplate, (err) => {
        if (err) console.log(err);
        console.log('Success');
    });
};