// Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var newArray = [];

for (var i = 0; i < array1.length; i++) {
    newArray[newArray.length] = array1[i];
    //console.log("duzina: " + newArray.length);
    newArray[newArray.length] = array2[i];
    //console.log("duzina: " + newArray.length);
}

console.log(newArray);

