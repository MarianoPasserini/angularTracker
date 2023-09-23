import { Component, Input, Output } from '@angular/core';
import { Calendar } from '../../interfaces/calendar.interface';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs'; // Import Subscription

@Component({
  selector: 'calendar-structure',
  templateUrl: './calendar-structure.component.html',
  styleUrls: ['./calendar-structure.component.css']
})
export class CalendarStructureComponent {

  @Input()
  public getCalendar: Calendar[] = [];
  public actualYear: number = new Date().getFullYear();
  public flag: boolean = false;
  public monthClicked: Calendar[] = [];
  public daysOnTheWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  private yearChangeSubscription: Subscription; // Create a Subscription

  constructor() {
    this.yearChangeSubscription = this.changedYear.subscribe((value: number) => {
      this.actualYear = value;
      this.updateMonthClicked(); // Update the monthClicked array when the year changes
    });
  }

  expandMonth(index: number) {
    this.getCalendar.forEach((month, i) => {
      if (i == index) {
        month.status = true;
        this.monthClicked.push(month);
        this.changeFlag();
      }
    });
  }

  changeFlag() {
    this.flag = !this.flag;
  }

  resetView(): void {
    this.monthClicked = [];
    this.getCalendar.forEach((month) => {
      month.status = false;
    });
    this.changeFlag();
  }

  @Output()
  public changedYear: EventEmitter<number> = new EventEmitter();

  updateCalendar(value: number) {
    this.changedYear.emit(value);
  }

  changeYear(value: number) {
    this.actualYear += value;
    this.updateCalendar(this.actualYear);
  }

  updateMonthClicked() {
    if (this.monthClicked.length > 0) {
      const selectedMonthKey = this.monthClicked[0].monthKey;
      this.monthClicked = this.getCalendar.filter((month) => month.monthKey === selectedMonthKey);
      this.monthClicked[0].startsOn -= 1;
    }
  }

  ngOnDestroy() {
    this.yearChangeSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  }
}
