import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import os from 'os';

describe('generator-nimbus-web', () => {
  before((done) => {
    helpers
      .run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ algumaFlag: 1 })
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
