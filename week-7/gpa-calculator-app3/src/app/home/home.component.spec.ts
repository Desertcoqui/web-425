// Title: Assignment 7.2- Template Driven and Reactive Forms
// Author: Professor Krasso
// Date: Dec 4 2022
// Modified: Detres
//Week-7 exercises/videos
//https://www.youtube.com/watch?v=hAaoPOx_oIw

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
