import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionChartComponent } from './fusion-chart.component';

describe('FusionChartComponent', () => {
  let component: FusionChartComponent;
  let fixture: ComponentFixture<FusionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusionChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
