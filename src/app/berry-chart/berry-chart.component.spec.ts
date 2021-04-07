import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryChartComponent } from './berry-chart.component';

describe('BerryChartComponent', () => {
  let component: BerryChartComponent;
  let fixture: ComponentFixture<BerryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerryChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
