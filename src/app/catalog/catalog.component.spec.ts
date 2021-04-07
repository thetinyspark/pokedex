import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { initTestModule } from '../config.test';
import { POKEMON_LIST, POKEMON_TYPES, POKEMON_TYPE_ALL } from '../pokemon';

import { CatalogComponent } from './catalog.component';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(
    () => {
      initTestModule(
        [
          {
            provide: ActivatedRoute, 
            useValue: {
              paramMap: of( convertToParamMap( {id: 1})),
              data: of(
                { catalogData:{pokemons:POKEMON_LIST, types:POKEMON_TYPES, defaultType: POKEMON_TYPE_ALL} }
              )
            }
          }
        ]
      )
    }
  );

  beforeEach(
    () => {
      fixture = TestBed.createComponent(CatalogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }
  );

  fit(
    'should create', () => {
      expect(component).toBeTruthy();
    }
  );

  fit(

    "should have a select tag with multiple options",
    () => {
      const document = fixture.nativeElement; 
      const optionElements = document.querySelectorAll("option");
      for( let i:number = 0; i < optionElements.length; i++ ){
        expect(POKEMON_TYPES).toContain(optionElements[i].textContent);
      }
    }
  );

});
