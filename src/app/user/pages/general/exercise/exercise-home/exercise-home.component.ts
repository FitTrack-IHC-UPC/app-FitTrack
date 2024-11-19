import { Component, OnInit } from '@angular/core';
import { NgClass,CommonModule } from '@angular/common';
import { Exercise } from '../../../../../shared/models/exercise.model';
import { ExerciseCardComponent } from '../../../../../shared/components/exercise-card/exercise-card.component';
import { ExerciseHeaderComponent } from '../../../../../shared/components/exercise-header/exercise-header.component';
import { ExerciseCardBigComponent } from '../../../../../shared/components/exercise-card-big/exercise-card-big.component';
import { ExerciseService } from '../../../../../core/services/exercise.service';
import { RouterLink, Router } from '@angular/router';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
@Component({
  selector: 'app-exercise-home',
  standalone: true,
  imports: [ExerciseCardComponent,ExerciseHeaderComponent,ExerciseCardBigComponent,NgClass,CommonModule,RouterLink,FooterComponent],
  templateUrl: './exercise-home.component.html',
  styleUrl: './exercise-home.component.css'
})

export class ExerciseHomeComponent implements OnInit {
  levels = ['Todos', 'Principiante', 'Intermedio', 'Avanzado'];
  selectedLevel: string = 'Todos';
  exercises: Exercise[] = [];
  filteredExercises: Exercise[] = [];
  featuredExercise?: Exercise;

  constructor(private exerciseService: ExerciseService, private router: Router) {}

  ngOnInit() {
    this.exercises = this.exerciseService.getExercises();
    this.featuredExercise = this.exercises[0];
    this.filterExercisesByLevel();
  }

  setLevel(level: string): void {
    this.selectedLevel = level;
    this.filterExercisesByLevel();
  }

  filterExercisesByLevel(): void {
    if (this.selectedLevel === 'Todos') {
      this.filteredExercises = this.exercises;
    } else {
      this.filteredExercises = this.exerciseService.getExercisesByLevel(this.selectedLevel as any);
    }
  }

  filterExercises(searchText: string): void {
    this.filteredExercises = this.exercises.filter(
      ex =>
        ex.title.toLowerCase().includes(searchText.toLowerCase()) &&
        (this.selectedLevel === 'Todos' || ex.level === this.selectedLevel)
    );
  }

  // Method to navigate to the exercise-video page
  goToExerciseVideo(exercise: Exercise): void {
    this.exerciseService.setSelectedExercise(exercise); // Ensure only single exercise selection
    this.router.navigate(['/user/exercise/exercise-video']);
  }


}
