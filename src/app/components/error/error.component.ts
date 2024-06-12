import { animate, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
  animations: [
    trigger('inAndOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(40rem)' }),
        animate(
          '750ms ease-in-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(
          '600ms ease-in-out',
          style({ opacity: 0, transform: 'translateX(40rem)' })
        ),
      ]),
    ]),
  ],
})
export class ErrorComponent {
  errorService = inject(ErrorService);

  get errorMessage() {
    return this.errorService.errorMessage?.message;
  }

  get isError() {
    return this.errorService.isError;
  }

  onClick() {
    this.errorService.resetError();
  }
}
