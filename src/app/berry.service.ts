import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BerryService {

  constructor() { }

  public getGoldenBerryPrice():Observable<number>{
    return new Observable( 
      (observer) => {
        setInterval( 
          () => {
            for( let i:number = 0; i < 10; i++ ){
              observer.next( Math.random() );
            }
          }, 
          10
        )
      }
    ); 
  }
}
