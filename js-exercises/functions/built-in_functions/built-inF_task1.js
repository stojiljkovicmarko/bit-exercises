// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

function filterNumbers(array) {
    var newArray = [];

    for(var i = 0; i < array.length; i++) {
        var elem = parseFloat(array[i], 10);
        if (isFinite(elem)) {
            //newArray[newArray.length] = elem;
            newArray.push(elem);
        }
    }
    return newArray;
}

var array  = ["1", "21", undefined, "42", "1e+3", Infinity, "1.1"];

console.log(filterNumbers(array));