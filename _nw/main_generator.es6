import chalk from 'chalk';
import yosay from 'yosay';

export class MainGenerator {
  constructor(generator) {
    this.generator = generator;
  }

  saysHello() {
    this.generator.log(yosay('Bem vindo ao ' + chalk.green('Nimbus') + ' generator!'));
  }

  prompts() {
    const done = this.generator.async();

    var prompts = [{
      type: 'list',
      name: 'generatorBase',
      message: 'Qual o generator base?',
      choices: ["generator-angular", "generator-ng-fullstack"],
      default: 0
    }];

    this.generator.prompt(prompts, (prop) => {
      this.generator.generatorBase = prop.generatorBase;

      done();
    });
  }

  copies() {
    this.generator.fs.copy(this.generator.templatePath('_package.json'), this.generator.destinationPath('package.json'));
    this.generator.fs.copy(this.generator.templatePath('_bower.json'), this.generator.destinationPath('bower.json'));

    this.generator.fs.copy(this.generator.templatePath('editorconfig'), this.generator.destinationPath('.editorconfig'));
    this.generator.fs.copy(this.generator.templatePath('jshintrc'), this.generator.destinationPath('.jshintrc'));
  }

  installs() {
    this.generator.installDependencies();
  }
}
