import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const payload = { email: this.email, password: this.password };
    this.http.post('https://fundoonotes.incubation.bridgelabz.com/api/user/login', payload)
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.id);
          this.router.navigate(['/dashboard/notes']);
        },
        error: () => alert('Login failed')
      });
  }
}
