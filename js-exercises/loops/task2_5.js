// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

var array = [3, 11, -5, -3, 2];
var sumOfPositives = 0;

for (var i = 0; i < array.length; i++) {
    var currentNumber = array[i];
    if (currentNumber > 0) {
        sumOfPositives += currentNumber;
    }
}

console.log(sumOfPositives);