import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { TodosService } from '../../todos-section/todos.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
  animations: [
    trigger("inAndOut", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(40rem)" }),
        animate(
          "750ms ease-in-out",
          style({ opacity: 1, transform: "translateX(0)" })
        )
      ]),
      transition(":leave", [
        style({ opacity: 1, transform: "translateX(0)" }),
        animate(
          "600ms ease-in-out",
          style({ opacity: 0, transform: "translateX(40rem)" })
        )
      ])
    ])
  ]
})
export class ErrorComponent {
  constructor(private todosService: TodosService) { }

  get errorMessage() {
    return this.todosService.errorMessage?.message;
  }

  get isError() {
    return this.todosService.isError;
  }

  onClick() {
    this.todosService.resetError();
  }

}
