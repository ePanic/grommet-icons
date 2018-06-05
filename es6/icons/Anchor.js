var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Anchor = function Anchor(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Anchor' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M12,6 C13.1045695,6 14,5.1045695 14,4 C14,2.8954305 13.1045695,2 12,2 C10.8954305,2 10,2.8954305 10,4 C10,5.1045695 10.8954305,6 12,6 Z M20,17 C20.5522847,17 21,16.5522847 21,16 C21,15.4477153 20.5522847,15 20,15 C19.4477153,15 19,15.4477153 19,16 C19,16.5522847 19.4477153,17 20,17 Z M4,17 C4.55228475,17 5,16.5522847 5,16 C5,15.4477153 4.55228475,15 4,15 C3.44771525,15 3,15.4477153 3,16 C3,16.5522847 3.44771525,17 4,17 Z M12,6 L12,21 M4,15.9733241 C6.19364176,19.3244414 8.86035276,21 12.000133,21 C15.1399132,21 17.8065356,19.3244414 20,15.9733241 M16,10 L8,10' })
  );
};

export default Anchor;