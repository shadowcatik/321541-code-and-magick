'use strict';

window.colorize = (function () {
  function colorizeElement(element, colors, callback) {
    var randomColor;
    var ENTER_KEY_CODE = 13;

    function colorElement() {
      if (typeof element.style.color === 'undefined') {
        randomColor = colors[0];
      } else {
        randomColor = window.utils.getRandomElementExcept(colors, randomColor);
      }
      callback(element, randomColor);
    }

    element.addEventListener('click', function () {
      colorElement();
    });

    element.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEY_CODE) {
        colorElement();
      }
    });
  }

  return colorizeElement;
})();
