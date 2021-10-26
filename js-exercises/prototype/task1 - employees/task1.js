// Employees and Managers

// Create constructor functions with properties representing the following:

// Person: name, surname
// Employee: inherits Person and has job and salary
// Developer: inherits from Employee and has specialization
// Manager: inherits from Employee and has department

// All developers should inherit method:
// getSpecialization which prints out the name of the specialization

// All managers should inherit methods:
// getDepartment which prints out the name of the department
// changeDepartment which sets the department value on the given value

// All employees should inherit methods:
// getData which returns the name, surname and salary 
// getSalary which prints out the salary
// increaseSalary which increases the salary by 10% 



(function () {
    "use strict";


    // PERSON CONSTRUCTOR AND METHODS TO BE 
    // INHERITED IN PROTOTYPE OBJ PROPERTY

    function Person(name, surname, gender) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
    }

    Person.prototype.getFullName = function () {
        var prefix;

        if (this.gender === "male" || this.gender === "Male" || this.gender === "m" || this.gender === "M") {
            prefix = "Mr.";
        } else if (this.gender === "female" || this.gender === "Female" || this.gender === "f" || this.gender === "F") {
            prefix = "Ms.";
        } else {
            prefix = "Mx.";
        }

        return ("Hello. My name is " + prefix + " " + this.name + " " + this.surname + ".");
    };

    // EMPLOYEE CONSTRUCTOR AND PROTOTYPE METHODS

    function Employee(name, surname, gender, job, salary) {
        Person.call(this, name, surname, gender);
        this.job = job;
        this.salary = salary;
    }

    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;

    /* druga opcija za setovanje konstruktora
    Object.defineProperty(Employee.prototype, "constructor", {
        value: Employee,
        enumerable: false,
        writable: true
    }); */

    Employee.prototype.getData = function() {
        return (this.getFullName() + 
        "\nMy salary is: " + this.salary + " eur per month.");
    }

    Employee.prototype.getSalary = function() {
        return this.salary;
    }

    Employee.prototype.increaseSalaryinPercent = function(percent) {
        this.salary += this.salary * percent / 100;
    }

    Employee.prototype.decreaseSalaryinPercent = function(percent) {
        this.salary -= this.salary * percent / 100;
    }

    // DEVELOPER CONSTRUCTOR AND ITS METHODS

    function Developer(name, surname, gender, job, salary, specialization) {
        Employee.call(this, name, surname, gender, job, salary);
        this.specialization = specialization;
    }

    Developer.prototype = Object.create(Employee.prototype);
    Developer.prototype.constructor = Developer;

    Developer.prototype.getSpecialization = function() {
        return "My specialization is " + this.specialization;
    }

    // MANAGER CONSTRUCTOR AND ITS METHODS

    function Manager(name, surname, gender, job, salary, department) {
        Employee.call(this, name, surname, gender, job, salary);
        this.department = department;
    }

    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Manager;

    Manager.prototype.getDepartment = function() {
        return "My department is " + this.department;
    }

    // CREATION OF OBJECTS


    var dumbledore = new Manager("Albus", "Dumbledore", "M", "Head master", 1000, "Hogwarts");
    var hermione = new Developer("Hermione", "Granger", "F", "Witch", 800, "Witchcraft");
    var harry = new Developer("Harry", "Potter", "M", "Wizard", 800, "Defence against the dark arts");

    console.log(dumbledore.getDepartment());
    console.log(hermione.getSpecialization());
    console.log(harry.getSpecialization());


})();