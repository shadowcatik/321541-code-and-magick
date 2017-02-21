'use strict';

window.colorizeElement = (function (element, colors, property) {
  var color;
  var ENTER_KEY_CODE = 13;

  function colorElement() {
    if (typeof element.style[property] === 'undefined') {
      color = colors[0];
    } else {
      color = element.style[property];
    }
    var getRandom = window.utils.getRandomElementExcept(colors, color);
    element.style[property] = getRandom;
  }

  element.addEventListener('click', function () {
    colorElement();
  });

  element.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
      colorElement();
    }
  });
})();
