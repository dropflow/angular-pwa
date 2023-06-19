import { Component } from '@angular/core';

interface CalendarDay {
  dayOfWeek: string;
  dayNumber: number;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  calendarDays: CalendarDay[];
  constructor() {
    this.calendarDays = [
      { dayOfWeek: 'mo', dayNumber: 17 },
      { dayOfWeek: 'tu', dayNumber: 18 },
      { dayOfWeek: 'we', dayNumber: 19 },
      { dayOfWeek: 'th', dayNumber: 20 },
      { dayOfWeek: 'fr', dayNumber: 21 },
      { dayOfWeek: 'sa', dayNumber: 22 },
      { dayOfWeek: 'su', dayNumber: 23 },
    ];
  }
}
