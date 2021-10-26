// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
 
// Write a function that counts the number of elements less than the middle element. 
// If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

(function(){
    "use strict";

    function hasOddNumberOfElem(array) {
        if(array.length % 2 !== 0) {
            return true;
        }
        return false;
    }

    function countElementsLessThenMiddle(array) {
        if(hasOddNumberOfElem(array)) {
            var count = 0;
            var middleElement = array[(array.length-1) / 2];
            array.forEach(element => {
                if(element < middleElement) {
                    count++;
                }
            });
            return count;
        } else {
            return "Some error";
        }
    }

    var array = [1, 2, 9, 2, 1];
    var arr1 = [-1, 8.1, 3, 6, 2.3, 44, 2.11, 4, 5];

    console.log(hasOddNumberOfElem(array));
    console.log(countElementsLessThenMiddle(arr1));

})();