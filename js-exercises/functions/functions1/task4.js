// Write a program that calculates an arithmetic mean of four numbers.

function arithmeticMean() {
    var arithmeticMean = 0;

    for (var i = 0; i < arguments.length; i++) {
        arithmeticMean += arguments[i];
    }

    arithmeticMean /= arguments.length;
    return arithmeticMean;
}

console.log(arithmeticMean(2, 3, 4, 5, 6));