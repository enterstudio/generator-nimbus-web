"use strict";

const path = require('path');
const {assert} = require('yeoman-generator');
const {test} = require('yeoman-generator');
const os = require('os');
const {create} = require('../_helpers/mock');

describe('acceptance -> main', () => {
  before((done) => {
    test.run(path.join(__dirname, '../../app'))
      .inTmpDir(function(dir) {
        create({
          'generator-nimbus-web': {
            'appName': 'alt.sistema.adminApp123'
          }
        }, this.async());
      })
      .withOptions({ 
        skipInstall: true 
      })
      .withPrompts({ 
        appName: 'alt.sistema.adminApp123' 
      })
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'bower.json',
      'package.json',
      '.editorconfig',
      '.jshintrc'
    ]);
  });
});
