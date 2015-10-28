import chalk from 'chalk';
import yosay from 'yosay';

export class MainGenerator {
  constructor(generator) {
    this.generator = generator;
  }

  prompts() {
    const done = this.generator.async();

    this.generator.log(yosay('Welcome to the astounding ' + chalk.red('GeneratorNimbusWeb') + ' generator!'));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.generator.prompt(prompts, (props) => {
      this.generator.props = props;
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
