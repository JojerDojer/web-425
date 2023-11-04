/**
 * Title: sign-in.guard.ts
 * Author: John Davidson
 * Date: 4 November 2023
 * Description: Sign in guard
 */

// Import Angular router modules and application components.
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

// Utilize the CanActivate route guard.
export class SignInGuard implements CanActivate {


  constructor(private router: Router) {}

  // Checks the 'isLoggedIn' query parameter in the route.
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = next.queryParams.isLoggedIn;

    if (isLoggedIn) {
      return true; // If user is logged in, they can access route.
    } else {
      this.router.navigate(['/']);
      return false; // Otherwise, prohibit authorization.
    }
  }
}
