import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { NgFor } from '@angular/common';
import { RecipesService} from '../../../../../core/services/recipes.service';
import { inject } from '@angular/core';
import { Meal } from '../../../../../shared/models/meal.model';
import { RecipeHeaderComponent } from '../../../../../shared/components/recipe-header/recipe-header.component';

@Component({
  selector: 'app-meal-plan',
  standalone: true,
  imports: [NgFor, RecipeHeaderComponent, RouterLink],
  templateUrl: './meal-plan.component.html',
  styleUrl: './meal-plan.component.css'
})
export class MealPlanComponent {
  recipes: Meal[] = [];
  private recipesService = inject(RecipesService);

  selectedMeal: any = null;
  
  constructor(private router: Router) {}
  ngOnInit() {
    this.loadRecipes();
  }
  selectMeal(meal: any) {
    this.selectedMeal = meal.id;
  }

  viewRecipe(id: number) {
    this.router.navigate(['user/nutrition/recipe', id]);
  }

  loadRecipes() {
    for (let i = 1; i <= 4; i++){
      this.recipes.push(this.recipesService.getRecipeById(i));
    }

  }

}
