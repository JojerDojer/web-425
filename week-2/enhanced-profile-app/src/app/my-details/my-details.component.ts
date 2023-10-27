/**
 * Title: my-details.component.ts
 * Author: John Davidson
 * Date: 27 October 2023
 * Description: App component
 */

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2023", "#CodingWithAngular", "#ngFortWorth"
  ];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

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
    this.myProfile = new Person("John Davidson", "Italian", "Blue");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
