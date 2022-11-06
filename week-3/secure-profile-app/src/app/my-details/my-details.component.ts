// Title: Assignment 3.3 - Passiing Data to Routes, Part 2
// Author: Prof Krasso
// Date: Nov 6 2022
// Modified: Detres
// Description: Assignment 3.2 Passing Data to routes, Part 1
//Week-3 exercises/videos
//https://www.npmjs.com/package/bootstrap-icons
//https://angular.io/api/router/RouterLink
//https://angular.io/tutorial/toh-pt5
//https://stackoverflow.com/questions/41370760/difference-between-
//routerlink-and-routerlink
//https://www.youtube.com/watch?v=2nuUKwyaCzU&t=2s
//https://www.youtube.com/watch?
//time_continue=5&v=jBcIjOtctIY&feature=emb_logo
//https://cyberactive.bellevue.edu/ultra/courses/_513884_1/cl/outline
//https://www.youtube.com/watch?v=T7ef0bOOWs4
//https://www.youtube.com/watch?time_continue=2&v=vvXSW_Cldvg&feature=emb_logo
//https://www.youtube.com/watch?time_continue=4&v=KTVHu4hafUs&feature=emb_logo

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
