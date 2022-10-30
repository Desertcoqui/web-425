// Title: Assignment 2.4 Composer
// Author: Prof Krasso
// Date: 30 Oct 2022
// Modified: Detres
// Description: Assignment 2.4 Composer
// Attribution: Code Exercise/Videos provided by Prof.

// Importing components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Routes which will export to app.component.html
const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent,
  },
  {
    path: 'composer-list',
    component: ComposerListComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

//Export statement
export class AppRoutingModule {}
