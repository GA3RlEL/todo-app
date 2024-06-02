import { Injectable } from "@angular/core";
import { Tag, Time, Todo } from "../todos.model";

@Injectable({ providedIn: 'root' })
export class TodosService {
  tags: Tag[] = [{ id: 1, name: "Personal", color: '#FB8281' }, { id: 2, name: "work", color: "#00FACE" }]

  todos: Todo[] = [{ id: 1, tagId: 1, content: "Lorem Ipsum", time: { hours: 8, minutes: 30 }, date: new Date(), done: false }, { id: 2, tagId: 2, content: "Lorem Ipsum", time: { hours: 15, minutes: 59 }, date: new Date(), done: true }]

  selectedDate!: Date;
  time!: Time

  addTag(tag: Tag) {
    this.tags.push(tag);
  }

  deleteTag(id: number) {
    this.tags = this.tags.filter(tag => tag.id !== id)
  }

  setTime(time: Time) {
    this.time = time;
  }

  setDate(date: Date) {
    this.selectedDate = date;
  }

  createTodo(content: string, tag: Tag) {
    this.todos.push({ content: content, date: this.selectedDate, done: false, id: this.todos.length + 1, tagId: tag.id, time: this.time })
  }

}