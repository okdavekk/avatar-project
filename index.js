const inquirer = require('inquirer');
const utils = require('./utils/pageGenerator')

const questions = [
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
  // {
  //   type: 'input',
  //   message: 'What is your github username?',
  //   name: 'github',
  // },
  // {
  //   type: 'rawlist',
  //   message: 'What License was this created with?',
  //   name: 'license',
  //   choices: [
  //       "MPL",
  //       "GPL",
  //       "Apache",
  //       "MIT",
  //       "CC",
  //       "BSD",
  //   ]
  // }

];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  utils.generatePage(answers);
});