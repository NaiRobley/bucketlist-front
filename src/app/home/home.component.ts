import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login_status: boolean;

  constructor() { }

  ngOnInit() {
    this.login_status = JSON.parse(localStorage.getItem('login_status'));
  }

}
