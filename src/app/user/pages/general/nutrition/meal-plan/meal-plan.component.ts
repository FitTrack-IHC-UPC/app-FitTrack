import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-meal-plan',
  standalone: true,
  imports: [],
  templateUrl: './meal-plan.component.html',
  styleUrl: './meal-plan.component.css'
})
export class MealPlanComponent {
  meals = [
    {
      title: 'Delicias Con Yogurt Griego',
      time: '6 Minutes',
      calories: 200,
      image: 'https://via.placeholder.com/80'
    },
    {
      title: 'Tortilla De Espinacas Y Tomate',
      time: '10 Minutes',
      calories: 220,
      image: 'https://via.placeholder.com/80'
    },
    {
      title: 'Tostada De Palta Y Huevo',
      time: '15 Minutes',
      calories: 150,
      image: 'https://via.placeholder.com/80'
    },
    {
      title: 'Batido De Proteínas Con Frutas',
      time: '9 Minutes',
      calories: 180,
      image: 'https://via.placeholder.com/80'
    }
  ];

  selectedMeal: any = null;

  constructor(private router: Router) {}

  selectMeal(meal: any) {
    this.selectedMeal = meal;
  }

  viewRecipe() {
    this.router.navigate(['user/nutrition/recipe']);
  }
}
