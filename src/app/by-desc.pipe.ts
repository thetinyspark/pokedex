import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemon';

@Pipe({
  name: 'byDesc'
})
export class ByDescPipe implements PipeTransform {

  transform(pokemons:Pokemon[], search:string): Pokemon[] {
    return pokemons.filter( pok => pok.desc.toLowerCase().includes(search.toLowerCase()));
  }

}
