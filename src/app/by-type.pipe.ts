import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon, POKEMON_TYPE_ALL } from './pokemon';

@Pipe({
  name: 'byType'
})
export class ByTypePipe implements PipeTransform {

  transform( pokemons:Pokemon[], type:string): Pokemon[] {

    if( type === POKEMON_TYPE_ALL)
      return pokemons;

    return pokemons.filter(
      (pok:Pokemon) => {
        return pok.type === type;
      }
    )
  }

}
