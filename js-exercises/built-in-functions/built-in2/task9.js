// Write a program that accepts a string as input and swaps the case 
// of each character. For example, if you input 'The Quick Brown Fox', 
// the output should be 'tHE qUICK bROWN fOX'.

//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

(function () {
    "use strict";

    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';

    function swapUpperLowerCase(string) {
        var array = [];
        for(var i = 0; i < string.length; i++) {

            if(UPPER.indexOf(string[i]) !== -1) {
                array.push(string[i].toLowerCase());
            } else if(LOWER.indexOf(string[i]) !== -1) {
                array.push(string[i].toUpperCase());
            } else {
                array.push(string[i]);
            }
        }

        string = array.join("");
        return string;
    }

    var string = "The Quick Brown Fox...";

    console.log(swapUpperLowerCase(string));

})();