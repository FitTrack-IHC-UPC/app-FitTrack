import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-questions',
  standalone: true,
  imports: [],
  templateUrl: './profile-questions.component.html',
  styleUrl: './profile-questions.component.css'
})
export class ProfileQuestionsComponent {
  constructor(private router: Router) { }
  
  onConfirm() {
    this.router.navigate(['/user/home']);
  }
}
