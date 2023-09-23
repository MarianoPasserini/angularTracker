import { NgModule } from '@angular/core';

import { DayMonthComponent } from './components/get-date/day-month/day-month.component';
import { MainPageComponentComponent } from './pages/main-page-component/main-page-component.component';
import { CommonModule } from '@angular/common';
import { CalendarStructureComponent } from './components/calendar-structure/calendar-structure.component';

@NgModule({
  imports: [CommonModule],
  exports: [MainPageComponentComponent],
  declarations: [DayMonthComponent, MainPageComponentComponent, CalendarStructureComponent],
  providers: [],
})
export class CalendarModule { }
