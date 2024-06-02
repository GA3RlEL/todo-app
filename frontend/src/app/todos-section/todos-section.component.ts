import { Component, importProvidersFrom } from '@angular/core';
import { CalendarComponent } from "../components/calendar/calendar.component";
import { ClockComponent } from "../components/clock/clock.component";
import { TodosService } from './todos.service';
import { Tag } from '../todos.model';
import { FormsModule } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-todos-section',
  standalone: true,
  templateUrl: './todos-section.component.html',
  styleUrl: './todos-section.component.css',
  imports: [CalendarComponent, ClockComponent, FormsModule],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ],
})
export class TodosSectionComponent {
  constructor(private todosService: TodosService) { }

  selectedTag!: Tag;
  content = '';

  get tags() {
    return this.todosService.tags;
  }

  get todos() {
    return this.todosService.todos;
  }

  onSubmit() {
    this.todosService.createTodo(this.content, this.selectedTag)
  }

  findTag(tagId: number) {
    const tag: Tag[] = this.tags.filter(tag => tag.id === tagId)
    return tag[0].color
  }

  selectTag(tag: Tag) {
    this.selectedTag = tag;
    console.log(tag);
  }

}
