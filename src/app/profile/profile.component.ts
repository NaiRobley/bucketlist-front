import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../auth/user';

declare var Materialize: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string = '';

  email: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('login_status')) == false) {
      this.router.navigate(['/auth']);
    } else {
      this.username = localStorage.getItem("current_user");
      this.email = localStorage.getItem("email");
    }
  }

  updateUsername(username, password, newUserName) {
    this.apiService
      .updateUsername(username, password, newUserName)
      .subscribe(response => {
        localStorage.setItem('current_user', response.json()['username']);
        this.username = localStorage.getItem("current_user");
        Materialize.toast(response.json()['message'], 4000);
      });
  }

  updateEmail(username, password, newEmail) {
    this.apiService
      .updateEmail(username, password, newEmail)
      .subscribe(response => {
        localStorage.setItem('email', response.json()['email']);
        this.email = localStorage.getItem("email");
        Materialize.toast(response.json()['message'], 4000);
      });
  }

  updatePassword(username, password, newPassword) {
    this.apiService
      .updatePassword(username, password, newPassword)
      .subscribe(response => {
        Materialize.toast(response.json()['message']), 4000;
      });
  }

}
