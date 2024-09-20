import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule],
  providers: [HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private apiUrl = 'http://localhost:3000';


  http = inject(HttpClient);
  Router = inject(Router);

  routeToRegistrationPage() {
    this.Router.navigate(['New-Registration']);
  }
}
