import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../todos-section/todos.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-aside-panel',
  standalone: true,
  imports: [FormsModule, TitleCasePipe],
  templateUrl: './aside-panel.component.html',
  styleUrl: './aside-panel.component.css'
})
export class AsidePanelComponent {
  constructor(private todosService: TodosService) { }
  tagName = '';
  color = "#5c7bbc";

  isEdit = false

  changeEdit() {
    this.isEdit = !this.isEdit;
  }

  get tags() {
    return this.todosService.tags;
  }

  resetTagName() {
    this.tagName = '';
    this.color = '#5c7bbc'
  }

  onSubmit() {
    this.todosService.addTag({ id: this.tags.length + 1, name: this.tagName, color: this.color })
    this.resetTagName();
  }

  onDeleteTag(id: number) {
    this.todosService.deleteTag(id);
  }



}
