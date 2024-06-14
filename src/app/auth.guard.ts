import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user.pipe(
    take(1),
    map((user) => {
      if (user) {
        authService.currnetUserSig.set({
          email: user.email!,
          username: user.displayName!,
          id: user.uid,
          photoURL: user.photoURL!,
        });
        return true;
      } else {
        router.navigateByUrl('/login');
        return false;
      }
    })
  );
};
