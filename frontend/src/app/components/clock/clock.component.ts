import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VisibleService } from '../../visible.service';
import { Time } from '../../todos.model';
import { TodosService } from '../../todos-section/todos.service';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {
  constructor(private visibleService: VisibleService, private todosService: TodosService) { }
  maxLenght = 2;

  get isVisible() {
    return this.visibleService.setVisibleClock
  }

  get isOutlineVisible() {
    return this.visibleService.setVisibleClockOutline
  }


  hours = 0;
  minutes = 0;



  onSubmit() {
    console.log(this.hours + ":" + this.minutes);
    const time: Time = { hours: this.hours, minutes: this.minutes }
    this.changeVisibility()
    this.todosService.setTime(time);
  }

  checkHour() {
    console.log(this.hours);
    if (this.hours > 24) {
      this.hours = 24
    } if (this.hours < 0) {
      this.hours = 0
    }
  }

  checkMinutes() {
    if (this.minutes > 59) {
      this.minutes = 59
    } if (this.minutes < 0) {
      this.minutes = 0
    }
  }

  increaseHour() {
    this.hours += 1
    this.checkHour()
  }
  decreaseHour() {
    this.hours -= 1
    this.checkHour()
  }
  increaseMinutes() {
    this.minutes += 1
    this.checkMinutes()
  }
  decreaseMinutes() {
    this.minutes -= 1
    this.checkMinutes()
  }

  changeVisibility() {
    this.visibleService.setVisibleClockFun();
  }

  reset() {
    this.hours = 0;
    this.minutes = 0;
  }
}


