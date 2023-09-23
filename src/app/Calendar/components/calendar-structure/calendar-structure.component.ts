import { Component, Input } from '@angular/core';
import { Calendar } from '../../interfaces/calendar.interface';

@Component({
  selector: 'calendar-structure',
  templateUrl: './calendar-structure.component.html',
  styleUrls: ['./calendar-structure.component.css']
})
export class CalendarStructureComponent {

  @Input()
  public getCalendar: Calendar[] = []; //Get the input from the service
  public actualYear: number = new Date().getFullYear(); // Get the actual year
  public flag: boolean = false; // Flag to check if the month is expanded
  public monthClicked: Calendar[] = []; // Array to store the month clicked
  public daysOnTheWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // Array to store the days of the week
  public tracker: number = -1; // Tracker to check the number of months expanded

  expandMonth(index: number) {
    this.getCalendar.forEach((month, i) => {
      if (i == index) {
        month.status = true;
        console.log("LOGGEANDO EL MONTH: ", month.status);
        this.tracker = index;
        this.returnMonthClicked();
        this.changeFlag();
      }
    });
  }

  changeFlag() {
    this.flag = !this.flag;
    console.log("LOGGEANDO LA FLAG: ", this.flag);
  }

  returnMonthClicked(): void{
    this.monthClicked = this.getCalendar.filter((month) => month.status == true);
  }

  resetView(): void {
    if (this.tracker >= 0 && this.tracker < this.getCalendar.length) {
      this.getCalendar[this.tracker].status = false;
    }
    this.monthClicked = [];
    this.changeFlag();
  }
}
