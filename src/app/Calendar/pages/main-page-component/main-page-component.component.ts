import { Component } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-main-page-component',
  templateUrl: './main-page-component.component.html'
})
export class MainPageComponentComponent {
  constructor(private calendarService: CalendarService) { }

  public getCalendar = this.calendarService.getCalendar;

  public consoleDays(): void {
    console.log(this.getCalendar[0].daysOfMonth);
  }
}
