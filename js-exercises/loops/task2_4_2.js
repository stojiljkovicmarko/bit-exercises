var c = [0, 0, 0];
var min1 = Infinity;
var min = Infinity;
var x = [];
for (i = 0; i < c.length; i++) {
    if(min > c[i]) {
        min1 = min;
        min = c[i];
    } else if (min1 > c[i] && c[i] > min) {
        min1 = c[i];
    } 
}
if(min1 === Infinity) {
    console.log('All elemets is equal')
} else{
    console.log(min1)
}
