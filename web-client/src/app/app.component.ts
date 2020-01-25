import { Component, HostListener, OnInit, Sanitizer } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationStart } from '@angular/router';
import { Tab } from 'src/app/header/navigation/tabs';
import { MenuToggleService } from 'src/app/services/menu-toggle/menu-toggle.service';
import { InstallService } from 'src/app/services/install/install.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav')
  sideNav;
  open = false;
  title = 'Snews';
  nav: HTMLElement;
  spacer: HTMLElement;
  container: HTMLElement;

  readonly tabs = Tab.tabs;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private menuToggleService: MenuToggleService,
    private router: Router,
    private installService: InstallService,
  ) {
    this.setupScrollOnRoute();
    this.setupIcons(iconRegistry, sanitizer);
  }

  ngOnInit() {
    this.menuToggleService.subscribe(() => (this.open = !this.open));
    this.nav = document.getElementById('tab-nav');
    this.spacer = document.getElementById('spacer');
    this.container = document.getElementById('scroll-container');
  }

  routeTo(link: string) {
    this.router.navigateByUrl(link);
  }

  @HostListener('beforeinstallprompt')
  beforeInstallPrompt($event) {
    this.installService.setEvent($event);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    if (this.container.scrollTop > 50) {
      this.nav.classList.add('sticky-nav');
      this.spacer.style.display = '';
    } else {
      this.nav.classList.remove('sticky-nav');
      this.spacer.style.display = 'none';
    }
  }

  setupIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/twitter.svg')
    );
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/facebook.svg')
    );
    iconRegistry.addSvgIcon(
      'reddit',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/reddit.svg')
    );
  }

  setupScrollOnRoute() {
    this.router.events
      .pipe(filter(x => x instanceof NavigationStart))
      .subscribe(x => {
        const scroll = document.getElementsByTagName('mat-sidenav-content')[0];
        scroll.scrollTo(0, 0);
        const scrollToTop = window.setInterval(() => {
          const pos = window.pageYOffset;

          if (pos > 0) {
            scroll.scrollTo(0, pos - 20);
          } else {
            window.clearInterval(scrollToTop);
          }
        }, 16);
      });
  }
}
