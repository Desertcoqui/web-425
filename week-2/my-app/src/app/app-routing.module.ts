// Title: Assignment 2.2 Navigation
// Author: Prof Krasso
// Date: 30 Oct 2022
// Modified: Detres
// Description: Assignment 2.2- Navigation
// Attribution: Code Exercise/Videos provided by Prof.
//
//
//


//importing components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

//paths with routes arrays
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
