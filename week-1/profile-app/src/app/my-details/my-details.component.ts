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
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
