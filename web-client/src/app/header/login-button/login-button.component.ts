import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Input } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit, OnDestroy {

  @Input()
  showLabel: boolean;

  sub: Subscription;
  isAuthenticated = false;

  constructor(private service: LoginService) {
  }

  ngOnInit() {
    this.sub = this.service.authenticationStream().subscribe(auth => {
      this.isAuthenticated = auth.isAuthenticated;
    });
  }

  ngOnDestroy() {
  }
}
