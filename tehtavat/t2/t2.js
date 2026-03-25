'use strict';
function calculateDistance() {
  const str = document.getElementById('coords').value;
  const words = str.split(' ');
  const listOfCoordinates = [];
  for (let i = 0; i < 4; i++) {
    listOfCoordinates[i] = parseFloat(words[i]);
  }

  // Math.sqrt((x2 - x1) ^ (2 + (y2 - y1)) ^ 2)
  // (x1, y1, x2, y2)
  const distance = Math.sqrt(
    (listOfCoordinates[2] - listOfCoordinates[0]) ^
      (2 + (listOfCoordinates[3] - listOfCoordinates[1])) ^
      2
  );

  console.log('listOfCoordinates: \n', listOfCoordinates);
  console.log(
    'Distances: \n',
    distance,
    '\n',
    listOfCoordinates[2] - listOfCoordinates[0],
    '\n',
    listOfCoordinates[3] - listOfCoordinates[1]
  );

  document.getElementById('result').textContent = 'Distance: ' + distance;
}
