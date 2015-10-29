export class GeneratorAngular {
  constructor(gen) {
    this.generator = gen;
  }

  copyFiles() {
    this.generator.fs.copy(this.generator.templatePath('_package.json'), this.generator.destinationPath('package.json'));
    this.generator.fs.copy(this.generator.templatePath('_bower.json'), this.generator.destinationPath('bower.json'));

    this.generator.fs.copy(this.generator.templatePath('editorconfig'), this.generator.destinationPath('.editorconfig'));
    this.generator.fs.copy(this.generator.templatePath('jshintrc'), this.generator.destinationPath('.jshintrc'));
  }
}
