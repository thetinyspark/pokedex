import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon, POKEMON_TYPE_ALL } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private service:HttpClient) {}

  public getAll():Observable<Pokemon[]> {  return this.service.get<Pokemon[]>(environment.api.endpoints.pokemons); }

  public getTypes():Observable<string[]>{ return this.service.get<string[]>(environment.api.endpoints.types); }

  public getDefaultType():Observable<string>{ return of(POKEMON_TYPE_ALL);  }

  public getEverything():Observable<{pokemons:Pokemon[], types:string[], defaultType:string}>{
    return forkJoin(
      {
        pokemons:this.getAll(), 
        types:this.getTypes(), 
        defaultType: this.getDefaultType()
      }
    );
  }

}
