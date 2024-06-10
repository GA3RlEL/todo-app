import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app'
import {getFirestore, provideFirestore} from '@angular/fire/firestore'
import { provideAnimations } from '@angular/platform-browser/animations'
import {provideAuth,getAuth} from '@angular/fire/auth'
import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const firebaseConfig = {
  apiKey: process.env['apiKey'],
  authDomain: process.env['authDomain'],
  projectId: process.env['projectId'],
  storageBucket: process.env['storageBucket'],
  messagingSenderId: process.env['messagingSenderId'],
  appId: process.env['appId'],
};

const routes:Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent}
]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideAnimations(), provideFirebaseApp(()=>initializeApp(firebaseConfig)), provideFirestore(()=> getFirestore()),provideAuth(()=>getAuth())]
};
