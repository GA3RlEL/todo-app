import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsidePanelComponent } from './aside-panel/aside-panel.component';
import { TodosSectionComponent } from './todos-section/todos-section.component';
import { ErrorComponent } from './components/error/error.component';
import { SelectTagComponent } from './components/select-tag/select-tag.component';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    AsidePanelComponent,
    TodosSectionComponent,
    ErrorComponent,
    SelectTagComponent,
    SettingsComponent,
  ],
})
export class AppComponent {}
