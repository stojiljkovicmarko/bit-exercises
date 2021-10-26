// Write a function that for a given departure and arrival time 
// calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 9 seconds

(function() {
"use strict";

function tripTime(departure, arrival) {
    console.log(arrival.getTime());
    var time = arrival.getTime() - departure.getTime();
    var seconds = Math.floor(time/1000 % 60);
    //console.log(seconds);
    var minutes = Math.floor(time / 1000 / 60 % 60);
    //console.log(minutes);
    var hours = Math.floor(time / 1000 / 60 / 60 % 60);
    //console.log(hours);

    return hours + " hours " + minutes + " minutes " + seconds + " seconds";
    
    
}


var departure = new Date(2021, 4, 27, 13, 0, 0);
var arrival = new Date(2021, 4, 28, 15, 18, 50);

console.log(tripTime(departure, arrival));

})();