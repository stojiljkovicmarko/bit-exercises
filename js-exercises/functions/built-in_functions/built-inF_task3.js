// Write a program to filter out falsy values from the array.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]

function isFalsy(array) {

    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        var elem = array[i];
        if (elem) {
            newArray.push(elem);
        }
    }
    return newArray;

}

var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(isFalsy(array));