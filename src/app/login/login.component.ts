import { Component } from '@angular/core';
import { CarouselComponent } from '../components/carousel/carousel.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [CarouselComponent],
})
export class LoginComponent {}
