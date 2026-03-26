function multies() {
  const num = parseInt(prompt('Enter a positive integer: '));

  let matrix = [[num], num]; // testausta

  let html = '';

  for (let row = 1; row <= num; row++) {
    html += '<tr>';
    for (let column = 1; column <= num; column++) {
      const mult = row * column;
      matrix[row - (1)[column - 1]] = mult; // testausta
      console.log(mult);
      html += '<td>';
      html += mult;
      html += '</td>';
    }
    html += '</tr>';
    console.log(html);
  }
  console.log('Matrix: ', matrix); // testausta

  document.getElementById('mults').innerHTML = html;
}
