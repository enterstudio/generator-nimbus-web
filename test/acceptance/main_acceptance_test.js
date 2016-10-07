"use strict";

const path = require('path');
const assert = require('yeoman-assert');
const test = require('yeoman-test');
const os = require('os');
const {createYoRc} = require('../_helpers/mock');

describe('acceptance -> main', () => {
  before((done) => {
    test.run(path.join(__dirname, '../../app'))
      .withOptions({ 
        skipInstall: true 
      })
      .withPrompts({ 
        appName: 'alt.sistema.adminApp' 
      })
      .on('end', done);      
  });

  it('creates files', () => {
    assert.file([
      'bower.json',
      'package.json',
      '.editorconfig'
    ]);
  });
});
