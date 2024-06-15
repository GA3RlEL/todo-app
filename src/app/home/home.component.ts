import { Component } from '@angular/core';
import { AsidePanelComponent } from '../aside-panel/aside-panel.component';
import { TodosSectionComponent } from '../todos-section/todos-section.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { ErrorComponent } from '../components/error/error.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    AsidePanelComponent,
    TodosSectionComponent,
    SettingsComponent,
    ErrorComponent,
  ],
})
export class HomeComponent {}
