// Write a function to input temperature in Centigrade and convert to Fahrenheit.

function tempConversion(temp, scale) {
    var newTemp;
    var result = "";
    var celsius = "C";
    var fahrenheit = "F";
    if(scale === celsius) {
        newTemp = temp * 9/5 + 32;
        result = temp + celsius + " is " + newTemp + fahrenheit;
        return result;
    }
    if (scale === fahrenheit) {
        newTemp = (temp - 32) * 5/9;
        result = temp + fahrenheit + " is " + newTemp + celsius;
        return result;
    }
}

var temp = tempConversion(100, "F");
console.log(temp);