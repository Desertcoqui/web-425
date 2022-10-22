/*
Title: Exercise 1.5 - App Component
Author: Professor Krasso
Date: 22 Oct 2022
Modified By: Detres
Description: Angular CLI
Code Attribution: Code provided by Professor's walk through videos
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css'],
})
export class MyImageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
