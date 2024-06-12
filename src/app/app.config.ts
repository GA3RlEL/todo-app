import { ApplicationConfig } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment.development';
import { authGuard } from './auth.guard';
import { loggedGuard } from './logged-guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent, canActivate: [loggedGuard] },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideFirebaseApp(() => initializeApp(environment)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
};
