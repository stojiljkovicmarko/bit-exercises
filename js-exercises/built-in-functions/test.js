var author = {
    name: "George",
    year: 1948,
    country: "US",
    age: function() {
        return 2018 - this.year;
    },
    quotes: [
        "bla"
    ],
};


delete quotes[0]; //reference errror jer evaluira niz
delete country; //nema reference error jer brise property globalnog objekta koji zapravo ne postoji
                //author.country brise iz objekta
                //delete inace ne moze da brise globalne objekte i funkcije

console.log(author);

//sort funkcija

var arr = [2, 4, 7, 11, -2, 1];

arr.sort(function(a, b){
    if(a > b) {
        return 1;
    }

    if(a < b) {
        return -1;
    }

    return 0;
});

console.log(arr);


console.log(isFinite(0));
console.log(isFinite("a"));

console.log(isNaN("123"));
console.log(Number.isNaN("123"));
