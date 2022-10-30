// Title: Assignment 2.2 Navigation
// Author: Prof Krasso
// Date: 30 Oct 2022
// Modified: Detres
// Description: Assignment 2.2- Navigation
// Attribution: Code Exercise/Videos provided by Prof.
//
//
//

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}