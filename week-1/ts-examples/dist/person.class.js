"use strict";
// Title: Person 1.4
// Author: Professor Krasso
// Date: 21 Oct 2022
// Modified By: Detres
// Description: Angular CLI
// Code Attribution: Code provided by Professor's walk through videos
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var myName = new Person("Detres", "Papo$");
console.log("My name is ".concat(myName.firstName, " ").concat(myName.lastName));
