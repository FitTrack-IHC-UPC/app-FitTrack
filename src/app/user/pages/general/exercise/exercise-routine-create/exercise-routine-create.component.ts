import { Component, OnInit } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { Exercise } from '../../../../../shared/models/exercise.model';
import { ExerciseCardComponent } from '../../../../../shared/components/exercise-card/exercise-card.component';
import { ExerciseHeaderComponent } from '../../../../../shared/components/exercise-header/exercise-header.component';
import { ExerciseService } from '../../../../../core/services/exercise.service';
import { Router , RouterLink} from '@angular/router';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-exercise-routine-create',
  standalone: true,
  imports: [ExerciseCardComponent, ExerciseHeaderComponent, NgClass, CommonModule, FooterComponent],
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

  toggleSelection(exercise: Exercise, isFromSelectedList: boolean): void {
    if (isFromSelectedList) {
      // Si el ejercicio está en la lista seleccionada, eliminarlo
      this.selectedExercises = this.selectedExercises.filter(ex => ex !== exercise);
    } else {
      // Si el ejercicio está en la lista general, agregar una copia
      const selectedCopy = { ...exercise };
      this.selectedExercises.push(selectedCopy);
    }
  }

  filterExercisesByLevel(): void {
    if (this.selectedLevel === 'Todos') {
      this.filteredExercises = this.exercises; // Mostrar todos los ejercicios independientemente de si están seleccionados
    } else {
      this.filteredExercises = this.exerciseService.getExercisesByLevel(this.selectedLevel as any);
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

  saveAndNavigate(): void {
    this.exerciseService.setSelectedExercises(this.selectedExercises); // Save selected exercises
    this.router.navigate(['/user/exercise/exercise-routine']); // Navigate to the routine page
  }
}

