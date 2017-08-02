import { Routes } from '@angular/router';

import { AuthGuard } from './auth-guard.guard';

import { LoginComponent } from './login-component/login-component.component';
import { CalcComponent } from './calc-component/calc-component.component';

export const AppRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'calc',
        canActivate: [AuthGuard],
        component: CalcComponent
    },
    { path: '**', component: LoginComponent }
];