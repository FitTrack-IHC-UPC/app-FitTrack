import { Component, inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './../../core/services/auth.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgIf,
    RouterModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  private authService = inject(AuthService);

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get email() {
    return this.resetPasswordForm.get('email')!;
  }

  get newPassword() {
    return this.resetPasswordForm.get('newPassword')!;
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword')!;
  }

  onSubmit(): void {
    if(this.resetPasswordForm.invalid) {
      alert('Por favor, complete los campos requeridos.');
      return;
    }

    const credentials = this.resetPasswordForm.value;

    const user = this.authService.resetPassword(credentials.email, credentials.newPassword, credentials.confirmPassword)


    if(user) {
      this.route.navigate(['/auth/login']);
    }
  }

  cancel(): void {
    this.route.navigate(['/auth/login']);
  }




}
