// Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days

(function() {
    "use strict";

    function daysToYourBirthday(birthday) {
        var currDate = new Date();
        //var currDate = new Date(2021, 9, 6);
        var oneDayInMilisec = 1000*60*60*24;
        birthday.setFullYear(currDate.getFullYear());
        
        if(birthday.getMonth() === currDate.getMonth() && birthday.getDay() < currDate.getDay()) {
            birthday.setFullYear(currDate.getFullYear() + 1);
        } 

        var result = Math.round((birthday.getTime() - currDate.getTime()) / oneDayInMilisec);
        console.log(result);

        result = result;
        return "Days to your birthday: " + result + " days"; 
    }


    var birthday = new Date(1990, 4, 25);
    console.log(daysToYourBirthday(birthday));

    
    

})();