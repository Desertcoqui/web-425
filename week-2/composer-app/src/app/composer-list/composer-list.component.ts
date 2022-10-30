// Title: Assignment 2.4 Composer
// Author: Prof Krasso
// Date: 30 Oct 2022
// Modified: Detres
// Description: Assignment 2.4 Composer
// Attribution: Code Exercise/Videos provided by Prof.
// https://www.famouscomposers.net/list

import { Component, OnInit } from '@angular/core';

// exporting of composer class after creating
export default class Composer {
  fullName: string;
  genre: string;
  // composer constructor with two parameters
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})

// exporting of composer list as array
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  // composers arrays from famouscomposers.net/list
  constructor() {
    this.composers = [
      new Composer('Robi Draco', 'Alternative'),
      new Composer('Aaron Copland', 'Folk'),
      new Composer('Anton Bruckner', 'Classical'),
      new Composer('Hans Zimmer', 'New Age'),
      new Composer('John Rutter', 'Classical'),
    ];
  }

  ngOnInit(): void {}
}
