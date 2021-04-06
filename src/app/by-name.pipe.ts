import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemon';

@Pipe({
  name: 'byName'
})
export class ByNamePipe implements PipeTransform {

  transform(pokemons:Pokemon[], search:string): Pokemon[] {
    return pokemons.filter( pok => pok.name.toLowerCase().includes(search.toLowerCase()));
  }

}
