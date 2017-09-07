'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sort = function Sort(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Sort' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M7,3 L22,3 M7,9 L16,9 M7,15 L22,15 M2,2 L4,2 L4,4 L2,4 L2,2 Z M2,8 L4,8 L4,10 L2,10 L2,8 Z M2,14 L4,14 L4,16 L2,16 L2,14 Z M2,20 L4,20 L4,22 L2,22 L2,20 Z M7,21 L16,21' })
      )
    )
  );
};

exports.default = Sort;