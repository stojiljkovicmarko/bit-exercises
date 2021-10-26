// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

"use strict";

function arrStringsToArrNumbers(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var currElem = array[i];
        if (typeof currElem === "string" || typeof currElem === "number") {
            var parsedElem = parseFloat(currElem);
            if (!(isNaN(parsedElem))) {
                newArray[newArray.length] = parsedElem;
            }
        }
    }

    return newArray;
}

var array = ["1", "21", undefined, "42", "1e+3", Infinity, 23, null, "asd"];

console.log(arrStringsToArrNumbers(array));