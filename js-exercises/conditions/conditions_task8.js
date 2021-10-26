// Task 8. Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum.
// 	Sample Input: 12,5					Sample Input: 8,8
// 	Output : 17						Output : 48

var num1 = 8;
var num2 = 8;
var result;

if (num1 != num2) {
    result = num1 + num2;
} else {
    result = 3 * (num1 + num2);
}

console.log("Output: " + result);