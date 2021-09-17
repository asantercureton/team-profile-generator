const inquirer = require('inquirer');
const fs = require('fs');

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
            newManager();
        } else if (res.addEmployee === "Engineer") {
            newEngineer();
        } else if (res.addEmployee === "Intern") {
            newIntern();
        } else {

        }
    });
}

// ADD MANAGER
const addManager = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What is your role for this team?",
            choices: ["Manager", "Engineer", "Intern"],
            name: "addManager"
        }
    ]).then((res) => {
        if (res.addManager === "Manager") {
            newManager();
        } else if (res.addManager === "Engineer") {
            newEngineer();
        } else (res.addManager === "Intern") {
            newIntern();
        }
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

// WRITE TO HTML