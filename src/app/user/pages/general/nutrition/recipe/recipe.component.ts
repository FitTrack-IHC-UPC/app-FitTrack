import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RecipeHeaderComponent } from '../../../../../shared/components/recipe-header/recipe-header.component';
import { inject } from '@angular/core';
import { RecipesService } from '../../../../../core/services/recipes.service';
import { Meal } from '../../../../../shared/models/meal.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, RecipeHeaderComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  private recipesService = inject(RecipesService);
  id: number = 1;
  recipe: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getRecipe();
  }

  saveRecipe() {
    alert('Receta guardada!');
  }

  getRecipe(): void {
    this.recipe = this.recipesService.getRecipeById(this.id);
  }

}
