import { Component } from '@angular/core';
import { AsidePanelComponent } from '../aside-panel/aside-panel.component';
import { TodosSectionComponent } from '../todos-section/todos-section.component';
import { SettingsComponent } from '../components/settings/settings.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [AsidePanelComponent, TodosSectionComponent, SettingsComponent],
})
export class HomeComponent {}
