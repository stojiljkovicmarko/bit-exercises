// Write a program that calculates the sum of odd elements of a given array. 

function sumOfOddNumbers (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            sum += array[i];
        }
    }
    return sum;
}

var array = [2, 4, 7, 8, 7, 7, 1];
console.log(sumOfOddNumbers(array));