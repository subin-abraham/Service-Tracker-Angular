import { Component, inject } from '@angular/core';
import { ServicesService } from '../../services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {
  service = inject(ServicesService);
  router = inject(Router);
  // Registration Variables
  name: string = "";
  userName: string = "";
  password: string = "";
  registerSuccessMessage = ""
  registerErrorMessage = ""

  register() {
    this.service.register(this.name, this.userName, this.password).subscribe((response) => {
      this.registerSuccessMessage = 'Registration successful. You can now log in!';
      this.registerErrorMessage = '';
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
}
