import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../services/todos.service';
import { TitleCasePipe } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { FirebaseService } from '../services/firebase.service';
import { Tag } from '../models/todos.model';
import { AuthService } from '../services/auth.service';
import { UserInterface } from '../models/user.mode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-panel',
  standalone: true,
  imports: [FormsModule, TitleCasePipe],
  templateUrl: './aside-panel.component.html',
  styleUrl: './aside-panel.component.css',
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AsidePanelComponent implements OnInit {
  constructor(
    private todosService: TodosService,
    private firebaseService: FirebaseService
  ) {}
  authService = inject(AuthService);
  router = inject(Router);
  tagName = '';
  color = '#5c7bbc';

  ngOnInit() {
    this.firebaseService.getTags().subscribe((tags) => {
      this.todosService.setTags(tags);
    });
    this.todosService.getPhoto();
  }

  get isPhoto() {
    return this.todosService.isPhoto;
  }

  get todos() {
    return this.todosService.todos;
  }

  get user() {
    return this.authService.currnetUserSig();
  }

  length = this.tags.filter((tag) => tag.name === this.user?.id).length;

  isEdit = false;
  isMobile = false;

  showMobile() {
    this.isMobile = !this.isMobile;
  }

  changeEdit() {
    this.isEdit = !this.isEdit;
  }

  get tags() {
    return this.todosService.tags;
  }

  resetTagName() {
    this.tagName = '';
    this.color = '#5c7bbc';
  }

  onSubmit() {
    this.firebaseService.addTag({ color: this.color, name: this.tagName });
    this.resetTagName();
  }

  onDeleteTag(id: string) {
    const todos = this.todos.filter((todo) => todo.tagId === id);
    if (todos.length > 0) {
      if (
        confirm(`If you remove this tag, ${todos.length} todos will be removed`)
      ) {
        this.firebaseService.deleteTodos(todos);
        this.firebaseService.deleteTag(id);
      }
    } else {
      this.firebaseService.deleteTag(id);
    }
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }

  onShowSettings() {
    this.todosService.isSettings = true;
  }
}
