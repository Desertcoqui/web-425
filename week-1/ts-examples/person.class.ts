// Title: Person 1.4
// Author: Professor Krasso
// Date: 21 Oct 2022
// Modified By: Detres
// Description: Angular CLI
// Code Attribution: Code provided by Professor's walk through videos

import { IPerson } from "./person.interface";

class Person implements IPerson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let myName = new Person("Detres", "Papo$");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
