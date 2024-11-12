import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-preference',
  standalone: true,
  imports: [],
  templateUrl: './food-preference.component.html',
  styleUrl: './food-preference.component.css'
})
export class FoodPreferenceComponent {
  selectedPreference: string = '';
  selectedMealType: string = '';
  selectedAllergies: string[] = [];

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
    this.router.navigate(['/new']);
  }

}
