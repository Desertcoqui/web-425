/*
Title: Exercise 1.5 - App Component
Author: Professor Krasso
Date: 22 Oct 2022
Modified By: Detres
Description: Angular CLI
Code Attribution: Code provided by Professor's walk through videos
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDetailsComponent } from './my-details.component';

describe('MyDetailsComponent', () => {
  let component: MyDetailsComponent;
  let fixture: ComponentFixture<MyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
