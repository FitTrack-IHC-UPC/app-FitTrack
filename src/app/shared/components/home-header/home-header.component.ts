import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../shared/models/user.model';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {
  constructor(private router: Router) {}

  private authService = inject(AuthService);
    user: User | null = this.authService.currentUser;

  name = this.user?.name;

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
