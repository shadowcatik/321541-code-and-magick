'use strict';

window.colorizeElement = function (element, colors, property) {
  element.addEventListener('click', function () {
    var computedStyle = getComputedStyle(element);
    var color = computedStyle.getPropertyValue(property);
    var getRandom = window.utils.getRandomElementExcept(colors, color);
    element.style[property] = element[getRandom];
  });
};
