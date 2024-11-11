import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AuthRoutes)
    },
    {
        path: 'user',
        loadChildren: () => import('./user/user.routes').then(m => m.UserRoutes)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
