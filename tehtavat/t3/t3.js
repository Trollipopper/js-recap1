function checkTriangle() {
  const side1 = document.getElementById('side1').value;
  const side2 = document.getElementById('side2').value;
  const side3 = document.getElementById('side3').value;

  let text = 'The triangle is: ';

  // side1 == side2 == side3 (works btw)
  if (side1 == side2 && side2 == side3) {
    text += 'equilateral';
  } else if (side1 == side2 || side1 == side3 || side2 == side3) {
    text += 'isosceles';
  } else if (side1 != side2 && side1 != side3) { // "try to use &&, || and ! operators"
    text += 'scalene';
  }

  document.getElementById('result').textContent = text;
}
