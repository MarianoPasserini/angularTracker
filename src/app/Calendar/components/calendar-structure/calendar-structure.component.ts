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

  expandMonth(index: number) {
    this.getCalendar.forEach((month, i) => {
      if (i == index) {
        month.status = true;
        console.log("LOGGEANDO EL MONTH: ", month.status);
        console.log( "LOGGEANDO EL INDEX: ", index)
        this.monthClicked.push(month);
        this.changeFlag();
      }
    });
  }
  testing(){
    console.log(this.getCalendar)
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
    console.log("LOGGEANDO EL ARRAY DE MESES: ", this.monthClicked);
  }
}
