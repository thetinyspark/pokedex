import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CatalogService } from './catalog.service';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonExistsGuard implements CanActivate {

  constructor(private service: CatalogService, private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    let id: number = -1;
    const str: string | null = route.paramMap.get("id");
    if (str !== null)
      id = parseInt(str);

    return this.service.getById(id).pipe( 

      map( 
        (pokemon:Pokemon|null) => {
          if( pokemon === null )
            this.router.navigate(["/catalog"]);

          return pokemon !== null;
        }
      )
    );

  }

}
