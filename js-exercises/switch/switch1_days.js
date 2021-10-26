var input = 8;
var day = "";

switch (input) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Monday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        day = "Try again. Input must be from 1 to 7."
        break;
}

console.log(day);