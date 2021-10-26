// Write a program that computes average marks of the following students. 
// Then use this average to determine the corresponding grade. 

var students = [
    ["David", 80],
    ["Marko", 77],
    ["Dany", 88],
    ["John", 95],
    ["Thomas", 68]
]

var sumOfPoints = 0;
var numOfStudents = students.length;
var avgPoints;
var avgMark;

for(var i = 0; i < numOfStudents; i++) {
    var currentStudentPoints = students[i][1]
    sumOfPoints += currentStudentPoints;
}

avgPoints = sumOfPoints / numOfStudents;

console.log(sumOfPoints);
console.log(avgPoints);

// avg mark of the class

if( avgPoints <= 60) {
 avgMark = "F";
} else if (avgPoints <= 70) {
    avgMark = "D";
} else if (avgPoints <= 80) {
    avgMark = "C";
} else if (avgPoints <= 90) {
    avgMark = "B";
} else if (avgPoints <= 100) {
    avgMark = "A";
}

console.log(avgMark);