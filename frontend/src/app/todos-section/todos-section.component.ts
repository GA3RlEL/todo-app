import { Component } from '@angular/core';
import { CalendarComponent } from "../components/calendar/calendar.component";

@Component({
  selector: 'app-todos-section',
  standalone: true,
  templateUrl: './todos-section.component.html',
  styleUrl: './todos-section.component.css',
  imports: [CalendarComponent]
})
export class TodosSectionComponent {

}
