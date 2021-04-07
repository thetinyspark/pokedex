import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BerryService } from '../berry.service';

@Component({
  selector: 'app-berry-chart',
  templateUrl: './berry-chart.component.html',
  styleUrls: ['./berry-chart.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BerryChartComponent implements OnInit, 
                                            OnChanges, 
                                            AfterContentInit, 
                                            AfterContentChecked, 
                                            AfterViewInit, 
                                            AfterViewChecked, 
                                            OnDestroy {


  public berryAvgPrice:number = 0;
  private values:number[] = [];

  constructor( private cd:ChangeDetectorRef, private berryService:BerryService) { }

  ngOnChanges(){console.log("changes");}
  
  ngOnInit(): void {
    console.log("init");

    this.berryService.getGoldenBerryPrice().subscribe( 
      (value:number) => {
        this.values.push(value);

        if( this.values.length % 1000 === 0 ){
          let avg:number = 0; 
          for( let i:number = 0; i < this.values.length; i++ ){
            avg += this.values[i];
          }

          avg /= 1000;
          this.values = [];
          this.berryAvgPrice = avg;
          this.cd.markForCheck();
        }

      }
    )
  }
  ngAfterContentInit(){console.log("content init");}
  ngAfterContentChecked(){console.log("content checked");}
  ngAfterViewInit(){console.log("view init");}
  ngAfterViewChecked(){console.log("view checked");}
  ngOnDestroy(){console.log("destroy");}

}
