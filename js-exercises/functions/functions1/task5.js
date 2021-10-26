// Write a program that draws a square of a given size. 
// For example,  if the size of square is 5 the program should draw: 
// *****
// *    *
// *    *
// *    *

function drawSquare(size) {
    var square = "";
    for (var i = 1; i <= size; i++) {
        for (var j = 1; j <= size; j++) {
            if (i === 1 || i === size || j === 1 || j === size) {
                square += "*  ";
            } else {
                square += "   ";
            }

        }
        square += "\n";
    }

    return square;
}

console.log(drawSquare(7));





