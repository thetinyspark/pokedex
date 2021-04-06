import { Injectable } from '@angular/core';
import { Resolve,RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CatalogService } from './catalog.service';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})

export class CatalogResolver implements Resolve<{pokemons:Pokemon[], types:string[], defaultType:string}> {

  constructor(private service:CatalogService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{pokemons:Pokemon[], types:string[], defaultType:string}> {

    return this.service.getEverything();
  }
}
