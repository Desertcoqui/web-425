// Title: Assignment 6.4 - Input Properties
// Author: Prof Krasso
// Date: Nov 27 2022
// Modified: Detres
//Week-6 exercises/videos
// https://www.youtube.com/watch?v=9AsogopS9YM&feature=youtu.be
//https://youtu.be/SxAsehrObQo

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css'],
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade!: string;
  @Input() course!: string;

  constructor() {}

  ngOnInit(): void {}
}
