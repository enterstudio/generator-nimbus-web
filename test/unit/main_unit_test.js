"use strict";

const chai = require('chai');
const {expect} = chai;
const {MainGenerator} = require('../../_nw');
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
    let gen = {
      async: () => () =>{},
      prompt: () => Promise.resolve(),      
    } 
    
    sinon.spy(gen, 'prompt');
    
    let main = new MainGenerator(gen);
    
    main.prompts();
    
    expect(main.generator.prompt).to.have.been.called;
  });

  describe('copies', () => {
    let gen = {
      template: sinon.spy(),
      directory: sinon.spy()
    };
    
    let main = new MainGenerator(gen);
    
    main.copies();
    
    expect(main.generator.template).to.have.been.called;
    expect(main.generator.directory).to.have.been.called;
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
