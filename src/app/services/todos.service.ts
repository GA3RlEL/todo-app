import { Injectable, inject } from '@angular/core';
import { Tag, Todo } from '../models/todos.model';
import { Error } from '../models/error.model';
import { FirebaseService } from './firebase.service';
import { map, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {
  firebaseService = inject(FirebaseService);

  tags: Tag[] = [];

  todos: Todo[] = [];

  selectedDate!: Date | null;
  selectedTag!: Tag | undefined;
  content!: string;

  isError: boolean = false;
  errorMessage?: Error;

  isSelectTag: boolean = false;
  isSettings: boolean = true;
  isPhoto!: string;

  setTags(tags: any) {
    this.tags = tags;
  }

  setTodos(todos: any) {
    this.todos = todos;
  }

  addTag(tag: Tag) {
    this.tags.push(tag);
  }

  async getPhoto() {
    try {
      this.isPhoto = await this.firebaseService.getPhoto();
    } catch (error) {
      this.isPhoto = '/assets/images/no_profile.jpg';
    }
  }

  updateTodoDone(id: string) {
    this.todos = this.todos.map((todo) => {
      if (todo.user_id === id) {
        todo.done = !todo.done;
        return todo;
      } else {
        return todo;
      }
    });
  }

  setDate(date: Date) {
    this.selectedDate = date;
  }

  setTag(tag: Tag) {
    this.selectedTag = tag;
  }

  setContent(content: string) {
    this.content = content;
  }

  createTodo() {
    if (!this.selectedTag) {
      this.isError = true;
      this.errorMessage = { message: 'Tag' };
      return false;
    } else {
      console.log(this.selectedDate?.toISOString());
      console.log(this.selectedDate?.toDateString());
      this.firebaseService.addTodo({
        content: this.content,
        date: this.selectedDate?.toISOString() || new Date().toISOString(),
        done: false,
        tagId: this.selectedTag.id,
        user_id: null,
      });

      this.resetTodo();
      this.resetError();
      return true;
    }
  }

  resetTodo() {
    this.content = '';
    this.selectedTag = undefined;
    this.selectedDate = null;
  }

  resetError() {
    this.isError = false;
    this.errorMessage = { message: '' };
  }
}
