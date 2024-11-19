import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExerciseHeaderComponent} from '../../../../../shared/components/exercise-header/exercise-header.component';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, ExerciseHeaderComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  // Datos de ejemplo de la receta
  recipe = {
    title: 'Tostada De Palta Y Huevo',
    time: '15 Minutes',
    calories: 150,
    image: 'https://www.lavanguardia.com/files/image_449_220/uploads/2019/07/24/5e997f6d41193.jpeg',
    ingredients: [
      'Pan integral',
      'Rodajas de Palta madura',
      'Huevo frito o escalfado'
    ],
    preparation: `1. Saque la pulpa de la palta y extiéndala sobre el pan tostado aplastándola con el dorso de un tenedor.
    2. Espolvoree con sal, pimienta y un chorrito de limón. Agregue una capa de huevo duro y un poco más de sal y pimienta.`
  };

  constructor() {}

  ngOnInit(): void {}

  saveRecipe() {
    alert('Receta guardada!');
  }

}
