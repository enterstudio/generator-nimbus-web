import chalk from 'chalk';
import yosay from 'yosay';
import {GeneratorFactory} from './generator_factory';

export class MainGenerator {
  constructor(generator) {
    this.generator = generator;
  }

  saysHello() {
    this.generator.log(yosay('Bem vindo ao ' + chalk.green('Nimbus') + ' generator!'));
  }

  prompts() {
    const done = this.generator.async();

    let prompts = [{
      type: 'list',
      name: 'generatorBase',
      message: 'Qual o generator base?',
      choices: [GeneratorFactory.token.GENERATOR_ANGULAR/*, GeneratorFactory.token.GENERATOR_NG_FULLSTACK*/],
      default: 0
    }];

    this.generator.prompt(prompts, (prop) => {
      this.generator.generatorBase = prop.generatorBase;

      done();
    });
  }

  copies() {
    GeneratorFactory.resolveAndCreate(this.generator.generatorBase, this.generator).copyFiles();
  }

  installs() {
    this.generator.installDependencies();
  }
}
