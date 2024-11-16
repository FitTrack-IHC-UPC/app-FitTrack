import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Exercise } from '../../../../../shared/models/exercise.model';
import { ExerciseService } from '../../../../../core/services/exercise.service';
import { ExerciseHeaderComponent } from '../../../../../shared/components/exercise-header/exercise-header.component';
import { CdkDragDrop, CdkDropListGroup, moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
@Component({
  selector: 'app-exercise-routine',
  standalone: true,
  imports: [NgFor,NgIf,DragDropModule,ExerciseHeaderComponent,CdkDropListGroup, FooterComponent],
  templateUrl: './exercise-routine.component.html',
  styleUrl: './exercise-routine.component.css'
})


export class ExerciseRoutineComponent implements OnInit {
  selectedExercises: Exercise[] = [];
  rounds: Exercise[][] = [];

  constructor(private exerciseService: ExerciseService, private router: Router) {}

  ngOnInit(): void {
    this.selectedExercises = this.exerciseService.getSelectedExercises();
    this.createRounds();
  }

  createRounds(): void {
    this.rounds = [];
    for (let i = 0; i < this.selectedExercises.length; i += 2) {
      this.rounds.push(this.selectedExercises.slice(i, i + 2));
    }
  }

  drop(event: CdkDragDrop<Exercise[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  deleteExercise(roundIndex: number, exerciseIndex: number): void {
    this.rounds[roundIndex].splice(exerciseIndex, 1);
    // Remove empty rounds and reindex remaining rounds
    this.rounds = this.rounds.filter((round) => round.length > 0);
  }

  addRoutine(): void {
    this.rounds.push([]);
  }

  startRoutine(): void {
    if (this.selectedExercises.length > 0) {
      this.exerciseService.setSelectedExercises(this.selectedExercises); // Save selected exercises
      this.router.navigate(['/user/exercise/exercise-video']);
    }
  }
}
