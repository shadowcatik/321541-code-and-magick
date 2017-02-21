'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = document.querySelector('.setup-close');
  var wizardCoat = document.getElementById('wizard-coat');
  var setupUserName = document.querySelector('.setup-user-name');
  var wizardEyes = document.getElementById('wizard-eyes');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');
  var setupSubmit = document.querySelector('.setup-submit');

  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

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
    openSetup();
    document.removeEventListener('keydown', escapeKeydown);
  });

  setupClose.addEventListener('click', function () {
    setup.classList.add('invisible');
  });

  setupUserName.required = true;
  setupUserName.maxLength = 50;

  function escapeKeydown(ev) {
    if (ev.keyCode === ESCAPE_KEY_CODE) {
      setup.classList.add('invisible');
      setup.setAttribute('aria-hidden', true);
    }
  }

  function openSetup() {
    setup.classList.remove('invisible');
    setup.setAttribute('aria-hidden', false);
    document.addEventListener('keydown', escapeKeydown);
  }

  function setupOpenFunction(evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
      openSetup();
      setupSubmit.addEventListener('keydown', function (event) {
        if (event.keyCode === ENTER_KEY_CODE) {
          setup.classList.add('invisible');
          setup.setAttribute('aria-hidden', true);
        }
      });
    }
  }

  setupOpen.addEventListener('keydown', setupOpenFunction);

  function setupCloseFunction(e) {
    if (e.keyCode === ENTER_KEY_CODE) {
      setup.classList.add('invisible');
    }
  }

  setupClose.addEventListener('keydown', setupCloseFunction);

  window.colorizeElement(wizardCoat, coatColor, 'fill');
  window.colorizeElement(wizardEyes, eyesColor, 'fill');
  window.colorizeElement(fireballWrap, fireballColor, 'background');
})();
