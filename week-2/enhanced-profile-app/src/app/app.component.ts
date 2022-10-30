// Title: Assignment 2.3 Data Binding
// Author: Prof Krasso
// Date: 30 Oct 2022
// Modified: Detres
// Description: Assignment 2.3- Data Binding
// Attribution: Code Exercise/Videos provided by Prof.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// exporting loggin method and changing title variable to assignment variable
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = 'Assignment 2.3 - Data Binding';
}
