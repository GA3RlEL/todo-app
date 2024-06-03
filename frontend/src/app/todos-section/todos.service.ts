import { Injectable } from "@angular/core";
import { Tag, Time, Todo } from "../todos.model";
import { Error } from "../components/error/error.model";

@Injectable({ providedIn: 'root' })
export class TodosService {
  tags: Tag[] = [{ id: 1, name: "Personal", color: '#FB8281' }, { id: 2, name: "work", color: "#00FACE" }]

  todos: Todo[] = [{ id: 1, tagId: 2, content: "Lorem Ipsum", time: { hours: 8, minutes: 9 }, date: new Date(), done: false }, { id: 2, tagId: 2, content: "Lorem Ipsum", time: { hours: 15, minutes: 59 }, date: new Date(), done: true }]

  selectedDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  selectedTag!: Tag | undefined;
  time!: Time | undefined
  content!: string

  isError: boolean = false
  errorMessage?: Error

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

  deleteTag(id: number) {
    const todosToDelete = this.todos.filter(todo => todo.tagId === id)
    if (todosToDelete.length > 0) {
      if (confirm(`If you remove this tag the ${todosToDelete.length} todos will be remove.\nDo you want to continue?`)) {
        this.todos = this.todos.filter(todo => todo.tagId !== id)
        this.tags = this.tags.filter(tag => tag.id !== id)
      }
    } else {
      this.tags = this.tags.filter(tag => tag.id !== id)
    }



  }

  setTime(time: Time) {
    this.time = time;
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
    else if (!this.time) {
      this.isError = true;
      this.errorMessage = { message: "Time" }
      return false
    }
    else if (!this.selectedDate) {
      this.isError = true;
      this.errorMessage = { message: 'Date' }
      return false
    }
    else {
      this.todos.push({ content: this.content, date: this.selectedDate, done: false, id: this.todos.length + 1, tagId: this.selectedTag.id, time: this.time })

      this.resetTodo()
      this.resetError();
      return true;
    }


  }

  resetTodo() {
    this.content = ''
    this.selectedTag = undefined;
    this.selectedDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    this.time = undefined

  }

  resetError() {
    this.isError = false;
    this.errorMessage = { message: '' };
  }



}