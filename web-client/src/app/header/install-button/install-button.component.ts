import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { InstallService } from 'src/app/services/install/install.service';

@Component({
  selector: 'app-install-button',
  templateUrl: './install-button.component.html',
  styleUrls: ['./install-button.component.scss']
})
export class InstallButtonComponent implements OnInit {
  constructor(private installService: InstallService) { }

  ngOnInit() { }

  install() {
    this.installService.install();
  }

  enabled(): boolean {
    return this.installService.canInstall();
  }
}
