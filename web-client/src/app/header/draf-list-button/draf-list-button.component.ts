import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { UserRole } from 'src/app/services/model/base_pb';

@Component({
  selector: 'app-draf-list-button',
  templateUrl: './draf-list-button.component.html',
  styleUrls: ['./draf-list-button.component.scss']
})
export class DrafListButtonComponent implements OnInit {
  @Input()
  showLabel: boolean;

  isAuthenticated = false;

  constructor(loginService: LoginService) {
    loginService.authenticationStream().subscribe(isAuthed => {
      this.isAuthenticated = isAuthed.role >= UserRole.AUTHOR;
    });
  }

  ngOnInit() {
  }

}
