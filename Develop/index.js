// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:'
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: 'Enter Table of Content:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Enter your questions:'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
      }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
        console.log('README.md successfully generated!');
      });
}

// Function call to initialize app
init();
