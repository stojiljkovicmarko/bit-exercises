// Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

//Make new array, write over numbers from the old array until you 

var array = [2, -2, 33, 12, 5, 8];
var arrLength = array.length;
var element = 78;
var position = 12;

if (position < array.length && position >= 0) {
    for (var i = array.length; i !== position; i--) {
        array[i] = array[i-1];
    }
    array[position] = element;
    console.log(array);
} else {
    console.log("Error");
}

