// Title: Assignment 2.3 Data Binding
// Author: Prof Krasso
// Date: 30 Oct 2022
// Modified: Detres
// Description: Assignment 2.3- Data Binding
// Attribution: Code Exercise/Videos provided by Prof.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importing of components
import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  // added two declarations from myimage and my detail compponents
  declarations: [AppComponent, MyImageComponent, MyDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
