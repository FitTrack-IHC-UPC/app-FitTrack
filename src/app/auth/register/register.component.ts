import { Component, inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './../../core/services/auth.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  loginForm!: FormGroup;
  private authService = inject(AuthService);

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get name() {
    return this.loginForm.get('name')!;
  }
  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  get confirmPassword() {
    return this.loginForm.get('confirmPassword')!;
  }

  onSubmit(): void {
    if(this.loginForm.invalid) {
      return;
    }

    const credentials = this.loginForm.value;

    this.authService.register(credentials.name, credentials.email, credentials.password, credentials.confirmPassword);

    if(this.authService.currentUser) {
      alert('Usuario registrado correctamente');
      this.route.navigate(['/auth/login']);
    }
  }


}
