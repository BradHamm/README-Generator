const inquirer = require('inquirer');
const fs = require('fs');

const licenseList = [
  'The MIT License',
  'Mozilla Public License 2.0',
  'IBM Public License Version 1.0',
  'Apache 2.0 License',
  'License: Unlicense',
  'SIL Open Font License 1.1',
  'No License',
];

const licenseNames = [
  '## License\n\nLicense: MIT',
  '## License\n\nLicense: MPL 2.0',
  '## License\n\nLicense: IPL 1.0',
  '## License\n\nLicense: Apache 2.0',
  '## License\n\nLicense: Unlicense',
  '## License\n\nLicense: Open Font-1.1',
];

const licenseBadges = [
  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
  '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)',
];



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
      message: 'Please select a license from the following list, which will be appended into the "License" section, including the license badge at the top of the README: ',
      name: 'license',
      choices: licenseList,
      editablelist: true,
    },
  ])
  .then((response) => {
    const {license} = response; //extracts license choice from the response object

    const index = licenseList.indexOf(license); //indexOf returns the position at which the user's choice within the licenseList can be found.
  
    const licenseName = licenseNames[index]; //selects the associated header to be used within the license section
    const licenseBadge = licenseBadges[index]; //selects the associated badge to be used at the top of the README, after the description.
  

    //async appending of all sections to the new README.md document
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

    fs.appendFile('README.md', `${licenseBadge}\n\n`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('License badge appended.');
      }
    });

    fs.appendFile('README.md', `## Installation\n\n${response.install}\n\n`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Installation appended.');
      }
    });

    fs.appendFile('README.md', `## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contribution](#contribution)\n- [Tests](#tests)\n- [Questions?](#questions?)\n- [License](#license)\n\n`, (err) => {
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

    fs.appendFile('README.md', `${licenseName}\n\n`, (err) => { //licenseName provides full name rather than selection from licenseList
      if (err) {
        console.error(err);
      } else {
        console.log('License header appended.');
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