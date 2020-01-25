import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { Observable, Subject, of, ReplaySubject } from 'rxjs';
import { first, debounce } from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginServiceClient } from '../model/base_pb_service';
import { TokenValidationRequest, LoginRequest, RegistrationRequest, UserRole } from '../model/base_pb';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private static readonly TOKEN_KEY = 'login-token';
  private client = new LoginServiceClient(environment.server);
  private token: string;
  private authSubject = new ReplaySubject<Authentication>();
  private authentication: Authentication;

  constructor() {
    this.loadToken();
    this.authSubject.subscribe(auth => {
      window.localStorage.setItem(LoginService.TOKEN_KEY, this.token);
    });
  }

  loadToken() {
    const storedToken = window.localStorage.getItem(LoginService.TOKEN_KEY);
    if (!storedToken) { return; }
    const request = new TokenValidationRequest();
    request.setToken(storedToken);
    this.client.validateToken(request).on('data', (response) => {
      if (response.getValid()) {
        this.token = storedToken;
        this.authentication = new Authentication(response.getRole(), true);
        this.authSubject.next(this.authentication);
      } else {
        this.token = null;
        this.authSubject.next(null);
      }
    });
  }

  isAdmin(): boolean {
    return this.authentication.role === UserRole.ADMIN;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }

  authenticationStream(): Observable<Authentication> {
    return this.authSubject;
  }

  logout() {
    this.token = null;
    window.localStorage.setItem(LoginService.TOKEN_KEY, null);
    this.authentication = new Authentication(UserRole.ANONYMOUS, false);
    this.authSubject.next(this.authentication);
  }

  login(username: string, password: string) {
    const request = new LoginRequest();
    request.setUsername(username);
    request.setPassword(password);
    this.client.login(request).on('data', data => {
      this.token = data.getToken();
      this.authentication = new Authentication(data.getRole(), true);
      this.authSubject.next(this.authentication);
    });
  }

  register(username: string, password: string) {
    const request = new RegistrationRequest();
    request.setUsername(username);
    request.setPassword(password);
    console.log('register');
    this.client.register(request).on('data', data => {
      this.token = data.getToken();
      this.authentication = new Authentication(data.getRole(), true);
      this.authSubject.next(this.authentication);
    });
  }

  getHeaders(): grpc.Metadata {
    if (this.isAuthenticated()) {
      const meta = new grpc.Metadata();
      meta.set('Authorization', 'Bearer ' + this.token);
      return meta;
    }
    return null;
  }
}

export class Authentication {
  constructor(public role: number, public isAuthenticated: boolean) { }
}

