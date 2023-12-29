
//const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// User input questions
const questions = [
	{
		type: 'input',
		name: 'initials',
		message: 'Enter up to 3 characters.'
	},
	{
		type: 'input',
		name: 'color',
		message: 'Enter a text color (keyword or hex).'
	},
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: ['Circle', 'Triangle', 'Square']
  },
	{
		type: 'input',
		name: 'shapeColor',
		message: 'Enter a shape background color (keyword or hex).'
	}
];

// Creates file
function writeToFile(fileName, data) {
	return fs.writeFileSync(fileName, data)
}

// Initializes/starts application
function init() {
	inquirer
  	.prompt(questions).then((dataFromInquier) => {
			writeToFile('README.md', generateMarkdown(dataFromInquier))
		})
}

init();