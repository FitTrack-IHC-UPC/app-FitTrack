import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {BoxCheckedRadioComponent} from './box-checked-radio/box-checked-radio.component';
import {CommonModule} from '@angular/common';
import { RecipeHeaderComponent } from '../../../../../shared/components/recipe-header/recipe-header.component';
interface Alternatives{
  name:string;
}

interface AlternativesAlergias{
  name:string;
}

interface AlternativesTiposComida{
  name:string;
}
@Component({
  selector: 'app-food-preference',
  standalone: true,
  imports: [
    BoxCheckedRadioComponent,
    CommonModule,
    RecipeHeaderComponent
  ],
  templateUrl: './food-preference.component.html',
  styleUrl: './food-preference.component.css'
})
export class FoodPreferenceComponent {
  selectedPreference: string = '';
  selectedMealType: string = '';
  selectedAllergies: string[] = [];

  alternatives: Alternatives[] = [
    {name:"Vegetario"},
    {name:"Gluten-free"},
    {name:"Vegano"},
    {name:"Keto"},
    {name:"Paleo"},
    {name:"No preference"}
  ]
  alternativesAlergias: AlternativesAlergias[]=[
    {name:"Nueces"},
    {name:"Lacteos"},
    {name:"Mariscos"},
    {name:"Huevos"},
    {name:"Sin alergia"},
    {name:"Otros"}
  ]
  alternativesTiposComida: AlternativesTiposComida[]=[
    {name:"Desayuno"},
    {name:"Almuerzo"},
    {name:"Snacks"},
    {name:"Cena"}
  ]

  constructor(private router: Router) {}

  selectPreference(preference: string) {
    this.selectedPreference = preference;
  }

  togglePreference(allergy: string) {
    if (this.selectedAllergies.includes(allergy)) {
      this.selectedAllergies = this.selectedAllergies.filter(item => item !== allergy);
    } else {
      this.selectedAllergies.push(allergy);
    }
  }

  selectMealType(mealType: string) {
    this.selectedMealType = mealType;
  }

  onNext() {
    console.log('Preferencia Alimenticia Seleccionada:', this.selectedPreference);
    console.log('Alergias Seleccionadas:', this.selectedAllergies);
    console.log('Tipo de Comida Seleccionado:', this.selectedMealType);

    // Navega al nuevo componente
    this.router.navigate(['/user/nutrition/meal-plan']);
  }


}
