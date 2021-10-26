// Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."

(function () {
    "use strict";

    function abbreviateName(string) {
        var split = string.split(" ");

        if(split.length > 1) {
            return (split[0] + " " + 
                   split[1].charAt(0) + ".");
        }

        return split[0];
    }

    var s = "Marko Stojiljkovic";
    console.log(abbreviateName(s));

})();