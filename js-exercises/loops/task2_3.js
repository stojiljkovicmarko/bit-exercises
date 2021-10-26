// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var array = [0, 2, 2, -10, 6];
var minValue = array[0];
var minValueIndex = 0;

for (var i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
        minValue = array[i];
        minValueIndex = i;
    }
}

console.log(minValue + ", " + minValueIndex);
