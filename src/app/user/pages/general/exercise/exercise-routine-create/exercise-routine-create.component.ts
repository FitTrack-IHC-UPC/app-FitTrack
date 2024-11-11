import { Component, OnInit } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { Exercise } from '../../../../../shared/models/exercise.model';
import { ExerciseCardComponent } from '../../../../../shared/components/exercise-card/exercise-card.component';
import { ExerciseHeaderComponent } from '../../../../../shared/components/exercise-header/exercise-header.component';
import { ExerciseService } from '../../../../../core/services/exercise.service';
import { Router , RouterLink} from '@angular/router';

@Component({
  selector: 'app-exercise-routine-create',
  standalone: true,
  imports: [ExerciseCardComponent, ExerciseHeaderComponent, NgClass, CommonModule],
  templateUrl: './exercise-routine-create.component.html',
  styleUrls: ['./exercise-routine-create.component.css'],
})
export class ExerciseRoutineCreateComponent implements OnInit {
  levels = ['Todos', 'Principiante', 'Intermedio', 'Avanzado'];
  selectedLevel: string = 'Todos';
  exercises: Exercise[] = [];
  filteredExercises: Exercise[] = [];
  featuredExercise?: Exercise;
  selectedExercises: Exercise[] = []; // Keeps track of selected exercises

  constructor(private exerciseService: ExerciseService , private router: Router) {}

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
      this.filteredExercises = this.exercises.filter(ex => !ex.isSelected); // Avoid hiding selected exercises
    } else {
      this.filteredExercises = this.exerciseService
        .getExercisesByLevel(this.selectedLevel as any)
        .filter(ex => !ex.isSelected); // Avoid hiding selected exercises
    }
  }

  filterExercises(searchText: string): void {
    const searchLower = searchText.toLowerCase();
    this.filteredExercises = this.exercises.filter(
      ex =>
        ex.title.toLowerCase().includes(searchLower) &&
        (this.selectedLevel === 'Todos' || ex.level === this.selectedLevel) &&
        !ex.isSelected // Avoid hiding selected exercises
    );
  }

  toggleSelection(exercise: Exercise): void {
    exercise.isSelected = !exercise.isSelected;
    if (exercise.isSelected) {
      this.selectedExercises.push(exercise);
    } else {
      this.selectedExercises = this.selectedExercises.filter(ex => ex !== exercise);
    }
    this.filterExercisesByLevel(); // Update the list without removing selected ones
  }

  saveAndNavigate(): void {
    this.exerciseService.setSelectedExercises(this.selectedExercises); // Save selected exercises
    this.router.navigate(['/user/exercise/exercise-routine']); // Navigate to the routine page
  }
}

