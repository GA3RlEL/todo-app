import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  user,
} from '@angular/fire/auth';
import { updateProfile } from '@firebase/auth';
import { Observable, from } from 'rxjs';
import { UserInterface } from '../models/user.mode';

@Injectable({ providedIn: 'root' })
export class AuthService {
  firebaseAuth = inject(Auth);
  user = user(this.firebaseAuth);
  currnetUserSig = signal<UserInterface | null | undefined>(undefined);

  register(
    email: string,
    username: string,
    password: string
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((res) => updateProfile(res.user, { displayName: username }));

    return from(promise);
  }

  login(email: string, password: string) {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {});

    return from(promise);
  }
}
