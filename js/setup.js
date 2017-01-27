var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');


setupOpen.addEventListener('click', function() {
  setup.classList.remove('invisible');
});

var setupClose = document.querySelector('.setup-close');

setupClose.addEventListener('click', function() {
  setup.classList.add('invisible');
});

var setupUserName = document.querySelector('.setup-user-name');

setupUserName.required = true;
setupUserName.maxLength = 50;

var wizardCoat = wizard.querySelector('#wizard-coat');
var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var color;

wizardCoat.addEventListener('click', function() {
  color = Math.floor(Math.random() * coatColor.length);
  wizardCoat.style.fill = coatColor[color];
});

var wizardEyes = document.querySelector('#wizard-eyes');
var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

wizardEyes.addEventListener('click', function() {
  color = Math.floor(Math.random() * eyesColor.length);
  wizardEyes.style.fill = eyesColor[color];
});

var fireballWrap = document.querySelector('.setup-fireball-wrap');
var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

fireballWrap.addEventListener('click', function() {
  color = Math.floor(Math.random() * fireballColor.length);
  fireballWrap.style.background = fireballColor[color];
});
