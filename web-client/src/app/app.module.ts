import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { ServicesModule } from './services/services.module';
import { HeaderModule } from './header/header.module';
import { HomepageModule } from './homepage/homepage.module';
import { MatIconModule } from '@angular/material/icon';
import { RedlineModule } from './redline/redline.module';
import { BaseLayoutModule } from './base-layout/base-layout.module';
import { LocationStrategy } from '@angular/common';
import { HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    MatSidenavModule,
    MatListModule,
    RouterModule,
    ServicesModule,
    HeaderModule,
    HomepageModule,
    MatIconModule,
    RedlineModule,
    BaseLayoutModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
