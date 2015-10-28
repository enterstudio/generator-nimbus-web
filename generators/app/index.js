'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _yeomanGenerator = require('yeoman-generator');

var _nwMain_generator = require('../../_nw/main_generator');

var GeneratorNimbusWeb = (function (_Base) {
  _inherits(GeneratorNimbusWeb, _Base);

  function GeneratorNimbusWeb(args, opts, config) {
    _classCallCheck(this, GeneratorNimbusWeb);

    _get(Object.getPrototypeOf(GeneratorNimbusWeb.prototype), 'constructor', this).call(this, args, opts, config);

    this.wrapper = new _nwMain_generator.MainGenerator(this);
  }

  _createClass(GeneratorNimbusWeb, [{
    key: 'sayHello',
    value: function sayHello() {
      this.wrapper.saysHello();
    }
  }, {
    key: 'prompting',
    value: function prompting() {
      this.wrapper.prompts();
    }
  }, {
    key: 'copyFiles',
    value: function copyFiles() {
      this.wrapper.copies();
    }
  }, {
    key: 'install',
    value: function install() {
      this.wrapper.installs();
    }
  }]);

  return GeneratorNimbusWeb;
})(_yeomanGenerator.Base);

exports['default'] = GeneratorNimbusWeb;
module.exports = exports['default'];