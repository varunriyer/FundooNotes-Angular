import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://fundoonotes.incubation.bridgelabz.com/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}/user/login`, { email, password });
  }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/user/userSignUp`, data);
  }

  logout() {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.baseUrl}/user/logout`, {}, {
      headers: { Authorization: token ? `Bearer ${token}` : '' }
    });
  }
}
