// Write a program that finds the first element larger than minimum and prints out its value. 
// First sort the array
// Input array: [4, 2, 2, -1, 6];
// Output: 2

var array = [4, 4, 4];
var helper = 0;
var minValue = +Infinity;
var secondMinValue = +Infinity;

for (var i = 1; i < array.length; i++) {
    for(var j = 0; j < i; j++) {
        if(array[i] < array[j]) {
            helper = array[i];
            array[i] = array[j];
            array[j]= helper;
        }
    }
}

minValue = array[0];

for(var i = 0; i < array.length; i++) {
    if(array[i] !== minValue) {
        secondMinValue = array[i];
        break;
    } else {
        secondMinValue = "No second value";
    }
}

console.log(array);
console.log(secondMinValue);


