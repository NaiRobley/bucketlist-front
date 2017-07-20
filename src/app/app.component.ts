import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  access_token: string = '';

  login_status: string = '';

  constructor( private apiService: ApiService ) {}

  public ngOnInit() {
    this.access_token = localStorage.getItem('access_token');
    this.login_status = localStorage.getItem('login_status');
  }

  public signOut() {
    localStorage.setItem('access_token', null);
    localStorage.setItem('login_status', '0');
    localStorage.setItem('current_user', null);
    localStorage.setItem('email', null);
  }
}
