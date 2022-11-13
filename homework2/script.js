let a = prompt();
let grades = [60, 30, 50, 66, 77, 60, 80, 90, 65, 76];
for (let i = 0; i < a.length; i++) {
  grades.push(a);
}
function displayGrade(x) {
  console.log("the grade is " + x);
}
grades.forEach(displayGrade);
