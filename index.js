const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) =>
  `# ${answers.title}

  ## Table of Contents
  
    1. Description
    2. Installation
    3. Usage
    4. License
    5. Contributing Guidelines
    6. Test Instructions
    7. Questions
  
  ### 1. Description

    *${answers.description}
  
  ### 2. Installation

    *${answers.installation}

  ### 3. Usage

  
  ### 4. License
  
    *${answers.license}
  
  ### 5. Contributing Guidelines

    *${answers.contributionGuidelines}

  ### 6. Test Instructions

    *${answers.testInstructions}
  
  ### 7. Questions

  Contact information for questions:

    *Email: ${answers.email}
    *Github: ${answers.github}
  
  `;

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
      choices: ["Academic Free License v3.0", "Creative Commons license family", "MIT, Do What The F*ck You Want To Public License"],
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
    const READMEPageContent = generateREADME(answers);

    fs.writeFile('README.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
