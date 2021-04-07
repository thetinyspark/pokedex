import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CatalogService } from './catalog.service';
import { initTestModule, TEST_CONFIG_MODULE } from './config.test';
import { Pokemon, POKEMON_LIST, POKEMON_TYPES } from './pokemon';

describe(
  'CatalogService', () => {
    let service: CatalogService;

    beforeEach(initTestModule);

    beforeEach(
      () => {
        service = TestBed.inject(CatalogService);
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
      }
    );
  }
);
