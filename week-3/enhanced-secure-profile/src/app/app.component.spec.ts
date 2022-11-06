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

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'enhanced-profile-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('enhanced-profile-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'enhanced-profile-app app is running!'
    );
  });
});
