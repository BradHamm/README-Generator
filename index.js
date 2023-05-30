const inquirer = require('inquirer');
const fs = require('fs');

const licenseInformation() => { //will be used in the fetch call to Github's API for license badge information
    fetch()
}



inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 
      'Provide a brief description of the project. Here are some prompts to help guide you through creating your description.\n- What was your motivation behind the project?\n- Why did you build this project?\n- What problem does it solve?\n- What did you learn over the course of the project?\n',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Provide intallation instructions, so the user knows how to set up the environment for your program: ',
      name: 'install',
    },
    {
        type: 'input',
        message: 'Provide your github so people can contact you with questions that they have about the project or the programs functionality: ',
        name: 'questionsGithub',
    },
    {
        type: 'input',
        message: 'Provide your email so people can contact you with questions that they have about the project or the programs functionality: ',
        name: 'questionsEmail',
    },
    {
        type: 'input',
        message: "If there are any additional methods of contact or stipulations regarding contact methods, provide them and it will be appended below your github. Type 'N' to disregard this section",
        name: 'questions',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. This will comprise the "Usage" section of the READ ME: ',
        name: 'usage',
    },
    {
      type: 'input',
      message: 'Provide contribution guidelines which outline how users can contribute to the project. This will comprise the "Contribution Guidelines" section: ',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Provide tests which showcase examples of your programs capabilities. This will comprise the "Tests" section: ',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'Provide your github information:',
      name: 'license',
      choices: licenseList,
      editablelist: true,
    },
  ])
  .then((response) => { //async appending of all sections to the new README.md document
    fs.writeFile('README.md', `# ${response.projectName}\n\n`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README Project name imported - File successfully created.');
      }
    });

    fs.appendFile('README.md', `## Description\n\n${response.description}\n\n`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Description appended.');
      }
    });

    fs.appendFile('README.md', `## Installation\n\n${response.install}\n\n`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Installation appended.');
      }
    });

    fs.appendFile('README.md', `## Table of Contents\n\nIf your README is long, add a table of contents to make it easy for users to find what they need.\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contribution](#contribution)\n- [Tests](#tests)\n- [Questions?](#questions?)\n- [License](#license)\n\n`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Table of contents appended.');
      }
    });

    fs.appendFile('README.md', `## Usage\n\n${response.usage}\n\n`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Usage instructions appended.');
      }
    });

    fs.appendFile('README.md', `## Tests\n\n${response.tests}\n\n`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Tests appended.');
      }
    });

    fs.appendFile('README.md', `## Contribution\n\n${response.contribution}\n\n`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Contribution methods appended.');
      }
    });

    fs.appendFile('README.md', `## Questions?\n\nMy Github: ${response.questionsGithub}\nMy email: ${response.questionsEmail}\n${response.questions}`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Questions section and social links appended.'); 
      }
    });
  });

  //remaining: Adding license information with a seperate license badge appedFile() command earlier in the codebase. 
  //Incorporate a an empty string or "no license" input from the user to account for the absence of hypothetical licensing.
  //Get clarification on criteria for how extensive API fetch needs to be, and if we should prompt the user for image submissions regarding the usage and test section. If so, how do I incorporate that?