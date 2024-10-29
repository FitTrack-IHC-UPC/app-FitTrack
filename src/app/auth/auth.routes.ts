import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const AuthRoutes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login', component: LoginComponent
            },
            {
                path: 'register', component: RegisterComponent
            },
            {
                path: 'profile', component: ProfileComponent
            },
            {
                path: 'reset-password', component: ResetPasswordComponent
            },
        ]
    }
];
