import { Component, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../../core/services/auth.service';
import { User } from '../../../../../shared/models/user.model';
import { Router } from '@angular/router';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { HomeHeaderComponent } from '../../../../../shared/components/home-header/home-header.component';

interface Exercise {
  title: string;
  duration: number;
  calories: number;
  imageUrl: string;
}

interface Article {
  title: string;
  imageUrl: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,FooterComponent, HomeHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  private authService = inject(AuthService);
  user: User | null = this.authService.currentUser;
  role = this.user?.role;
  name = this.user?.name;

  constructor(private router: Router) {}
  exercises: Exercise[] = [
    { title: 'Squat Exercise', duration: 12, calories: 120, imageUrl: '/assets/images/Exercises/squats.png' },
    { title: 'Full Body Stretching', duration: 12, calories: 120, imageUrl: '/assets/images/Exercises/Stretch.png' },
    { title: 'Cardio Blast', duration: 15, calories: 200, imageUrl: '/assets/images/Exercises/triceps.png' },
    { title: 'Core Workout', duration: 10, calories: 100, imageUrl: '/assets/images/Exercises/plank.png' }
  ];

  articles: Article[] = [
    { title: 'Guía de Suplementos', imageUrl: '/assets/images/premium-articles/im1.jpg' },
    { title: '15 Rutinas Diarias Rápidas y Efectivas', imageUrl: '/assets/images/premium-articles/im1.jpg' },
    { title: 'Nutrición Balanceada', imageUrl: '/assets/images/premium-articles/im8.jpg' },
    { title: 'Consejos para Principiantes', imageUrl: '/assets/images/premium-videos/video2.jpg' }
  ];

  onPremium(): void {
    if(this.role === 'basic') {
      this.router.navigate(['/user/basic/subscribe']);
    }else{
      this.router.navigate(['/user/subscriber/premium-home']);
    }
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
