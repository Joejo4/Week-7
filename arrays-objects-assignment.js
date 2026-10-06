// QUESTION 1: Create Student Objects
const students = [
  { id: 1, name: "Alice Johnson", age: 20, grades: [85, 92, 78] },
  { id: 2, name: "Bobby Smith", age: 22, grades: [55, 60, 58] },
  { id: 3, name: "Jos Greg", age: 19, grades: [90, 95, 92] },
  { id: 4, name: "Diana Joseph", age: 21, grades: [70, 75, 80] },
  { id: 5, name: "Victor Ajumobi", age: 23, grades: [40, 45, 50] },
];

// QUESTION 2: Calculate Averages
function calculateAverage(grades) {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  const average = sum / grades.length;
  return Number(average.toFixed(2));
}
const studentsWithAverage = students.map((student) => ({
  ...student,
  average: calculateAverage(student.grades),
}));

console.log("--- Q2: Students With Average ---");
console.log(studentsWithAverage);

// QUESTION 3: Filter Passing Students

// Function to return only students with an average >= 60 using filter()
function getPassingStudents(studentsArr) {
  return studentsArr.filter((student) => student.average >= 60);
}

const passingStudents = getPassingStudents(studentsWithAverage);
console.log("--- Q3: Passing Students ---");
console.log(passingStudents);

// QUESTION 4: Functions & Callbacks
function processStudents(studentsArr, callback) {
  return studentsArr.map((student) => callback({ ...student }));
}

// Callback 1: Adds a letterGrade property based on average score
function addLetterGrade(student) {
  let letterGrade;
  if (student.average >= 90) {
    letterGrade = "A";
  } else if (student.average >= 80) {
    letterGrade = "B";
  } else if (student.average >= 70) {
    letterGrade = "C";
  } else if (student.average >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return { ...student, letterGrade };
}

// Callback 2: Adds a status property ("Pass" or "Fail") based on average score
function addStatus(student) {
  const status = student.average >= 60 ? "Pass" : "Fail";
  return { ...student, status };
}

// Testing Process Students with Callbacks
const studentsWithGrades = processStudents(studentsWithAverage, addLetterGrade);
console.log("--- Q4: Students With Letter Grades ---");
console.log(studentsWithGrades);

const studentsWithStatus = processStudents(studentsWithAverage, addStatus);
console.log("--- Q4: Students With Status ---");
console.log(studentsWithStatus);
