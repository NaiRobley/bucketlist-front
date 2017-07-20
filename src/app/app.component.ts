import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  access_token: string = '';

  login_status: boolean;

  constructor(
    private apiService: ApiService,
    private router: Router
     ) {}

  public ngOnInit() {
    this.access_token = localStorage.getItem('access_token');
    this.login_status = JSON.parse(localStorage.getItem('login_status'));
  }

  public signOut() {
    localStorage.removeItem('access_token');
    localStorage.setItem('login_status', JSON.stringify(this.login_status = false));
    localStorage.removeItem('current_user');
    localStorage.removeItem('email');
    this.router.navigate(['/auth']);
  }
}
