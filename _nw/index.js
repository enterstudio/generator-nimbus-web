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
      message: 'Qual o nome do sistema?',
      default: 'alt.sistema.adminApp'
    }];

    this.generator.prompt(prompts)
      .then((prop) => {
        this.generator.appName = prop.appName;
        done();
      });    
  }

  copies() {    
    this.generator.template('_.alivrc', '.alivrc');
    this.generator.template('_.babelrc', '.babelrc');
    this.generator.template('_.bowerrc', '.bowerrc');
    this.generator.template('_.jazzignore', '.jazzignore');
    this.generator.template('_.editorconfig', '.editorconfig');

    this.generator.template('_.yo-rc.json', '.yo-rc.json', {
      appName: this.generator.appName
    });

    this.generator.template('_package.json', 'package.json', {
      appName: this.generator.appName  
    });
    
    this.generator.template('_bower.json', 'bower.json', {
      appName: this.generator.appName
    });

    this.generator.template('_fake-server.js', 'fake-server.js');
    this.generator.template('_gulpfile.babel.js', 'gulpfile.babel.js');
    this.generator.template('_karma.conf.js', 'karma.conf.js');
    this.generator.template('_protractor.conf.js', 'protractor.conf.js');
    
    this.generator.directory('client', 'client');
    this.generator.directory('tasks', 'tasks');
    this.generator.directory('tests', 'tests');
  }

  installs() {
    this.generator.installDependencies();
  }
}
