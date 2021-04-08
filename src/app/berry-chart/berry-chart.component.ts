import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
  private sub:Subscription|null = null;

  constructor( private cd:ChangeDetectorRef, private berryService:BerryService) { }

  ngOnChanges(){console.log("changes");}
  
  ngOnInit(): void {
    console.log("init");

    /*
    this.sub = this.berryService.getGoldenAvgBerryPrice().subscribe( 
      (avg) => {
        console.log("coucou");
        
        this.berryAvgPrice = avg;
        this.cd.markForCheck();
      }
    );
    */
  }
  ngAfterContentInit(){console.log("content init");}
  ngAfterContentChecked(){console.log("content checked");}
  ngAfterViewInit(){console.log("view init");}
  ngAfterViewChecked(){console.log("view checked");}

  ngOnDestroy(){
    if( this.sub !== null ){
      this.sub.unsubscribe();
    }
  }

}
