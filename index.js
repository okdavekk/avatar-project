const inquirer = require('inquirer');
const utils = require('./utils/pageGenerator')

const mainQuestions = [
  {
    type: 'input',
    message: 'Team Managers Name?',
    name: 'managerName',
    // validate: (input) => input.length > 4 ? true : "Your name is too short"
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
  }
];

const engineerQuestions = [
  {
    type: 'list',
    message: 'Enter Engineers Name',
    name: 'engineerName',
  },
  {
    type: 'list',
    message: 'Enter Engineers ID',
    name: 'engineerID'
  },
  {
    type: 'list',
    message: 'Enter Engineers Email',
    name: 'engineerEmail'
  },
  {
    type: 'list',
    message: 'Enter Engineers Github Username',
    name: 'engineerGitHub'

    //need some sort of return 
  },
]

const internQuestions = [
  {
    type: 'list',
    message: 'Enter Interns Name',
    name: 'InternName',
  },
  {
    type: 'list',
    message: 'Enter Intern ID',
    name: 'internID'
  },
  {
    type: 'list',
    message: 'Enter Intern Email',
    name: 'internEmail'
  },
  {
    type: 'list',
    message: 'Enter Interns School',
    name: 'internSchool'
  },
]

inquirer.prompt(mainQuestions).then((answers) => {
  console.log(answers);
  utils.generatePage(answers);

});

// inquirer.prompt(engineerQuestions).then((answers) => {
//   console.log(answers);
//   utils.generateSomeone(answers);
// })

// inquirer.prompt(internQuestions).then((answers) => {
//   console.log(answers);
//   utils.generateSomeone(answers);
// })