import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseHeaderComponent } from '../../../../../shared/components/exercise-header/exercise-header.component';
import { Exercise } from '../../../../../shared/models/exercise.model';
import { ExerciseService } from '../../../../../core/services/exercise.service';
import { NgIf } from '@angular/common';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
@Component({
  selector: 'app-exercise-goal',
  standalone: true,
  imports: [ExerciseHeaderComponent,NgIf, FooterComponent],
  templateUrl: './exercise-goal.component.html',
  styleUrl: './exercise-goal.component.css'
})

export class ExerciseGoalComponent implements OnInit {
  exercise?: Exercise;
  noMoreExercises = false;

  constructor(private exerciseService: ExerciseService, private router: Router) {}

  ngOnInit(): void {
    this.exercise = this.exerciseService.getCurrentExercise();
  }

  goToNextExercise(): void {
    if (this.exerciseService.hasMoreExercises()) {
      this.exerciseService.goToNextExercise();
      this.router.navigate(['/user/exercise/exercise-video']);
    } else {
      this.noMoreExercises = true;
    }
  }

goHome(): void {
    this.router.navigate(['/user/exercise/exercise-home']);
  }
}
