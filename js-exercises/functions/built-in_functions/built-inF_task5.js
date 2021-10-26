// Write a program that calculates a number of float values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2

function numOfFloats(array) {
    var count = 0;

    for (var i = 0; i < array.length; i++) {
        var currElem = array[i];
        if (!(isNaN(currElem)) && currElem % 1 !== 0) {
            count++;
        }
    }

    return count;
}

var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

console.log(numOfFloats(array));