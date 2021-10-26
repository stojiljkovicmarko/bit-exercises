function printDate() {
    var date = new Date();
    console.log(date);
}

function printCurrTime() {
    var date = new Date();
    console.log(date.getDate() +  "/" +
                (date.getMonth() + 1) + "/" +
                date.getFullYear() + ", " +
                date.getHours() + ":" +
                date.getMinutes() + ":" +
                date.getSeconds());
}

printDate();
printCurrTime();