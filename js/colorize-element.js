'use strict';

window.colorizeElement = function (element, colors, property) {
  var color;
  element.addEventListener('click', function () {
    if (typeof element.style[property] === 'undefined') {
      color = colors[0];
    } else {
      color = element.style[property];
    }
    var getRandom = window.utils.getRandomElementExcept(colors, color);
    element.style[property] = getRandom;
  });
};
