// Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

"use strict";

var newArray = (function (array1, array2) {
    var newArray = [];
    for (var i = 0; i < array1.length; i++) {
        newArray[newArray.length] = array1[i];
        newArray[newArray.length] = array2[i];
    }
    return newArray;
}
)(["a", "b", "c"], [1, 2, 3]);

console.log(newArray);