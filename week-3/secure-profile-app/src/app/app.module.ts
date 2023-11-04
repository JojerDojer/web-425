/**
 * Title: app.modules.ts
 * Author: John Davidson
 * Date: 4 November 2023
 * Description: App modules
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent,
    HomeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes) // Wired the routing file to the module.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
