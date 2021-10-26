var count = 0;

// while (count < 5) {
//     console.log(count);
//     count = count + 1;
// }
// console.log("End of count");

// count = 0 => (0 < 5) true => log(0) => count + 1
// count = 1 => (1 < 5) true => log(1) => count + 1
// count = 2 => (2 < 5) true => log(2) => count + 1
// count = 3 => (3 < 5) true => log(3) => count + 1
// count = 4 => (4 < 5) true => log(4) => count + 1
// count = 5 => (5 < 5) false => izlaz iz petlje

while (true) {
    console.log(count);
    count = count + 1;

    if (count === 5) {
        break;
    }
}
console.log("End of count");