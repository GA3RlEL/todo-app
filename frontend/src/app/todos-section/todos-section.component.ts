import { Component, importProvidersFrom } from '@angular/core';

import { TodosService } from './todos.service';
import { Tag, Todo } from '../todos.model';
import { FormsModule } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-todos-section',
  standalone: true,
  templateUrl: './todos-section.component.html',
  styleUrl: './todos-section.component.css',
  imports: [FormsModule, DatePipe, TitleCasePipe],
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

  get tags() {
    return this.todosService.tags;
  }

  get todos() {
    return this.todosService.todos;
  }

  get selectedTag() {
    return this.todosService.selectedTag;
  }


  time = "";

  content = ''

  date = '';

  selectedTagSelect = '';


  setContent() {
    this.todosService.setContent(this.content);
  }

  completeTask(id: number) {
    this.todosService.updateTodoDone(id);
  }

  setTime() {
    this.todosService.setTime(this.time);
  }

  setDate() {
    this.todosService.setDate(new Date(this.date))
  }

  onSubmit() {

    this.setContent()
    this.setTime();
    this.setDate();

    const result = this.todosService.createTodo()
    if (result) {
      this.content = ''
      this.time = ''
      this.date = ''
    }
  }

  findTag(tagId: number) {
    const tag: Tag[] = this.tags.filter(tag => tag.id === tagId)
    return tag[0].color
  }

  selectTag(tag: Tag) {
    this.todosService.setTag(tag);
  }

}
