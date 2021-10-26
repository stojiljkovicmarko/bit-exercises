//Bubble sort - logaritamska vremenska slozenost sve manje iteracija

// var count = 0;
// function bubbleSort(array) {
//     for (var j = 0; j < array.length; j++) {
//         console.log("---------------------------");
//         console.log("j = " + j + ": " + array);
//         console.log("---------------------------");
//         for (var i = 0; i < array.length; i++) {
//             var currElem = array[i];
//             var nextElem = array[i + 1];
//             if (currElem > nextElem) {
//                 array[i] = nextElem;
//                 array[i + 1] = currElem;
//             }
//             console.log("i = " + i + ": " + array);
//             count++;
//         }
//     }
//     return array;
// }

// var array = [300, 1, 65, 7, 9, 2, 103];
// bubbleSort(array);
// console.log(array);
// console.log(count);

//Selection sort - kvadratna vremenska slozenost broj elemenata na kvadrat

function selectionSort(array) {
    var temp;

    for (var j = 0; j < array.length; j++) {
        var min = array[j];
        var indexOfMin = j;
        console.log("---------------------------");
        console.log("j = " + j + ": " + array);
        console.log("---------------------------");
        for (var i = j; i < array.length; i++) {
            var currElem = array[i];
            if (currElem < min) {
                min = currElem;
                indexOfMin = i;
            }
            console.log("i = " + i + ": " + array);
        }

        temp = array[j];
        array[j] = min;
        array[indexOfMin] = temp;

    }
    return array;
}

var array = [300, 1, 65, 7, 9, 2, 103];
selectionSort(array);