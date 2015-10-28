import {expect} from 'chai';
import {MainGenerator} from '../_ng/main_generator';

describe('main_generator', () => {
  describe('criação', () => {
    it('deve ter o generator com o que for passado por parâmetro', () => {
      let _gen = {a: true};

      let _main = new MainGenerator(_gen);

      expect(_main.generator).to.equal(_gen);
    });
  });
});
