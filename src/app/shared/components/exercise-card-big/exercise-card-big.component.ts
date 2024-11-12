import { Component, Input } from '@angular/core';
import { Exercise } from '../../models/exercise.model';
import { ExerciseService } from '../../../core/services/exercise.service';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-exercise-card-big',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './exercise-card-big.component.html',
  styleUrl: './exercise-card-big.component.css'
})
export class ExerciseCardBigComponent {
  @Input() exercise!: Exercise;
}
