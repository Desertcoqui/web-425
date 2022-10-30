// Title: Assignment 2.4 Composer
// Author: Prof Krasso
// Date: 30 Oct 2022
// Modified: Detres
// Description: Assignment 2.4 Composer
// Attribution: Code Exercise/Videos provided by Prof.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importing of components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  // adding component declarations for Composer, Contact and About
  declarations: [
    AppComponent,
    ComposerListComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
