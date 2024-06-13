import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  query,
  where,
} from '@angular/fire/firestore';
import { AddTag, Tag, Todo } from '../models/todos.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  firestore = inject(Firestore);
  authService = inject(AuthService);
  todosCollection = collection(this.firestore, 'todos');
  tagsCollection = collection(this.firestore, 'tags');

  getTodos() {
    const currentUserId = this.authService.currnetUserSig()?.id;
    const todoQuery = query(
      this.todosCollection,
      where('user_id', '==', currentUserId)
    );
    return collectionData(todoQuery, {
      idField: 'id',
    });
  }

  addTodo(todo: Todo) {
    const currentUserId = this.authService.currnetUserSig()?.id;
    const addTodo: Todo = { ...todo, user_id: currentUserId! };

    addDoc(this.todosCollection, addTodo);
  }

  getTags() {
    const currentUserId = this.authService.currnetUserSig()?.id;
    const tagsQuery = query(
      this.tagsCollection,
      where('user_id', '==', currentUserId)
    );

    return collectionData(tagsQuery, { idField: 'id' });
  }

  addTag(tag: AddTag) {
    const currentUserId = this.authService.currnetUserSig()?.id;
    const addTag = { ...tag, user_id: currentUserId };
    addDoc(this.tagsCollection, addTag);
  }

  deleteTag(id: string) {
    const docRef = doc(this.firestore, 'tags/' + id);
    deleteDoc(docRef);
  }
}
