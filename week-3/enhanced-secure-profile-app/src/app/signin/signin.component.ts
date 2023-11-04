/**
 * Title: sign-in.component.ts
 * Author: John Davidson
 * Date: 4 November 2023
 * Description: Sign-in component (sign-in page)
 */


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  // Signin method called when a user signs in.
  signin() {
    this.isLoggedIn = true;

    // Navigates the user to the home page.
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
