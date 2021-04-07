import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CatalogService } from './catalog.service';
import { TEST_CONFIG_MODULE } from './config.test';
import { Pokemon, POKEMON_LIST, POKEMON_TYPES } from './pokemon';

describe(
  'CatalogService', () => {
    let service: CatalogService;

    beforeEach(
      () => {
        TestBed.configureTestingModule(TEST_CONFIG_MODULE);
        service = TestBed.inject(CatalogService);
        spyOn(service, "getAll").and.returnValue( of(POKEMON_LIST) );
        spyOn(service, "getTypes").and.returnValue( of(POKEMON_TYPES) );
      }
    );

    fit(
      'should be created',
      () => {
        expect(service).toBeTruthy();
      }
    );

    fit(
      'should return a pokemon by its id ',
      async () => {
        const id:number = POKEMON_LIST[0].id;
        const pokemon:Pokemon|null = await service.getById(id).toPromise();
        expect(pokemon).not.toBe(null);
        expect(pokemon).toBe(POKEMON_LIST[0]);

        // service.getById(id).subscribe( 
        //   (pokemon:Pokemon|null) => {
            // expect(pokemon).not.toBe(null);
            // expect(pokemon).toBe(POKEMON_LIST[0]);
        //   }
        // )
      }
    );
  }
);
