import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { RegistrationPageComponent } from './Components/registration-page/registration-page.component';

export const routes: Routes = [
    {path:'',component: LoginComponent},
    {path:'user-dashboard',component: UserDashboardComponent},
    {path:'admin-dashboard',component: AdminDashboardComponent},
    {path:'New-Registration',component: RegistrationPageComponent}
];
