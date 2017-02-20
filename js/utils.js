'use strict';

window.utils = function () {
  function getRandomElement(arr) {
    var randomElement = Math.floor(Math.random() * arr.length);
    return arr[randomElement];
  }

  function getRandomElementExcept(arr, element) {
    var newElement = null;
    while (!newElement || newElement === element) {
      newElement = getRandomElement(arr);
    }
    return newElement;
  }
  return {getRandomElementExcept: getRandomElementExcept};
}();
