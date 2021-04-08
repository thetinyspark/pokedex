import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BerryService {

  private avgGolden: number[] = [];

  constructor(private socket: Socket) { 
  }

  public getGoldenBerryPrice(): Observable<number> {
    return new Observable(
      (observer) => {
        const myInterval = setInterval(
          () => {
            for (let i: number = 0; i < 1000; i++) {
              observer.next(Math.random());
            }
          },
          1000
        );

        return () => {
          observer.complete();
          clearInterval(myInterval);
        }
      }
    );
  }

  public getGoldenAvgBerryPrice(): Observable<number> {

    return new Observable(
      (observer) => {
        const sub = this.getGoldenBerryPrice().subscribe(
          (value: number) => {
            this.avgGolden.push(value);
            if (this.avgGolden.length % 1000 === 0) {

              let avg: number = 0;
              for (let i: number = 0; i < this.avgGolden.length; i++) {
                avg += this.avgGolden[i];
              }

              avg /= 1000;
              this.avgGolden = [];
              observer.next(avg);
            }
          }
        );

        return () => {
          observer.complete();
          sub.unsubscribe();
        };
      }
    );
  }

}
