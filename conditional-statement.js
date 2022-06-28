function getGrade() {
  let score = Number(document.getElementById("not").value);
  let grade;

  if (25 < score && score <= 30) {
    grade = "A";
  }

  if (20 < score && score <= 25) {
    grade = "B";
  }

  if (15 < score && score <= 20) {
    grade = "C";
  }

  if (10 < score && score <= 15) {
    grade = "D";
  }

  if (5 < score && score <= 10) {
    grade = "E";
  }

  if (0 < score && score <= 5) {
    grade = "F";
  }

  if (0 >= score) {
    grade = "Girdiğiniz not 0 (sıfır)'dan az!";
  }
  if (30 < score) {
    grade = "Girdiğiniz not 30'dan fazla!";
  }
  document.getElementById("demo1").innerHTML = grade;
}
