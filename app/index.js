"use strict";

const {Base} = require('yeoman-generator');
const {MainGenerator} = require('../_nw');

module.exports = class GeneratorNimbusWeb extends Base {
  constructor(args, opts, config) {
    super(args, opts, config);

    this.wrapper = new MainGenerator(this);
  }

  sayHello() {
    this.wrapper.saysHello();
  }

  prompting() {
    this.wrapper.prompts();
  }

  copyFiles() {
    this.wrapper.copies();
  }

  install() {
    this.wrapper.installs();
  }
}