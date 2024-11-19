import { FooterComponent } from './../../../../../shared/components/footer/footer.component';
import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseHeaderComponent } from '../../../../../shared/components/exercise-header/exercise-header.component';
import { NgFor, } from '@angular/common';
import { User } from '../../../../../shared/models/user.model';
import { AuthService } from '../../../../../core/services/auth.service';
@Component({
  selector: 'app-exercise-progress',
  standalone: true,
  imports: [ExerciseHeaderComponent, NgFor, FooterComponent],
  templateUrl: './exercise-progress.component.html',
  styleUrl: './exercise-progress.component.css'
})

export class ExerciseProgressComponent {
  private authService = inject(AuthService);
  user: User | null = this.authService.currentUser;
  name = this.user?.name;
  gender = this.user?.gender;

  get userImage(): string {
    return this.gender === 'femenino' ? '/assets/images/Exercises/Face.png' : '/assets/images/Exercises/Face1.jpg';
  }

  get genderSymbol(): string {
    return this.gender === 'femenino' ? '♀' : '♂';
  }

  constructor(private router: Router) {}

  navigateHome(): void {
    this.router.navigate(['/user/home']);
  }
}
