import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from './user';

declare var Materialize: any;

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

  access_token: string = '';

  login_status: boolean;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  // Log in a user
  login(username, password) {
    this.apiService
      .login(username, password)
      .subscribe(response => {
        this.message = response.json()['message'];
        localStorage.setItem('message', this.message);
        if (response.json()['access_token'] != '') {
          localStorage.setItem('access_token', response.json()['access_token']);
          Materialize.toast("Successfully logged in!", 5000);
          this.router.navigate(['/bucketlists']);
          localStorage.setItem('login_status', JSON.stringify(this.login_status = true));
          localStorage.setItem('current_user', response.json()['username']);
          localStorage.setItem('email', response.json()['email'])
        } else {
          localStorage.setItem('login_status', JSON.stringify(this.login_status = false));
          localStorage.setItem('current_user', null);
          localStorage.setItem('email', null);
          this.router.navigate(['/auth']);
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
          Materialize.toast("Successfully registered. Log in now!", 5000);
          this.router.navigate(['/auth']);
        }
      });
  }
}
