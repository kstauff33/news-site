import { Component, OnInit, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Authentication, LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: string;
  password: string;
  auth: Authentication;

  constructor(private service: LoginService) {
  }

  ngOnInit() {
    this.service.authenticationStream().subscribe(auth => {
      this.auth = auth;
    });
  }

  onSubmit() {
  }

  login() {
    this.service.login(this.username, this.password);
    this.username = '';
    this.password = '';
  }

  signup() {
    this.service.register(this.username, this.password);
  }

  logout() {
    this.service.logout();
  }

}
