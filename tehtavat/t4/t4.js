function checkGrade() {
  const score = parseInt(
    prompt('What is your course score (whole numbers 0-100):')
  );

  document.getElementById('score').textContent = 'Score: ' + score;
  console.log(score);

  let grade = 0;

  if (score < 40) {
    grade = 0;
  } else if (score < 52) {
    grade = 1;
  } else if (score < 64) {
    grade = 2;
  } else if (score < 76) {
    grade = 3;
  } else if (score < 88) {
    grade = 4;
  } else {
    grade = 5;
  }

  console.log(grade);

  document.getElementById('result').textContent = 'Your grade is: ' + grade;

  /* ei toiminukkaa näin lol
  switch (score) {
    case score < 40:
      grade = 0;
      break;
    case score < 52:
      grade = 1;
      break;
    case score < 64:
      grade = 2;
      break;
    case score < 76:
      grade = 3;
      break;
    case score < 88:
      grade = 4;
      break;
    default:
      grade = 5;
  }
  */
}
