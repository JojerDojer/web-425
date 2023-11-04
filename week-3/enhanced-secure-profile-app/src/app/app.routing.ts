/**
 * Title: app.routing.ts
 * Author: John Davidson
 * Date: 4 November 2023
 * Description: Routing file
 */

// Import Angular router modules and application components.
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignInGuard } from './sign-in.guard';

// Route configurations for different components.
export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard] // Applies the canActivate route guard when a user attempts to navigate to home page w/o signing in.
  },
]
