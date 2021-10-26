var a = 10;
var b = 4;
var operation = "/";
var result;

switch (operation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        // if (b == 0) {
        //     result = "Divison by zero";
        // } else {
        //     result = a / b;
        // }
        b === 0 ? result = "Division by zero" : result = a / b;
        break;
    default:
        result = "Not a operation";
        break;
}

console.log(result);