// Title: Assignment 6.4 - Input Properties
// Author: Prof Krasso
// Date: Nov 26 2022
// Modified: Detres
//Week-6 exercises/videos
// https://www.youtube.com/watch?v=9AsogopS9YM&feature=youtu.be
//https://youtu.be/SxAsehrObQo

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
})
export class BaseLayoutComponent implements OnInit {
  // assignment variable

  assignment: string;
  // exports to base-layout.component.html
  constructor() {
    this.assignment = 'Exercise 6.4 - Input Properties';
  }

  ngOnInit(): void {}
}
