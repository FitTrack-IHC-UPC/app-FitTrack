import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Exercise } from '../../../../../shared/models/exercise.model';
import { ExerciseHeaderComponent } from '../../../../../shared/components/exercise-header/exercise-header.component';
import { ExerciseService } from '../../../../../core/services/exercise.service';
import { NgIf } from '@angular/common';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-exercise-video',
  standalone: true,
  imports: [ExerciseHeaderComponent,NgIf, FooterComponent],
  templateUrl: './exercise-video.component.html',
  styleUrl: './exercise-video.component.css'
})

export class ExerciseVideoComponent implements OnInit {
  exercise?: Exercise;

  constructor(private exerciseService: ExerciseService, private router: Router) {}

  ngOnInit() {
    this.exercise = this.exerciseService.getCurrentExercise();
    if (!this.exercise) {
      console.error('Exercise data not found in service');
      this.router.navigate(['/user/exercise/exercise-home']);
    }
  }

  onCompleted() {
    this.router.navigate(['/user/exercise/exercise-goal']);
  }
}
