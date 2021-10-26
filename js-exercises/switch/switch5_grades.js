var grade = "a";
var grade_description = "";

switch (grade) {
    case "A":
        grade_description = "Good job";
        break;
    case "B":
        grade_description = "Pretty good";
        break;
    case "C":
        grade_description = "Passed";
        break;
    case "D":
        grade_description = "Not so good";
        break;
    case "E":
        grade_description = "Failed";
        break;
    default:
        grade_description = "Unknown grade";
        break;
}

console.log(grade_description);