// Title: Assignment 6.4 - Input Properties
// Author: Prof Krasso
// Date: Nov 27 2022
// Modified: Detres
//Week-6 exercises/videos
// https://www.youtube.com/watch?v=9AsogopS9YM&feature=youtu.be
//https://youtu.be/SxAsehrObQo

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css'],
})
export class GpaComponent implements OnInit {
  // ! needed for this version of angular otherwise app won't compile
  @Input() gpaTotal!: number;

  constructor() {}

  ngOnInit(): void {}
}
