import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },

    {
        path: 'login',
        component: LoginPageComponent
    },

    {
        path: 'register',
        component: RegisterPageComponent
    }
];
