import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';


interface day {
  dayNumber: number;
  isPrevious: boolean;
  month: number;
  year: number;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  daysName = ['Mon', 'Tue', 'Wed', "Thu", "Fri", "Sat", "Sun"];
  daysToPrint: day[] = [];

  isVisible = false;
  isOutlineVisible = false;

  year = new Date().getFullYear();
  month = new Date().getMonth();

  selectedMonth = new Date().getMonth();
  selectedDate = new Date(this.year, this.selectedMonth + 1, 0)
  selectedYear = new Date().getFullYear();

  firstDayOfMonth = new Date(this.year, this.selectedMonth, 1)

  initialDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1)

  onNextMonth() {
    this.selectedMonth += 1;
    this.selectedDate = new Date(this.year, this.selectedMonth + 1, 0);
    this.firstDayOfMonth = new Date(this.year, this.selectedMonth, 1)
    this.daysToPrint = this.calculateDays(this.firstDayOfMonth)
    this.selectedYear = new Date(this.year, this.selectedMonth + 1, 0).getFullYear();

  }

  onPreviousMonth() {
    this.selectedMonth -= 1;
    this.selectedDate = new Date(this.year, this.selectedMonth + 1, 0);
    this.firstDayOfMonth = new Date(this.year, this.selectedMonth, 1)
    this.daysToPrint = this.calculateDays(this.firstDayOfMonth)
    this.selectedYear = new Date(this.year, this.selectedMonth + 1, 0).getFullYear();
  }

  onShowCalendar() {
    this.changeVisibility()
    this.year = new Date().getFullYear();
    this.selectedYear = new Date().getFullYear();
    this.selectedMonth = new Date().getMonth();
    this.selectedDate = new Date(this.year, this.selectedMonth + 1, 0)
    this.daysToPrint = this.calculateDays(this.initialDayOfMonth);
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
    this.isOutlineVisible = !this.isOutlineVisible
  }

  calculateDays(firstDayOfMonth: Date) {
    const dayName = firstDayOfMonth.toDateString().slice(0, 3);
    const previousMonthDays = new Date(this.year, this.selectedMonth, 0).getDate();
    const actuallMonthDays = new Date(this.year, this.selectedMonth + 1, 0).getDate();

    const difference = this.daysName.findIndex((day) => day === dayName)

    const days: day[] = []
    let counterPrevious = difference;
    let counterActuall = 1;

    for (let i = 0; i < actuallMonthDays + difference; i++) {
      if (counterPrevious > 0) {
        days.push({
          dayNumber: previousMonthDays - counterPrevious + 1,
          isPrevious: true,
          month: this.selectedMonth - 1, year: this.year
        })
        counterPrevious--;

      } else {
        days.push({ dayNumber: counterActuall, isPrevious: false, month: this.selectedMonth, year: this.year })
        counterActuall++;
      }
    }
    return days;
  }

  onSelectDate(day:number, month: number, year: number) {
    this.isVisible = false;

    console.log(new Date(year, month, day));
  }

}
