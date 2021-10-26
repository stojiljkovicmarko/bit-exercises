// Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

function printChart(array) {
    var wholeChart = "";
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i]; j++) {
            wholeChart += "*";
        }
        wholeChart += "\n";
    }
    return wholeChart;
}

var niz = [5, 3, 7, 10, 2, 13];
console.log(printChart(niz));