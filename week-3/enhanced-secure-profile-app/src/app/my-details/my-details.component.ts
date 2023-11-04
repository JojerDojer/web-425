/**
 * Title: my-details.component.ts
 * Author: John Davidson
 * Date: 4 November 2023
 * Description: My details component
 */

import { Component, OnInit } from '@angular/core';

// Represents a person with properties for fullName, favoriteFood, favoriteColor, and keywords.
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2023", "#CodingWithAngular", "#ngFortWorth"
  ];

  // Constructor to initialize a Person object with a full name, favorite food, and favorite color.
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  // A method to log the person's details to the console.
  toString() {
    console.log(`\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    // Creating a new Person object representing "John Davidson" with "Italian" as favorite food and "Blue" as favorite color.
    this.myProfile = new Person("John Davidson", "Italian", "Blue");
     // Calling the toString method to log the person's details.
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
