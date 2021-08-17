// Import dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// declare global variables
let badge;

// generate README
const generateREADME = (answers) =>

`${badge}
# ${answers.title}

## Table of Contents
  
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing Guidelines](#contributing-guidelines)
6. [Test Instructions](#test-instructions)
7. [Questions](#questions)
  
## Description

* ${answers.description}
  
## Installation

* ${answers.installation}

## Usage

  
## License
  
* ${answers.license}
  
## Contributing Guidelines

* ${answers.contributingGuidelines}

## Test Instructions

* ${answers.testInstructions}
  
## Questions

Contact information for questions:

* Email: ${answers.email}
* Github: https://github.com/${answers.github}
  
  `;

// Prompt responses 
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title for the Project: ',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description for the Project: ',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Describe how to install your project: ',
      },
    {
      type: 'list',
      name: 'license',
      message: 'Select a License: ',
      choices: ["BSD 3-Clause License", "Creative Commons license family", "MIT", "Mozilla Public License 2.0"],
    },
    {
      type: 'input',
      name: 'contributingGuidelines',
      message: 'Describe how to contribute to this project: ',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Describe how to test this project: ',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github username: ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address: ',
      },
  ])

  .then((answers) => {
    function generateBadge (license) {
      // generate license badge
      switch(license) {
        case "BSD 3-Clause License":
          badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
          break;
        case "Creative Commons license family":
          badge = "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](http://creativecommons.org/licenses/by/4.0/)";
          break;
        case "MIT":
          badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
          break;
        case "Mozilla Public License 2.0":
          badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
          break;
      }
    }
    generateBadge(answers.license);

    // generate README
    const READMEPageContent = generateREADME(answers);
    fs.writeFile('README.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
