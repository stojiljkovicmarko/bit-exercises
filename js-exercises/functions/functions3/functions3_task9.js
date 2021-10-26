// Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

"use strict";

function hideEmail(email) {
    var newString = "";
    var beforeMonkey = "";
    var fromMonkey = "";
    var position;
    for (var i = 0; i < email.length; i++) {
        var currChar = email[i];
        if (i < 3) {
            beforeMonkey += currChar;
        }
        if (currChar === "@") {
            position = i;
        }
        if (position) {
            fromMonkey += currChar;
        }
    }
    return beforeMonkey + "..." + fromMonkey;
}

var email = "myemailaddress@bgit.rs";

console.log(hideEmail(email));