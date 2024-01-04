
const inquirer = require('inquirer');
const fs = require('fs');

// User input questions
const questions = [
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
	},
	{
		type: 'input',
		name: 'initials',
		message: 'Enter up to 3 characters.'
	},
	{
		type: 'input',
		name: 'textColor',
		message: 'Enter a text color (keyword or hex).'
	}
];

// Generate SVG
function generateSVG(shape, shapeColor, initials, textColor) {
	let svgShape = '';
	switch(shape) {
			case 'Circle':
					svgShape = `<circle cx="50" cy="50" r="40" fill="${shapeColor}" />`;
					break;
			case 'Square':
					svgShape = `<rect width="80" height="80" fill="${shapeColor}" />`;
					break;
			case 'Triangle':
					svgShape = `<polygon points="50,10 10,90 90,90" fill="${shapeColor}" />`;
					break;
	}

	// Add initials
	const svgInitials = `<text x="50%" y="55%" fill="${textColor}" font-size="20" text-anchor="middle">${initials}</text>`;

	// Combine everything
	return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">${svgShape}${svgInitials}</svg>`;
}

// Creates SVG
function outputSVG(fileName, data) {
	return fs.writeFileSync(fileName, data)
}

// Initializes/starts application
function init() {
	inquirer
  	.prompt(questions).then((dataFromInquirer) => {
			const { shape, shapeColor, initials, textColor } = dataFromInquirer;
			outputSVG('./examples/output.svg', generateSVG(shape, shapeColor, initials, textColor));
		})
}

init();