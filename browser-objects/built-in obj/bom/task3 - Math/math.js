function randomNumbers() {
    var arr = new Array(10);

    for (var i = 0; i < arr.length; i++) {
        arr[i] = Math.random() * 49 + 1;
        //console.log(number);
    }
    //console.log(arr);
    return arr;
}

function roundTo2Decimals(callBackFn) {
    arr = callBackFn();
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toFixed(2);
        //console.log(number);
    }
    //console.log("to 2 decimals: \n" + arr);
    return arr;
}

function roundedNumbers(callBackFn) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = Math.round(arr[i]);
        //console.log(number);
    }
    console.log("rounded: " + arr);
    return arr;
}

function maxNumber(array) {

    var maxNum = arr.reduce(function (a, b) {
        return Math.max(a, b);
    });
    console.log("max number is: " + maxNum)
}


var array = roundedNumbers(roundTo2Decimals(randomNumbers));
maxNumber(array);