import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CatalogService } from './catalog.service';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailResolver implements Resolve<Pokemon|null> {

  constructor( private service:CatalogService ){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pokemon|null> {
    
    const str:string|null = route.paramMap.get("id");
    let id:number = -1;
    if( str !== null ){
      id = parseInt(str);
    }
    return this.service.getById( id );
  }
}
