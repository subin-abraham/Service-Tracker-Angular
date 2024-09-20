import { Component, inject } from '@angular/core';
import { ServicesService } from '../../services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {
  ngOnInit() {
    this.getRegisteredUsers();    
  }
  apiUrl = 'http://localhost:3000';
  service = inject(ServicesService);
  router = inject(Router);
  http = inject(HttpClient);
  // Registration Variables
  name: string = "";
  userName: string = "";
  password: string = "";
  registeredUsers: any[] = [];
  registerSuccessMessage = ""
  registerErrorMessage = ""

  register() {
    const registered_users = {
      name: this.name, username: this.userName, password: this.password
    }
    this.http.post(`${this.apiUrl}/New-Registration`, registered_users).subscribe((response) => {
      this.registerSuccessMessage = 'Registration successful. You can now log in!';
      this.registerErrorMessage = '';
      this.getRegisteredUsers();
      this.clearRegistrationFields();
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1000)

    }, (error) => {
      this.registerErrorMessage = 'Registration failed. Please try again.';
      this.registerSuccessMessage = '';
    })
  }
  clearRegistrationFields() {
    this.name = "";
    this.userName = "";
    this.password = "";
  }
  getRegisteredUsers() {
    this.http.get<any[]>(`${this.apiUrl}/registered_user`).subscribe(
      users => {
        this.registeredUsers = users;
      },
      error => {
        console.error('Failed to fetch users', error);
      }
    );
  }
}

