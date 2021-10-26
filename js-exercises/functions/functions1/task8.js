// Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

function repetitionOfNumber (array, number) {
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === number) {
            counter++;
        }
    }
    return counter;
}

var array = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
console.log(repetitionOfNumber(array, e));