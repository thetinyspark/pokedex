import { ComponentFixture, TestBed } from '@angular/core/testing';
import { initTestModule } from '../config.test';

import { CatalogComponent } from './catalog.component';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(initTestModule);

  beforeEach(
    () => {
      fixture = TestBed.createComponent(CatalogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }
  );

  // fit(
  //   'should create', () => {
  //     expect(component).toBeTruthy();
  //   }
  // );

  // fit(

  //   "should have a select tag with multiple options",
  //   () => {
  //     const document = fixture.nativeElement; 
  //     const selectElement = document.querySelector("select"); 
  //     const optionElements = document.querySelectorAll("option");
  //     expect(true).toBeTruthy();
  //   }
  // );

});
