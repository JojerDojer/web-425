/**
 * Title: app-routing.module.ts
 * Author: John Davidson
 * Date: 26 October 2023
 * Description: Routing file
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// The routes variable of type Routes contains three paths and components.
const routes: Routes = [
  // The default home page.
  {
    path: '',
    component: HomeComponent
  },
  // The home page.
  {
    path: 'home',
    component: HomeComponent
  },
  // The contact page.
  {
    path: 'contact',
    component: ContactComponent
  },
  // The about page.
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
