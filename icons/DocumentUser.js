'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentUser = function DocumentUser(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'DocumentUser' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L16,23 M18,1 L18,6 L23,6 M8,11 C6.34325,11 5,12.34325 5,14 C5,15.65675 6.34325,17 8,17 C9.65675,17 11,15.65675 11,14 C11,12.34325 9.65675,11 8,11 L8,11 Z M3,23 L3,22 C3,18 6,17 8,17 C10,17 13,18 13,22 L13,23 L3,23 Z' })
  );
};

exports.default = DocumentUser;