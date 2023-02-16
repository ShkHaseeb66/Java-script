// 12. Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
const marks = [];
const subjects = ["Physics", "Chemistry", "Biology", "Mathematics", "Computer"];

for (let i = 0; i < subjects.length; i++) {
  marks[i] = parseInt(prompt(`Enter marks for ${subjects[i]}:`));
}

const totalMarks = marks.reduce((sum, current) => sum + current, 0);
const percentage = (totalMarks / (subjects.length * 100)) * 100;
let grade;

if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else if (percentage >= 40) {
  grade = "E";
} else {
  grade = "F";
}

console.log(`Percentage: ${percentage}%`);
console.log(`Grade: ${grade}`);
