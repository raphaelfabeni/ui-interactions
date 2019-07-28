const fs = require('fs');
const inquirer = require('inquirer');

// Templates
const htmlTemplate = require('./templates/html.js');
const cssTemplate = require('./templates/css.js');

// Utils
const hasWhiteSpace = (word) => /\s/g.test(word);

// Data
const questions = [
	{
		type: 'input',
		name: 'uiModel',
		message: "What's the name of the UI example? you want to create?",
		validate: function(value) {
			const isValid = !hasWhiteSpace(value)
			if(isValid) {
				return true;
			}

			return 'The example name could not have spaces.'
		}
	}
];

const uiFolder = 'src/ui/';

inquirer
	.prompt(questions)
	.then(({ uiModel }) => {

		fs.mkdirSync(`${uiFolder}${uiModel}`)
		fs.writeFileSync(`${uiFolder}${uiModel}/index.html`, htmlTemplate(uiModel));
		fs.writeFileSync(`${uiFolder}${uiModel}/index.styl`, cssTemplate(uiModel));

	});