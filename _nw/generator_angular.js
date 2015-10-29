'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var GeneratorAngular = (function () {
  function GeneratorAngular(gen) {
    _classCallCheck(this, GeneratorAngular);

    this.generator = gen;
  }

  _createClass(GeneratorAngular, [{
    key: 'copyFiles',
    value: function copyFiles() {
      this.generator.fs.copy(this.generator.templatePath('_package.json'), this.generator.destinationPath('package.json'));
      this.generator.fs.copy(this.generator.templatePath('_bower.json'), this.generator.destinationPath('bower.json'));

      this.generator.fs.copy(this.generator.templatePath('editorconfig'), this.generator.destinationPath('.editorconfig'));
      this.generator.fs.copy(this.generator.templatePath('jshintrc'), this.generator.destinationPath('.jshintrc'));
    }
  }]);

  return GeneratorAngular;
})();

exports.GeneratorAngular = GeneratorAngular;