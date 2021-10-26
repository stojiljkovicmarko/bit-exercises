// (skip :))Sort a previously defined array. 
// Place its sorted values into a new array whose values are equivalent
//  to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

"use strict";

function sortArrayAscending(array) {
    //var newArray = [];
    for (var i = 0; i < array.length - 1; i++) {
        for( var j = 0; j < array.length - i - 1; j++) {
            if(array[j] > array[j+1]) {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

function doubleValuesInArray(array) {
    var sortedArray = sortArrayAscending(array);
    for(var i = 0; i < sortedArray.length; i++) {
        sortedArray[i] *= 2;
    }
    return sortedArray;
}

//length = 8; i = 0; j = 0 (0 < 8 - 0 true) => arr[0] = 13; arr[0+1] = 11 if (13 > 11) true - swap => [11, 13, 15, 5, 6, 1...]
//length = 8; i = 0; j = 1 (1 < 8 - 0 true) => arr[1] = 13; arr[1+1] = 15 if(13 > 15) false => [11, 13, 15, 5, 6, 1...]
//length = 8; i = 0; j = 2 (2 < 8 - 0 true) => arr[2] = 15; arr[2+1] = 5 if(15 > 5) true - swap => [11, 13, 5, 15, 6, 1...]
//length = 8; i = 0; j = 3 (3 < 8 - 0 true) => arr[3] = 15; arr[3+1] = 6 if(15 > 6) true - swap => [11, 13, 5, 6, 15, 1, 8, 12]
// sledeca interacija menja 15 i 1... [11, 13, 5, 6, 1, 8, 12, 15];
// pretposlednja iteracija
//length = 8; i = 0; j = 7 (7 < 8 - 0 true) => arr[7] = 


var array = [ 13, 11, 15, 5, 6, 1, 8, 12 ];

console.log(sortArrayAscending(array));
console.log(doubleValuesInArray(array));