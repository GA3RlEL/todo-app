import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  testimonials = [
    {
      id: 0,
      content:
        "I've tried many to-do apps, but this one is unbeatable. The cross-device sync and reminders keep me on track. Perfect for managing team tasks too!",
      image: 'assets/images/mark.jpg',
      personalData: {
        name: 'Mark',
        position: 'Project Manager',
      },
    },
    {
      id: 1,
      content:
        'This app is a lifesaver! It helps me organize my projects and deadlines effortlessly. Highly recommend it to anyone who needs a reliable time management tool!',
      image: 'assets/images/kasia.jpg',
      personalData: {
        name: 'Kasia',
        position: 'Graphic Designer',
      },
    },
  ];

  actuallIndex = 0;

  changeIndex(id: number) {
    this.actuallIndex = id;
  }
}
