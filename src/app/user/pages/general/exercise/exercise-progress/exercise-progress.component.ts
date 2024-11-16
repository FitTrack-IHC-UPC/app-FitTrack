import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseHeaderComponent } from '../../../../../shared/components/exercise-header/exercise-header.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-exercise-progress',
  standalone: true,
  imports: [ExerciseHeaderComponent, NgFor],
  templateUrl: './exercise-progress.component.html',
  styleUrl: './exercise-progress.component.css'
})

export class ExerciseProgressComponent {
  constructor(private router: Router) {}

  navigateHome(): void {
    this.router.navigate(['/user/home']);
  }
}
