import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from './user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  users: User[] = [];

  email: string = '';

  username: string = '';

  password: string = '';

  message: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Log in a user
  login(username, password) {
    this.apiService
      .login(username, password)
      .subscribe(response => {
        this.message = response.json()['message'];
        console.log(this.message);
        if (response.json()['access_token']) {
          localStorage.setItem('access_token', response.json()['access_token']);
          this.router.navigate(['/bucketlists']);
        }
      });
  }

  // Register a user
  register(username, email, password) {
    this.apiService
      .register(username, email, password)
      .subscribe(response => {
        this.message = response.json()['message'];
        if (response.json()['message']) {
          this.router.navigate(['/auth']);
        }
      });
  }
}
