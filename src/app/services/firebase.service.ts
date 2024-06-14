import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';
import { AddTag, Todo } from '../models/todos.model';
import { AuthService } from './auth.service';
import {
  Storage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from '@angular/fire/storage';
import { from } from 'rxjs';
import { TodosService } from './todos.service';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  firestore = inject(Firestore);
  authService = inject(AuthService);
  storage = inject(Storage);
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

  deleteTodos(todos: any[]) {
    console.log(todos);
    todos.map((todo) => {
      deleteDoc(doc(this.firestore, 'todos/' + todo.id));
    });
  }

  updateDone(todo: any) {
    setDoc(doc(this.firestore, 'todos/' + todo.id), {
      ...todo,
      done: !todo.done,
    });
  }

  uploadPhoto(photo: File) {
    const storageRef = ref(this.storage, this.authService.currnetUserSig()?.id);
    const promise = uploadBytesResumable(storageRef, photo).then(
      (data) => data
    );

    return from(promise);
  }

  getPhoto() {
    const storageRef = ref(this.storage, this.authService.currnetUserSig()?.id);
    const promise = getDownloadURL(storageRef)
      .then((url) => {
        return url;
      })
      .catch(() => {
        return '/assets/images/no_profile.jpg';
      });

    return promise;
  }
}
