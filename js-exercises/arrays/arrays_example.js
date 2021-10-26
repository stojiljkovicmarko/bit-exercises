var array = [];
array.length = 5;

for(var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

array[5] = 5;

console.log("after addition");

for(var i = 0; i < array.length; i++) {
    console.log(array[i]);
}