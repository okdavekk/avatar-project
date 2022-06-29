const inquirer = require('inquirer');
const utils = require('./utils/pageGenerator')
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Inter.js');
const Engineer = require('./lib/Engineer.js');

let team = [];

// utils.generatePage(team);

const mainQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Team Managers Name?',
      name: 'managerName',
    },
    {
      type: 'input',
      message: 'What is your Employee ID',
      name: 'managerID',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'managerEmail',
    },
    {
      type: 'input',
      message: 'What is your office number',
      name: 'managerOfficeNumber',
    },
    {
      type: 'list',
      message: 'Add employee?',
      name: 'employeeAdd',
      choices: [
        "Engineer",
        "Intern",
        "Exit?",
      ]
    },
  ]).then(answer => {

    //  Create your manager  
    // push manager into the teams array

    if (answer.employeeAdd === "Engineer") {
      engineerQuestions();
    }
    if (answer.employeeAdd === "Intern") {
      internQuestions();
    }
    if (answer.employeeAdd === "Exit") {
      process.exit();
    }
  }).catch((error) => {
    if (error) {
      console.log(error)
    }
  })
}

const engineerQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter Engineers Name',
      name: 'engineerName',
    },
    {
      type: 'input',
      message: 'Enter Engineers ID',
      name: 'engineerID',
    },
    {
      type: 'input',
      message: 'Enter Engineers Email',
      name: 'engineerEmail',
    },
    {
      type: 'input',
      message: 'Enter Engineers Github Username',
      name: 'engineerGitHub',
    },
    {
      type: 'list',
      message: 'Add Another Engineer or Intern?',
      name: 'anotherSomethingAdd',
      choices: [
        "Engineer",
        "Intern",
        "Exit?",
      ]
    },
  ]).then(answer => {
    // build engineeer and push to teams
    if (answer.anotherSomethingAdd === "Engineer") {
      engineerQuestions();
    }
    if (answer.anotherSomethingAdd === "Intern") {
      internQuestions();
    }
    if (answer.anotherSomethingAdd === "Exit") {
      process.exit();
    }
  }).catch((error) => {
    if (error) {
      console.log(error)
    }
  })
}

const internQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter Interns Name',
      name: 'internName',
    },
    {
      type: 'input',
      message: 'Enter Interns ID',
      name: 'internID',
    },
    {
      type: 'input',
      message: 'Enter Interns Email',
      name: 'internEmail',
    },
    {
      type: 'input',
      message: 'Enter Interns School',
      name: 'internSchool',
    },
    {
      type: 'list',
      message: 'Add Another Engineer or Intern?',
      name: 'anotherSomethingAdd',
      choices: [
        "Engineer",
        "Intern",
        "Exit?",
      ]
    },
  ]).then(answer => {
    if (answer.anotherSomethingAdd === "Engineer") {
      engineerQuestions();
    }
    if (answer.anotherSomethingAdd === "Intern") {
      internQuestions();
    }
    if (answer.anotherSomethingAdd === "Exit") {
      process.exit();
    }
  }).catch((error) => {
    if (error) {
      console.log(error)
    }
  })
}

mainQuestions()