/*
Title: Exercise 1.5 - App Component
Author: Professor Krasso
Date: 22 Oct 2022
Modified By: Detres
Description: Angular CLI
Code Attribution: Code provided by Professor's walk through videos
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  assignment: string = 'Assignment 1.5 - Components';
}
