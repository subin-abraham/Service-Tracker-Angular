import { Component, inject, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ServicesService {
  private apiUrl = 'http://localhost:3000';
  http = inject(HttpClient);
  // httpCLientModule = inject(HttpClientModule);

  register(name: string, username: string, password: string) {
    return this.http.post(`${this.apiUrl}/New-Registration`, { name, username, password });
  }
}
