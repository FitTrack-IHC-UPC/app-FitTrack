import { Injectable } from '@angular/core';
import { Exercise } from '../../shared/models/exercise.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exercises: Exercise[] = [
    { title: 'Sentadillas Con Barra', duration: 45, reps: 12, calories: 250, imageUrl: 'assets/images/Exercises/weight.png', level: 'Intermedio' },
    { title: 'Curls de Martillo', duration: 30, reps: 12, calories: 150, imageUrl: 'assets/images/Exercises/pesas.png', level: 'Principiante' },
    { title: 'Prensa de Pierna', duration: 50, reps: 10, calories: 300, imageUrl: 'assets/images/Exercises/legs.png', level: 'Avanzado' },
    { title: 'Plancha', duration: 60, reps: 1, calories: 150, imageUrl: 'assets/images/Exercises/plank.png', level: 'Principiante' },
    { title: 'Press de Pecho', duration: 45, reps: 10, calories: 220, imageUrl: 'assets/images/Exercises/press.png', level: 'Intermedio' },
    { title: 'Flexiones de Triceps', duration: 30, reps: 12, calories: 180, imageUrl: 'assets/images/Exercises/triceps.png', level: 'Intermedio' },
    { title: 'Flexiones', duration: 40, reps: 15, calories: 200, imageUrl: 'assets/images/Exercises/flex.png', level: 'Principiante' },
    { title: 'Correas Suspension TRX', duration: 45, reps: 12, calories: 250, imageUrl: 'assets/images/Exercises/Pulls.png', level: 'Avanzado' },
    { title: 'Squats', duration: 50, reps: 12, calories: 280, imageUrl: 'assets/images/Exercises/squats.png', level: 'Intermedio' },
    { title: 'Estiramientos', duration: 30, reps: 1, calories: 100, imageUrl: 'assets/images/Exercises/Stretch.png', level: 'Principiante' }
  ];

  private selectedExercises: Exercise[] = [];
  private selectedExercise?: Exercise; // For single selected exercise
  private currentIndex = 0;
  private inRoutineMode = false; // New flag to distinguish single vs routine mode

  getExercises(): Exercise[] {
    return this.exercises;
  }

  getExercisesByLevel(level: 'Principiante' | 'Intermedio' | 'Avanzado'): Exercise[] {
    return this.exercises.filter(exercise => exercise.level === level);
  }

  getSelectedExercise(): Exercise | undefined {
    return this.inRoutineMode ? undefined : this.selectedExercise;
  }

  getSelectedExercises(): Exercise[] {
    return this.selectedExercises;
  }

  getCurrentExercise(): Exercise | undefined {
    return this.inRoutineMode ? this.selectedExercises[this.currentIndex] : this.selectedExercise;
  }

  setSelectedExercise(exercise: Exercise): void {
    this.selectedExercise = exercise;
    this.inRoutineMode = false; // Ensure we're not in routine mode
  }

  setSelectedExercises(exercises: Exercise[]): void {
    this.selectedExercises = exercises;
    this.currentIndex = 0;
    this.inRoutineMode = true; // Set to routine mode
  }

  goToNextExercise(): void {
    if (this.currentIndex < this.selectedExercises.length - 1) {
      this.currentIndex++;
    }
  }

  hasMoreExercises(): boolean {
    return this.currentIndex < this.selectedExercises.length - 1;
  }

  clearSelectedExercises(): void {
    this.selectedExercises = [];
    this.inRoutineMode = false;
  }
}
