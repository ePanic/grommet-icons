var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var DocumentLocked = function DocumentLocked(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'DocumentLocked' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L17,23 M18,1 L18,6 L23,6 M4,15 L14,15 L14,23 L4,23 L4,15 Z M6,15 L6,13 C6,11.3431458 7.34314575,10 9,10 C10.6568542,10 12,11.3431458 12,13 L12,15 M8,19 L10,19' })
      )
    )
  );
};

export default DocumentLocked;