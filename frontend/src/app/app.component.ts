import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsidePanelComponent } from "./aside-panel/aside-panel.component";
import { TodosSectionComponent } from "./todos-section/todos-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, AsidePanelComponent, TodosSectionComponent]
})
export class AppComponent {
  title = 'frontend';
}
