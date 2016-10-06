"use strict";

const chalk = require('chalk');
const yosay = require('yosay');

exports.MainGenerator = class MainGenerator {
  constructor(generator) {
    this.generator = generator;
  }

  saysHello() {
    this.generator.log(yosay('Bem vindo ao ' + chalk.green('Nimbus-Web') + ' generator!'));
  }

  prompts() {
    const done = this.generator.async();

    let prompts = [{
      type: 'input',
      name: 'appName',
      message: 'Qual o nome da app?',
      default: 'alt.sistema.adminApp'
    }];

    this.generator
      .prompt(prompts)
      .then((prop) => {
        this.generator.appName = prop.appName;
        done();
      });    
  }

  copies() {
    this.generator.template('_package.json', 'package.json');
    this.generator.template('_bower.json', 'bower.json');
    this.generator.template('editorconfig', '.editorconfig');
    this.generator.template('jshintrc', '.jshintrc');
  }

  installs() {
    this.generator.installDependencies();
  }
}
