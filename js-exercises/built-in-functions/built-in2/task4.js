// Write a function to split a string and convert it 
// into an array of words.

// 	"John Snow" -> [ 'John', 'Snow' ]

(function () {
    "use strict";

    function makeWordArray(string) {
        return string.split(" ");
    }

    var string = "John Snow";
    console.log(makeWordArray(string));

})();