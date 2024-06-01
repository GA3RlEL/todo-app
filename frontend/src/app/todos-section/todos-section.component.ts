import { Component } from '@angular/core';
import { CalendarComponent } from "../components/calendar/calendar.component";
import { ClockComponent } from "../components/clock/clock.component";

@Component({
  selector: 'app-todos-section',
  standalone: true,
  templateUrl: './todos-section.component.html',
  styleUrl: './todos-section.component.css',
  imports: [CalendarComponent, ClockComponent]
})
export class TodosSectionComponent {

}
