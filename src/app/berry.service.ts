import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BerryService {

  private avgGolden: number[] = [];

  constructor(private socket: Socket) { }

  public getGoldenAvgBerryPrice(): Observable<number> {
    return this.socket.fromEvent<number[]>("berryEvent").pipe(
      map( 
        (values:number[]) => {
          
          let avg:number = 0; 
          
          for( let i:number = 0; i < values.length; i++ ){
            avg += values[i];
          }

          return avg / values.length;
        }
      )
    );
  }

  
}
