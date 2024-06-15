import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
} from '@angular/fire/auth';
import { updateProfile } from '@firebase/auth';
import { Observable, from, map, take } from 'rxjs';
import { UserInterface } from '../models/user.mode';
import { ErrorService } from './error.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  firebaseAuth = inject(Auth);
  user = user(this.firebaseAuth);
  currnetUserSig = signal<UserInterface | null | undefined>(undefined);
  errorService = inject(ErrorService);

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

  logout() {
    if (this.errorService.isError) {
      this.errorService.resetError();
    }
    const promise = signOut(this.firebaseAuth);

    return from(promise);
  }

  updateProfile(username: string) {
    const promise = updateProfile(this.firebaseAuth.currentUser!, {
      displayName: username,
    }).then(() => {
      this.currnetUserSig.set({
        ...this.currnetUserSig()!,
        username: username,
      });
    });

    return promise;
  }
}
