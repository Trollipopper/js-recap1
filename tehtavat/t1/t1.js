'use strict';
function convertButton() {
  let C = parseFloat(document.getElementById('celsius').value);

  let F = (C * 9/5) + 32;
  let K = C + 273.15;

  document.getElementById('fahrenheit').textContent =
    'Fahrenheit: ' + F.toFixed(2);
  document.getElementById('kelvin').textContent = 'Kelvin: ' + K.toFixed(2);
  console.log('Celsius: ', C);
  console.log('Fahrenheit: ', F);
  console.log('Kelvin: ', K);
}
