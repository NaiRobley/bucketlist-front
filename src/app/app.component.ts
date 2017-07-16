import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  access_token: string = '';
  constructor(private apiService: ApiService) {}

  public ngOnInit() {
    this.access_token = localStorage.getItem('access_token');
  }

  public signOut() {
    localStorage.setItem('access_token', null);
  }
}
