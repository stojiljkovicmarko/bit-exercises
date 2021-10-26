var input = 8;
var day = "";

switch(input) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day = "Its weekday";
        break;
    case 6:
    case 7:
        day = "Its weekend.";
        break;
    default:
        day = "Input must be from 1 to 7";
        break;
}

console.log(day);