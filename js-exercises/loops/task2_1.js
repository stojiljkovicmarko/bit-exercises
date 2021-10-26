// Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no


var array = [5, -4.2, 3, 7, 4];
var e = 8;
var res = "No";

for (var i = 0; i < array.length; i++) {
    if (e === array[i]) {
        res = "Yes";
    } 
}

console.log(res);