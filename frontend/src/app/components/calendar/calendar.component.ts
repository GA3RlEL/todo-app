import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TodosService } from '../../todos-section/todos.service';
import { type day } from '../../todos-section/todos.model';
import { VisibleService } from '../../visible.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  constructor(private todosService: TodosService, private visibleService: VisibleService) { }

  daysName = ['Mon', 'Tue', 'Wed', "Thu", "Fri", "Sat", "Sun"];
  daysToPrint: day[] = [];


  get isVisible() {
    return this.visibleService.setVisibleCalendar
  }
  get isOutlineVisible() {
    return this.visibleService.setVisibleCalendarOutline
  }

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
    this.visibleService.setVisibleCalendarFun();
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

  onSelectDate(day: number, month: number, year: number) {
    this.changeVisibility();
    const date = new Date(year, month, day)
    this.todosService.setDate(date)
    // console.log(date);
    // console.log(this.todosService.selectedDate);
  }

}
