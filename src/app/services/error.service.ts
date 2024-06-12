import { Injectable } from '@angular/core';
import { Error } from '../models/error.model';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  isError: boolean = false;
  errorMessage?: Error;

  resetError() {
    this.isError = false;
    this.errorMessage = { message: '' };
  }
}
