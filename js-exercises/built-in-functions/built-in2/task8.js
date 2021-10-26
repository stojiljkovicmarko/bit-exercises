// Write a function to hide email addresses to protect them from unauthorized users.

//"somerandomaddress@example.com" -> "somerand...@example.com"


(function () {
    "use strict";

    function hideEmail(email) {
        var arr = email.split("@");

        function sliceEmail(string) {
            if(string.length > 4) {
                return string.slice(0, 4) + "...";
            } else {
                return string[0] + "...";
            }
        }

        arr[0] = sliceEmail(arr[0]);
        return arr.join("@");

    }

    var email = "somerandomaddress@example.com";
    console.log(hideEmail(email));

})();