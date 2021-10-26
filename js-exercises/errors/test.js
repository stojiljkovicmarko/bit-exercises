function sum(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function calculator(x, y, op) {
    return op(x, y);
}

try {
    console.log(calculator(1, 0, as));
} catch (error) {
    console.log(error);
}