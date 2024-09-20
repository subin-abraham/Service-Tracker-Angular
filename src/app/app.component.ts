import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { UserDashboardComponent } from "./Components/user-dashboard/user-dashboard.component";
import { AdminDashboardComponent } from "./Components/admin-dashboard/admin-dashboard.component";
import { LoginComponent } from "./Components/login/login.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, UserDashboardComponent, AdminDashboardComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Service_Tracker';
}
