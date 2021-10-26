var city = "other";
var country = "";

switch(city) {
    case "Belgrade":
    case "Nis":
    case "Kragujevac":
        country = "Serbia";
        break;
    case "Barcelona":
    case "Madrid":
    case "Valencia":
    case "Granada":
        country = "Spain";
        break;
    case "Rome":
    case "Napoli":
    case "Venice":
        country = "Italy";
        break;
    case "Athens":
    case "Thessaloniki":
        country = "Greece";
        break;
    case "Bucharest":
    case "Timisoara":
        country = "Romania";
        break;
    default: 
        country = "Pick another city.";
        break;
}

console.log(country);