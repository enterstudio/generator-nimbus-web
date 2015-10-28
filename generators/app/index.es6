import yeoman from 'yeoman-generator';
import {MainGenerator} from '../../_nw/main_generator';

export default class GeneratorNimbusWeb extends yeoman.generators.Base {
  constructor(args, opts, config) {
    super(args, opts, config);

    this.wrapper = new MainGenerator(this);
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
