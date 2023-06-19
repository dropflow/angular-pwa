import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarChartComponent } from './calendar-chart.component';

describe('CalendarChartComponent', () => {
  let component: CalendarChartComponent;
  let fixture: ComponentFixture<CalendarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarChartComponent]
    });
    fixture = TestBed.createComponent(CalendarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
