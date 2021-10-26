// Write a for loop that will iterate from 0 to 15. For each iteration, 
// it will check if the current number is odd or even, and display a message to the screen.


for (var i = 0; i <= 15; i++) {
    i % 2 === 0 ? console.log(i + " is: Even") : console.log(i + " is Odd");
}

console.log("I nakon petlje: " + i);
var a = i++;
console.log("I nakon uvecanja od 1 posle petlje: " + a);