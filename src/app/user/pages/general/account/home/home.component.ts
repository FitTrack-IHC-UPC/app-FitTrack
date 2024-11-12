import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
interface Exercise {
  title: string;
  duration: number;
  calories: number;
  imageUrl: string;
}

interface Article {
  title: string;
  imageUrl: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  exercises: Exercise[] = [
    { title: 'Squat Exercise', duration: 12, calories: 120, imageUrl: '/assets/images/Exercises/squats.png' },
    { title: 'Full Body Stretching', duration: 12, calories: 120, imageUrl: '/assets/images/Exercises/Stretch.png' },
    { title: 'Cardio Blast', duration: 15, calories: 200, imageUrl: '/assets/images/Exercises/triceps.png' },
    { title: 'Core Workout', duration: 10, calories: 100, imageUrl: '/assets/images/Exercises/plank.png' }
  ];

  articles: Article[] = [
    { title: 'Guía de Suplementos', imageUrl: '/assets/images/premium-articles/im1.jpg' },
    { title: '15 Rutinas Diarias Rápidas y Efectivas', imageUrl: '/assets/images/premium-articles/im1.jpg' },
    { title: 'Nutrición Balanceada', imageUrl: '/assets/images/premium-articles/im8.jpg' },
    { title: 'Consejos para Principiantes', imageUrl: '/assets/images/premium-videos/video2.jpg' }
  ];
}
