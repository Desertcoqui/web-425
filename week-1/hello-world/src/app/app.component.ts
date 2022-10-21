/*
Title: Exercise 1.3 - Hello World
Author: Professor Krasso
Date: 21 Oct 2022
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
  myWorld = 'Ahora estas en el mundo de PAPO!';
}
