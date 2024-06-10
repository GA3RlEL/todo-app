import { Injectable, inject } from "@angular/core";
import { AddTag, Tag, Time, Todo } from "../models/todos.model";
import { Error } from "../components/error/error.model";
import { FirebaseService } from "./firebase.service";

@Injectable({ providedIn: 'root' })
export class TodosService {
  firebaseService = inject(FirebaseService)

  tags:Tag[] = [];

  todos: Todo[] = [];

  selectedDate!: Date | null;
  selectedTag!: Tag | undefined;
  content!: string

  isError: boolean = false
  errorMessage?: Error

  isSelectTag: boolean = false;

  setTags(tags:any){
    this.tags=tags;
  }

  addTag(tag: Tag) {
    this.tags.push(tag);
  }

  updateTodoDone(id: number) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done
        return todo;
      } else {
        return todo;
      }
    })
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
      this.errorMessage = { message: 'Tag' }
      return false
    }
    // else if (!this.time) {
    //   this.isError = true;
    //   this.errorMessage = { message: "Time" }
    //   return false
    // }
    // else if (!this.selectedDate) {
    //   this.isError = true;
    //   this.errorMessage = { message: 'Date' }
    //   return false
    // }
    else {
      this.todos.push({ content: this.content, date: this.selectedDate || new Date(), done: false, id: this.todos.length + 1, tagId: this.selectedTag.id})

      this.resetTodo()
      this.resetError();
      return true;
    }


  }

  resetTodo() {
    this.content = ''
    this.selectedTag = undefined;
    this.selectedDate = null;

  }

  resetError() {
    this.isError = false;
    this.errorMessage = { message: '' };
  }



}
