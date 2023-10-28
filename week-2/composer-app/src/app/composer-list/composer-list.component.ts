/**
 * Title: composer-list.component.ts
 * Author: John Davidson
 * Date: 28 October 2023
 * Description: Composer component
 */

import { Component, OnInit } from '@angular/core';

// Define a Composer class with two properties for full name and genre.
export default class Composer {
  fullName: string;
  genre: string;

  // Requires two string parameters.
  constructor(fullName: string, genre: string) {
    // Initialize the class properties with the values passed as parameters.
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Declare a property 'composers' as an array of Composer instances.
  composers: Array<Composer>;
  // Initialize the 'composers' property with an array of Composer objects.
  constructor() {
    this.composers = [
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Richard Wagner", "Classical"),
      new Composer("Claude Debussy", "Classical")
    ]
  }

  ngOnInit(): void {
  }

}
