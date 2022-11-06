// Title: Assignment 2.4 Composer
// Author: Prof Krasso
// Date: 30 Oct 2022
// Modified: Detres
// Description: Assignment 2.4 Composer
// Attribution: Code Exercise/Videos provided by Prof.
// https://www.famouscomposers.net/list


//Imports
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})

// exporting of composer array
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  // constructor with new instance of Composer()
  constructor() {
    this.composers = new Composer().getComposer();

  ngOnInit(): void {}
}
