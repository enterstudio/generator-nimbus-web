import {GeneratorAngular} from '../_nw/generator_angular';
import {GeneratorNgFullstack} from '../_nw/generator_ng_fullstack';
import {GeneratorFactory} from '../_nw/generator_factory';
import {expect} from 'chai';

describe('generator-factory', () => {
  describe('criação', function() {
    it('deve ter os token setados corretamente', () => {
      expect(GeneratorFactory.token.GENERATOR_ANGULAR).to.equal('generator-angular');
      expect(GeneratorFactory.token.GENERATOR_NG_FULLSTACK).to.equal('generator-ng-fullstack');
    });
  });

  describe('resolveAndCreate', () => {
    it('deve buscar a classe GeneratorAngular e resolver a mesma', () => {
      let gen = {a: true};
      let angular = GeneratorFactory.resolveAndCreate("generator-angular", gen);

      expect(angular).to.be.an.instanceof(GeneratorAngular);
      expect(angular.generator).to.equal(gen);
    });

    it('deve buscar a classe GeneratorAngular e resolver a mesma', () => {
      let gen = {a: true};
      let ngFullstack = GeneratorFactory.resolveAndCreate("generator-ng-fullstack", gen);

      expect(ngFullstack).to.be.an.instanceof(GeneratorNgFullstack);
      expect(ngFullstack.generator).to.equal(gen);
    });

    it('deve dar erro, generator nao encontrado', function() {
      expect(() => GeneratorFactory.resolveAndCreate("alo", {})).to.throw(Error, /Generator não encontrado/);
    });
  });
});
