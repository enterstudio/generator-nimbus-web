'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _generator_angular = require('./generator_angular');

var _generator_ng_fullstack = require('./generator_ng_fullstack');

var GeneratorFactory = (function () {
  function GeneratorFactory() {
    _classCallCheck(this, GeneratorFactory);
  }

  _createClass(GeneratorFactory, null, [{
    key: 'resolveAndCreate',
    value: function resolveAndCreate(token, generator) {
      switch (token) {
        case GeneratorFactory.token.GENERATOR_ANGULAR:
          return new _generator_angular.GeneratorAngular(generator);
        case GeneratorFactory.token.GENERATOR_NG_FULLSTACK:
          return new _generator_ng_fullstack.GeneratorNgFullstack(generator);
        default:
          throw new Error('Generator não encontrado.');
      }
    }
  }, {
    key: 'token',
    value: {
      GENERATOR_ANGULAR: "generator-angular",
      GENERATOR_NG_FULLSTACK: "generator-ng-fullstack"
    },
    enumerable: true
  }]);

  return GeneratorFactory;
})();

exports.GeneratorFactory = GeneratorFactory;