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
      let _gen = {a: true};
      let _main = new MainGenerator(_gen);

      expect(_main.generator).to.equal(_gen);
    });
  });

  describe('saysHello', () => {
    it('deve chamar o log', () => {
      let _gen = {
        log: sinon.spy()
      };

      let _main = new MainGenerator(_gen);

      _main.saysHello();

      expect(_main.generator.log).to.have.been.called;
    });
  });

  describe('prompts', () => {
    let _gen = {
      async: () => () =>{},
      prompt: () => Promise.resolve(),      
    } 
    
    sinon.spy(_gen, 'prompt');
    
    let _main = new MainGenerator(_gen);
    
    _main.prompts();
    
    expect(_main.generator.prompt).to.have.been.called;
  });

  describe('copies', () => {
    let _gen = {
      template: sinon.spy(),
      directory: sinon.spy()
    };
    
    let _main = new MainGenerator(_gen);
    
    _main.copies();
   
    expect(_main.generator.template).to.have.been.called;
    expect(_main.generator.directory).to.have.been.called;
  });

  describe('installs', () => {
    it('deve chamar o installDependencies', () => {
      let _gen = {
        installDependencies: sinon.spy()
      }

      let _main = new MainGenerator(_gen);
      
      _main.installs();

      expect(_main.generator.installDependencies).to.have.been.called;
    });
  });
});
