import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Exercise } from '../../models/exercise.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css'],
})
export class ExerciseCardComponent {
  @Input() exercise!: Exercise;
  @Output() toggle = new EventEmitter<Exercise>();

  onCardClick() {
    this.toggle.emit(this.exercise);
  }
}
