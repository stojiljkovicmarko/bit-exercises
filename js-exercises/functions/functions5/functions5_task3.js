// Initialize two arrays. The first one should contain student names, 
// the second one the number of points for each student. 
// Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input: 
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: 
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

function didStudentPass(arrayNames, arrayPoints) {
    var listOfGrades = "";
    for(var i = 0; i < arrayNames.length; i++) {
        var currStudent = arrayNames[i];
        var currPoints = arrayPoints[i];
        if(currPoints <= 50) {
            listOfGrades += currStudent + " acquired " + currPoints + " points and failed the exam.\n";
        }
        if(currPoints <= 60 && currPoints > 51) {
            listOfGrades += currStudent + " acquired " + currPoints + " points and earned 6.\n";
        }
        if(currPoints <= 70 && currPoints > 61) {
            listOfGrades += currStudent + " acquired " + currPoints + " points and earned 7.\n";
        }
        if(currPoints <= 80 && currPoints > 71) {
            listOfGrades += currStudent + " acquired " + currPoints + " points and earned 8.\n";
        }
        if(currPoints <= 90 && currPoints > 81) {
            listOfGrades += currStudent + " acquired " + currPoints + " points and earned 9.\n";
        }
        if(currPoints <= 100 && currPoints > 91) {
            listOfGrades += currStudent + " acquired " + currPoints + " points and earned 10.\n";
        }
    }

    return listOfGrades;
}




var arrayNames = [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
var arrayPoints = [ 50, 39, 63, 72, 99, 51, 83, 59 ];

console.log(didStudentPass(arrayNames, arrayPoints));