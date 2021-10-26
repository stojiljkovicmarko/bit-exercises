// Write a program that calculates a number of digits of a given number. 

function digitsInNumber(number) {

    var counter;
    
    for(counter = 1; number >= 10; counter++) {
        number = number / 10;
    }
    return counter;
}

var number = 100;
console.log(digitsInNumber(number));