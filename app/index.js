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

		this.fs.copy(

			this.templatePath('project/.gitignore'),

			this.destinationPath(`${this.props.appName}/.gitignore`)

		);

		this.fs.copy(

			this.templatePath('project/.editorconfig'),

			this.destinationPath(`${this.props.appName}/.editorconfig`)

		);

		this.fs.copy(

			this.templatePath('project/.eslintrc'),

			this.destinationPath(`${this.props.appName}/.eslintrc`)

		);
	}

	end() {
		console.info('run -> npm install');
	}
}; 