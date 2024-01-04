
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

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
		message: 'Enter a shape background color (keyword or hex):'
	},
	{
		type: 'input',
		name: 'initials',
		message: 'Enter up to 3 characters:'
	},
	{
		type: 'input',
		name: 'textColor',
		message: 'Enter a text color (keyword or hex):'
	}
];

// Generates SVG
function generateSVG(shape, shapeColor, initials, textColor) {
	let shapeObject;

	if (shape === 'Circle') {
			shapeObject = new Circle(shapeColor);
	} else if (shape === 'Square') {
			shapeObject = new Square(shapeColor);
	} else if (shape === 'Triangle') {
			shapeObject = new Triangle(shapeColor);
	}

	const svgShape = shapeObject.render();  // Corrected this line
	const svgInitials = `<text x="50%" y="55%" fill="${textColor}" font-size="20" text-anchor="middle">${initials}</text>`;
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
			outputSVG('./examples/logo.svg', generateSVG(shape, shapeColor, initials, textColor));
		})
}

init();