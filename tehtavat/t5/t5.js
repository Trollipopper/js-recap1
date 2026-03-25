function sumToX() {
  const num = parseInt(document.getElementById('num').value);

  let tnum = num + 1;
  let sum = 0;
  for (tnum > 0; tnum--; ) {
    sum += tnum;
  }

  document.getElementById('result').textContent =
    'Sum up to ' + num + ': \n' + sum;
}
