'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var wizardCoat = document.querySelector('#wizard-coat');
var setupUserName = document.querySelector('.setup-user-name');
var wizardEyes = document.querySelector('#wizard-eyes');
var fireballWrap = document.querySelector('.setup-fireball-wrap');

var color;
var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

setupUserName.required = true;
setupUserName.maxLength = 50;

function randomNumber(max) {
  return Math.floor(Math.random() * max, 0);
}

wizardCoat.addEventListener('click', function () {
  color = randomNumber(coatColor.length);
  wizardCoat.style.fill = coatColor[color];
});

wizardEyes.addEventListener('click', function () {
  color = randomNumber(eyesColor.length);
  wizardEyes.style.fill = eyesColor[color];
});

fireballWrap.addEventListener('click', function () {
  color = randomNumber(fireballColor.length);
  fireballWrap.style.background = fireballColor[color];
});

