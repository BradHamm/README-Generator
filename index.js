const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'projectname',
    },
    {
      type: 'input',
      message: 
      'Provide a brief description of the project. Here are some prompts to help guide you through creating your description.\n- What was your motivation behind the project?\n- Why did you build this project?\n- What problem does it solve?\n- What did you learn over the course of the project?\n',
      name: 'descripton',
    },
    {
      type: 'input',
      message: 'Provide intallation instructions, so the user knows how to set up the environment for your program: ',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use. This will comprise the "Usage" section of the READ ME: ',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Provide contribution guidelines which outline how users can contribute to the project. This will comprise the "Contribution Guidelines" section: ',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Provide tests which showcase examples of your programs capabilities. This will comprise the "Tests" section: ',
      name: 'github',
    },
    {
      type: 'list',
      message: 'Provide your github information:',
      name: 'github',
    },
    
  ])
  .then((response) =>