// Write a program that prints the elements of the following array.

// var a = [
// [1, 2, 1, 24], 
// [8, 11, 9, 4], 
// [7, 0, 7, 27]
// ];

var a = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]
    ];

var i;
var j;
var row = "";

for (i = 0; i < a.length; i++) {
    for (j = 0; j < a[i].length; j++) {
        row += a[i][j] + "\t";
    }
    row += "\n";
}

console.log(row);