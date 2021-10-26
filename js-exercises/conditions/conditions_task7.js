// Task 7. Write a JavaScript program to get the difference between a given number and 13, 
// if the number is greater than 13 return double difference between that number and 13.
// 	Sample Input: 11					Sample Input: 32
// 	Output : 2						Output : 38

var num = 20;
var result;

if (num > 13) {
    result = (num - 13) * 2;
} else if (num <= 13) {
    result = 13 - num;
}

//Ne uzima se u razmatranje ako je broj = 13.

console.log("Result is: " + result);