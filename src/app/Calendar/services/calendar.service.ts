import { Injectable } from '@angular/core';
import { Calendar } from '../interfaces/calendar.interface';

@Injectable({ providedIn: 'root' })
export class CalendarService {
  public months: number[] = [...Array(12).keys()];
  public actualYear: number = new Date().getFullYear();

  public getDaysOfMonth(year: number, month: number): number[] {
    return Array.from({ length: new Date(year, month + 1, 0).getDate() }, (_, i) => i + 1);
  }

  public generateCalendar(year: number): Calendar[] {
    const months: number[] = [...Array(12).keys()];

    return months.map((month) => {
      const daysOfMonth = this.getDaysOfMonth(year, month);
      const calendar: Calendar = {
        monthKey: new Date(year, month, 1).toLocaleString('default', { month: 'long' }),
        daysOfMonth: daysOfMonth,
        startsOn: new Date(year, month, 1).getDay() + 1,
        status: false, // Initialize status to false for all months
      };
      return calendar;
    });
  }

  constructor() {}
}
