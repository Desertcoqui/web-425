// Title: Assignment 2.3 Data Binding
// Author: Prof Krasso
// Date: 30 Oct 2022
// Modified: Detres
// Description: Assignment 2.3- Data Binding
// Attribution: Code Exercise/Videos provided by Prof.
import { Component, OnInit } from '@angular/core';

// typescript class of Person
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = ['#TypeScript', '#2020', '#CodingWithAngular', '#ngOmaha'];

  // person constructor with three parameters
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(
      `\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`
    );
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;

  // new instance of Person with passed in values
  constructor() {
    this.myProfile = new Person('Detres', 'Pizza', 'Black');
    this.myProfile.toString();
  }

  ngOnInit(): void {}
}
