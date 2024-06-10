import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { TitleCasePipe } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { Tag } from '../../models/todos.model';

@Component({
  selector: 'app-select-tag',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './select-tag.component.html',
  styleUrl: './select-tag.component.css',
  animations: [
    trigger("inAndOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate(
          "300ms ease-in-out",
          style({ opacity: 1 })
        )
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate(
          "300ms ease-in-out",
          style({ opacity: 0 })
        )
      ])
    ])
  ]
})
export class SelectTagComponent {
  constructor(private todoService: TodosService) { }

  get isVisible() {
    return this.todoService.isSelectTag;
  }

  get tags() {
    return this.todoService.tags;
  }

  close() {
    this.todoService.isSelectTag = false;
  }

  setTag(tag: Tag) {
    this.todoService.setTag(tag);
    this.close();
  }

}
