import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class VisibleService {
  setVisibleCalendar = false
  setVisibleCalendarOutline = false;
  setVisibleClock = false;
  setVisibleClockOutline = false;


  setVisibleCalendarFun() {
    this.setVisibleCalendar = !this.setVisibleCalendar;
    this.setVisibleCalendarOutline = !this.setVisibleCalendarOutline;
    this.setVisibleClock = false
    this.setVisibleClockOutline = false;
  }

  setVisibleClockFun() {
    this.setVisibleCalendar = false;
    this.setVisibleCalendarOutline = false;
    this.setVisibleClock = !this.setVisibleClock;
    this.setVisibleClockOutline = !this.setVisibleClockOutline;
  }

}