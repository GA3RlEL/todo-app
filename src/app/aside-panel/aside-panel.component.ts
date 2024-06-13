import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../services/todos.service';
import { TitleCasePipe } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { FirebaseService } from '../services/firebase.service';
import { Tag } from '../models/todos.model';
import { AuthService } from '../services/auth.service';
import { UserInterface } from '../models/user.mode';

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
  tagName = '';
  color = '#5c7bbc';
  ngOnInit() {
    this.firebaseService.getTags().subscribe((tags) => {
      this.todosService.setTags(tags);
    });
  }

  get user() {
    return this.authService.currnetUserSig();
  }

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
    this.firebaseService.deleteTag(id);
  }
}
