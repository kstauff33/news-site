import {
  Component,
  OnInit,
  Output,
  HostListener,
  ChangeDetectionStrategy
} from '@angular/core';
import { element } from '@angular/core/src/render3';
import { Input } from '@angular/core';
import { FocusOrigin } from '@angular/cdk/a11y';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import { MenuToggleService } from 'src/app/services/menu-toggle/menu-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private menuToggleService: MenuToggleService) { }

  ngOnInit() { }

  toggleMenu() {
    this.menuToggleService.toggle();
  }
}
