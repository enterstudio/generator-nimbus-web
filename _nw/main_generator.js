'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

var MainGenerator = (function () {
  function MainGenerator(generator) {
    _classCallCheck(this, MainGenerator);

    this.generator = generator;
  }

  _createClass(MainGenerator, [{
    key: 'saysHello',
    value: function saysHello() {
      this.generator.log((0, _yosay2['default'])('Bem vindo ao ' + _chalk2['default'].green('Nimbus') + ' generator!'));
    }
  }, {
    key: 'prompts',
    value: function prompts() {
      var _this = this;

      var done = this.generator.async();

      var prompts = [{
        type: 'list',
        name: 'generatorBase',
        message: 'Qual o generator base?',
        choices: ["generator-angular", "generator-ng-fullstack"],
        'default': 0
      }];

      this.generator.prompt(prompts, function (prop) {
        _this.generator.generatorBase = prop.generatorBase;

        done();
      });
    }
  }, {
    key: 'copies',
    value: function copies() {
      this.generator.fs.copy(this.generator.templatePath('_package.json'), this.generator.destinationPath('package.json'));
      this.generator.fs.copy(this.generator.templatePath('_bower.json'), this.generator.destinationPath('bower.json'));

      this.generator.fs.copy(this.generator.templatePath('editorconfig'), this.generator.destinationPath('.editorconfig'));
      this.generator.fs.copy(this.generator.templatePath('jshintrc'), this.generator.destinationPath('.jshintrc'));
    }
  }, {
    key: 'installs',
    value: function installs() {
      this.generator.installDependencies();
    }
  }]);

  return MainGenerator;
})();

exports.MainGenerator = MainGenerator;