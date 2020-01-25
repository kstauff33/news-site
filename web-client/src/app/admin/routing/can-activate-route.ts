import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login/login.service';
import { UserRole } from 'src/app/services/model/base_pb';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdmin implements CanActivate {

  constructor(private loginService: LoginService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.authenticationStream().pipe(map(auth => auth.role >= UserRole.AUTHOR));
  }
}
