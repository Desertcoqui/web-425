// Title: Assignment 6.3 Layouts
// Author: Prof Krasso
// Date: Nov 26 2022
// Modified: Detres
//Week-6 exercises/videos
// https://www.youtube.com/watch?v=9AsogopS9YM&feature=youtu.be

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importing of components
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

//routes with child paths
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'session/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
