// Title: Assignment 5.2 Navigation n layout
// Author: Prof Krasso
// Date: Nov 18 2022
// Modified: Detres
//Week-5 exercises/videos
//https://www.npmjs.com/package/bootstrap-icons
//https://angular.io/api/router/RouterLink
//https://angular.io/tutorial/toh-pt5
// https://stackoverflow.com/questions/41370760/difference-between-routerlink-and-routerlink
//https://youtu.be/d6gJLs3ZZII
//https://stackoverflow.com/questions/74114391/npm-install-err-code-eresolve-while-resolving-angular-user-idle3-0-0

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment: string;
  constructor() {
    //new title
    this.assignment = 'Exercise 5.2 - Navigation and Layout';
  }
}
