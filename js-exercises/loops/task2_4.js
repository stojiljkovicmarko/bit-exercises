// Write a program that finds the first element larger than minimum and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var array = [-4, -4, 2, 2, -10, 1, 6];
var minValue = +Infinity;
var secondMinValue = +Infinity;
var i;

for (i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
        minValue = array[i];
        console.log(minValue);
        console.log(secondMinValue);
        console.log("---------");
    } else if()


    console.log(minValue);
    console.log(secondMinValue);
    console.log("---------");
}

// for (i = 0; i < array.length; i++) {
//     if(array[i] > minValue && array[i] < secondMinValue) {
//         secondMinValue = array[i];
//     }
// } 

console.log("Minimal value is: " + minValue);
console.log("Second minimal value is: " + secondMinValue);