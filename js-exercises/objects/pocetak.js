//apply function to concat 1 array to another

var a1 = [1, 2, 3];
var a2 = [4, 5, 6];
a1.push.apply(a1, a2);
console.log(a1);

//spread operator that is passed to function
//it splits elements into individual parameters
//without for loop

var num = [2, 4, 14, 10, 20];

function sumAll(a, b, c, d) {
    return a + b + c + d;
}

console.log(sumAll(...num));

//spread operator (...variable) that makes possible
//putting elements of array into array without for loop

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var arr4 = [...arr1, ...arr2, ...arr3];
console.log(arr4);


console.log(isFinite(10/1));