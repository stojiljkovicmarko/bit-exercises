// (skip :))Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

"use strict";

function sortArrayDescending(array) {
    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < array.length - i; j++) {
            if(array[j] < array[j+1]) {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

var array = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
console.log(sortArrayDescending(array));

