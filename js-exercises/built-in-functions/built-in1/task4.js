// Write a function that finds the smallest element of a given array. 
// The function should return an object that contains 
// the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

(function () {
    "use strict";

    function findLastSmallestNumber(array) {
        var smallestElem = +Infinity;
        var lastIndex = 0;
        array.forEach((element, index) => {
            if (element <= smallestElem) {
                smallestElem = element;
                lastIndex = index;
            }
        });

        return { minValue: smallestElem, minLastIndex: lastIndex };
    }

    var arr = [1, 4, -2, 11, 8, 1, -2, 3];

    console.log(findLastSmallestNumber(arr));


})();