import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exercise-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './exercise-header.component.html',
  styleUrl: './exercise-header.component.css'
})
export class ExerciseHeaderComponent {
  @Output() search = new EventEmitter<string>();

  constructor(private location: Location) {}  // Inject Location service

  searchExercise(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.search.emit(input);  // Emit the search text to the parent component
  }

  // Method to navigate back
  goBack(): void {
    this.location.back();  // Use the Location service to go back to the previous page
  }
}
