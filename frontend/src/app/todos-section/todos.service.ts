import { Injectable } from "@angular/core";
import { Tag } from "../todos.model";

@Injectable({ providedIn: 'root' })
export class TodosService {
  tags: Tag[] = [{ id: 1, name: "Personal", color: '#FB8281' }, { id: 2, name: "work", color: "#00FACE" }]

  selectedDate!: Date;

  addTag(tag: Tag) {
    this.tags.push(tag);
  }

  deleteTag(id: number) {
    this.tags = this.tags.filter(tag => tag.id !== id)
  }

}