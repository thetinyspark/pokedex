import { TestBed } from '@angular/core/testing';

import { PokemonExistsGuard } from './pokemon-exists.guard';

describe('PokemonExistsGuard', () => {
  let guard: PokemonExistsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PokemonExistsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
