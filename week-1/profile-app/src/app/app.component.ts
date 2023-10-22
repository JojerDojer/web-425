/**
 * Title: app.component.ts
 * Author: John Davidson
 * Date: 22 October 2023
 * Description: App component
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Initialize a string variable to display the assignment title.
  assignment: string = 'Assignment 1.5 - Components';
}
