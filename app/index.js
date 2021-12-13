'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
module.exports = class extends Generator {
	prompting() {
		this.log(yosay(
			'Welcome to the prime ' + chalk.red('zty-vue-page') + ' generator!'
		));
		const prompts = [{
			type: 'input',
			name: 'appName',
			message: 'What\'s your page name ?',
			default: "vue-object"
		}];
		return this.prompt(prompts).then(props => {
			this.props = props;
		});
	}
	writing() {
		this.fs.copy(
			this.templatePath('project/'),
			this.destinationPath(`${this.props.appName}/`)
		);

		const templates = [
			'.csscomb.json',
			'.gitignore',
			'.editorconfig',
			'.eslintrc',
			'.eslintignore',
			'.jsbeautifyrc',
			'.stylelintrc'
		]

		templates.forEach(item => {
			this.fs.copy(

				this.templatePath(`project/${item}`),

				this.destinationPath(`${this.props.appName}/${item}`)

			);
		})
	}

	end() {
		console.info(`run -> cd ${this.props.appName}`);
		console.info(`run -> npm install`);
	}
};
