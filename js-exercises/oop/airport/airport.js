(function () {
    "use strict;"



    // mozda bolja varijanta da ne bismo ispitivali
    // unos kategorije
    var CATEGORY = {
        ECONOMY: "E",
        BUSINESS: "B"
    }
    //Object.freeze(CATEGORY);

    function randomSeatNumber() {
        return Math.floor(Math.random() * 99 + 1);
    }

    function formatDate(date) {
        return date.getDate() + "." +
            (date.getMonth() + 1) + "." +
            date.getFullYear();
    }

    function Person(name, surname) {
        // ovde je instancirana greska koja nigde nije uhvacena
        // kada se ovaj if else stavi u try catch sve radi kako treba
        // mogu da dodam u poslednji else da oba propertija budu null

        try {

        if (typeof name === "string" && typeof surname === "string") {
            this.name = name;
            this.surname = surname;
        } else if (typeof name === "string" && typeof surname !== "string") {
            this.name = name;
            this.surname = null;
        } else if (typeof name !== "string" && typeof surname === "string") {
            this.name = null;
            this.surname = surname;
        } else {
            this.name = null;
            this.surname = null;
            throw new Error("Name and surname must be strings...");
        }
        } catch (err) {
           //  ovde hvatamo gresku
        }

        this.getData = function () {
            return this.name + " " +
                this.surname;
        }
    }

    function Seat(number, category) {
        number = parseInt(number, 10);
        try {
            if (number > 1 && number < 100) {
                this.number = number;
            } else {
                this.number = randomSeatNumber();
            }

            if (category === "B" || category === "E" || category === "b" || category === "e") {
                category = category.toUpperCase();
                this.category = category;
            } else {
                this.category = "E";
                throw new Error("Invalid category, will be put to economy.");
            }
        } catch (err) {
            // not handling exception
        }

        this.getData = function () {
            return this.number + ", " +
                this.category;
        }
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return "\t" + this.seat.getData() + ", " +
                this.person.getData();
        }
    }

    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listOfPassengers = [];
        this.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger);
        }
        this.getData = function () {
            return formatDate(this.date) + ", " +
                this.relation +
                formatFlightData(this.listOfPassengers);
        }
    }

    function formatFlightData(listOfFlights) {
        var string = "";
        listOfFlights.forEach(flight => {
            string += "\n\t" + flight.getData();
        });
        return string;
    }

    function totalPassengersAtAirport(listOfFlights) {
        var totalPassengers = 0;
        for (var i = 0; i < listOfFlights.length; i++) {
            var currFlight = listOfFlights[i];
            for (var j = 0; j < currFlight.listOfPassengers.length; j++) {
                totalPassengers++;
            }
        }
        return totalPassengers;
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        }
        this.getData = function () {
            return "Airport: " + this.name + ", " +
                "total passengers: " + totalPassengersAtAirport(this.listOfFlights) +
                formatFlightData(this.listOfFlights);
        }
    }

    //prvo napravimo  letove, pa dodajemo osobe i proveravamo
    //zauzetost sedista
    var date1 = new Date(2021, 5, 11); // note: months are zero based (0 is January)
    var date1 = new Date("2021, 5, 11");
    var date2 = new Date(2021, 10, 22);

    var flight1 = new Flight(undefined, date1);
    var flight2 = new Flight("Belgrade - New York", date2);

    // try {
        var john = new Person(123, 123);
        var cersei = new Person("Cersei", "Lannister");
        var danny = new Person("Daenerys", "Targaryen");
        var arya = new Person("Arya", "Stark");
        var yara = new Person("Yara", "Greyjoy");

        var seat1 = new Seat(23, "E");
        var seat2 = new Seat(45);
        var seat3 = new Seat(null, "B");
        var seat4 = new Seat(12, "B");
        var seat5 = new Seat(88, "E");

        //isSeatBooked u Flight obj za proveru sedista

        var p1 = new Passenger(john, seat1);
        var p2 = new Passenger(cersei, seat2);
        var p3 = new Passenger(danny, seat3);
        var p4 = new Passenger(arya, seat4);
        var p5 = new Passenger(yara, seat5);

        flight1.addPassenger(p1);
        flight1.addPassenger(p2);
        flight2.addPassenger(p3);
        flight2.addPassenger(p4);
        flight2.addPassenger(p5);

        var airport = new Airport();

        airport.addFlight(flight1);
        airport.addFlight(flight2);

        //console.log(flight1.getData());
        //console.log(flight2.getData());

        console.log(airport.getData());
        console.log(john);
    // } catch (error) {
    //     console.log(error.message);
    // }


})();