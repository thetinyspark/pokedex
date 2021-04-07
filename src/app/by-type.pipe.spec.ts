import { ByTypePipe } from './by-type.pipe';
import { Pokemon, POKEMON_LIST, POKEMON_TYPES } from './pokemon';

describe(
  'ByTypePipe test suite',
  () => {

    fit(
      'create an instance',
      () => {
        const pipe = new ByTypePipe();
        expect(pipe).toBeTruthy();
      }
    );

    fit(
      'should filter pokemons by their type',
      () => {
        const pipe = new ByTypePipe();
        const currentType:string =  POKEMON_LIST[0].type;
        const results:Pokemon[] = pipe.transform(POKEMON_LIST, currentType);

        results.forEach( 
          (pokemon:Pokemon) => {
            expect(pokemon.type).toEqual(currentType);
          }
        ); 

      }
    );

    fit(
      'should returns no pokemon',
      () => {
        const pipe = new ByTypePipe();
        const currentType:string =  "no_existent_type";
        const types:string[] = POKEMON_TYPES;
        const results:Pokemon[] = pipe.transform(POKEMON_LIST, currentType);

        expect(types).not.toContain(currentType);
        expect(results.length).toEqual(0);
      }
    );
  }
);
