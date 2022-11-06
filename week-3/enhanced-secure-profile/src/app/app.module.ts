// Title: Assignment 3.3 - Passiing Data to Routes, Part 2
// Author: Prof Krasso
// Date: Nov 6 2022
// Modified: Detres
// Description: Assignment 3.2 Passing Data to routes, Part 1
//Week-3 exercises/videos
//https://www.npmjs.com/package/bootstrap-icons
//https://angular.io/api/router/RouterLink
//https://angular.io/tutorial/toh-pt5
//https://stackoverflow.com/questions/41370760/difference-between-
//routerlink-and-routerlink
//https://www.youtube.com/watch?v=2nuUKwyaCzU&t=2s
//https://www.youtube.com/watch?
//time_continue=5&v=jBcIjOtctIY&feature=emb_logo
//https://cyberactive.bellevue.edu/ultra/courses/_513884_1/cl/outline
//https://www.youtube.com/watch?v=T7ef0bOOWs4
//https://www.youtube.com/watch?time_continue=2&v=vvXSW_Cldvg&feature=emb_logo
//https://www.youtube.com/watch?time_continue=4&v=KTVHu4hafUs&feature=emb_logo

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importing components
import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent,
    SignInComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    //Imports from app.routing.ts
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
