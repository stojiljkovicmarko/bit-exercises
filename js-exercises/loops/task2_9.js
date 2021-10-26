// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

var array = [4, 6, 2, 8, 2, 2];
var input = 8;
var newArray = [];


for (var i = 0; i < array.length; i++) {
    if(array[i] !== input) {
        newArray[newArray.length] = array[i];
    }
}

console.log(newArray);