// Write a program that calculates a number of integer values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3

function countOfIntegers(array) {
    var count = 0;

    for (var i = 0; i < array.length; i++) {
        var currElem = array[i];
        var parsedElem = parseInt(currElem);

        if (!(isNaN(parsedElem)) && currElem % 1 === 0) {
            count++;
        }
    }
    return count;

}

var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

console.log(countOfIntegers(array));