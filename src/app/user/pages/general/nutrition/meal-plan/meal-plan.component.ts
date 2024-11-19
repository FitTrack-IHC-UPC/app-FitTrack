import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { NgFor } from '@angular/common';
import {ExerciseHeaderComponent} from '../../../../../shared/components/exercise-header/exercise-header.component';

@Component({
  selector: 'app-meal-plan',
  standalone: true,
  imports: [NgFor, ExerciseHeaderComponent, RouterLink],
  templateUrl: './meal-plan.component.html',
  styleUrl: './meal-plan.component.css'
})
export class MealPlanComponent {
  meals = [
    {
      title: 'Delicias Con Yogurt Griego',
      time: '6 Minutes',
      calories: 200,
      image: 'src/assets/images/Recetas/images1.png'
    },
    {
      title: 'Tortilla De Espinacas Y Tomate',
      time: '10 Minutes',
      calories: 220,
      image: 'images2.jpeg'
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
