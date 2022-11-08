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
//https://www.digitalocean.com/community/tutorials/angular-navigation-routerlink-navigate-navigatebyurl
//angular.io/guide/event-binding-->

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isLoggedIn = false;

  // Add Angular's built-in Router to the component's constructor.
  constructor(private router: Router) {}

  ngOnInit(): void {}

  //This function is called is the sign-in.component.html
  signin() {
    this.isLoggedIn = true;
    //using router navigate function
    this.router.navigate(['/home'], {
      queryParams: { isLoggedIn: this.isLoggedIn },
      skipLocationChange: true,
    });
  }
}
