// Write a JavaScript function that reverses a number. 
// typeof result of the function should be “number”.

// 	12345 -> 54321

(function() {
    "use strict";

    function reverseNumber(number) {
        var sNum = number.toString().split("").reverse().join("");
        sNum = parseInt(sNum);
        console.log(sNum);
        console.log(typeof sNum);
    }


    reverseNumber(12345);

})();