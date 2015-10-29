import {GeneratorAngular} from './generator_angular';
import {GeneratorNgFullstack} from './generator_ng_fullstack';

export class GeneratorFactory {
  static token = {
    GENERATOR_ANGULAR: "generator-angular",
    GENERATOR_NG_FULLSTACK: "generator-ng-fullstack"
  }

  static resolveAndCreate(token, generator) {
    switch(token) {
      case GeneratorFactory.token.GENERATOR_ANGULAR: return new GeneratorAngular(generator);
      case GeneratorFactory.token.GENERATOR_NG_FULLSTACK: return new GeneratorNgFullstack(generator);
      default: throw new Error('Generator não encontrado.');
    }
  }
}
