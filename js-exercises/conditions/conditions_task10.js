// Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
// and print range in which number belongs.
// Sample Input: 13			Sample Input: 34			Sample Input: 256
// 	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400

var num = -100;

if (num >= 20 && num < 100) {
    console.log("Its in range: 20 ⇔ 100");
} else if (num > 100 && num <= 400) {
    console.log("Its in range: 100 ⇔ 400");
} else if (num === 100) {
    console.log("Its in both ranges: 20 ⇔ 100 and 100 ⇔ 400");
} else {
    console.log("Its not in range.");
}