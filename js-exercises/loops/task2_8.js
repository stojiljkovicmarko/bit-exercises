// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var newArray = [];


for (var i = 0; i < array2.length; i++) {
    newArray[i] = array1[i];
    newArray[i + array1.length] = array2[i];
}

console.log(newArray);