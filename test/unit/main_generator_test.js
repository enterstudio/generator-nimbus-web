"use strict";

const chai = require('chai');
const {expect} = chai;
const {MainGenerator} = require('../../_nw/main_generator');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('unit -> main', () => {
  describe('criação', () => {
    it('deve ter o generator com o que for passado por parâmetro', () => {
      let gen = {a: true};

      let main = new MainGenerator(gen);

      expect(main.generator).to.equal(gen);
    });
  });

  describe('saysHello', () => {
    it('deve chamar o log', () => {
      let stub = {
        log: sinon.spy()
      };

      let main = new MainGenerator(stub);

      main.saysHello();

      expect(main.generator.log).to.have.been.called;
    });
  });

  describe('prompts', () => {
    
  });

  describe('copies', () => {
    
  });

  describe('installs', () => {
    it('deve chamar o installDependencies', () => {
      let stub = {
        installDependencies: sinon.spy()
      };

      let main = new MainGenerator(stub);

      main.installs();

      expect(main.generator.installDependencies).to.have.been.called;
    });
  });
});
