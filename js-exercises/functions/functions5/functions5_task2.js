// Use the following array to make a new one by dividing its values by two and adding 5. 
// If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

"use strict";

function newElements(array) {
    var newElem = 0;
    for(var i = 0; i < array.length; i++) {
        var currElem = array[i];
        newElem = currElem / 2 + 5;
        if(newElem === 0) {
            array[i] = 20;
        }
        else {
            array[i] = newElem;
        }
    }
    return array;
}

var array = [ 3, 500, -10, 149, 53, 414, 1, 19 ];

console.log(newElements(array));