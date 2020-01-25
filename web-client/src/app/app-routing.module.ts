import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin/routing/routing.module';
import { CreatePostComponent } from './admin/create-post/create-post.component';
import { DraftListComponent } from './admin/draft-list/draft-list.component';
import { ConfirmCreationDialogComponent } from './admin/create-post/confirm-creation-dialog/confirm-creation-dialog.component';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';
import { CanActivateAdmin } from './admin/routing/can-activate-route';
import { LayoutType } from 'src/app/services/layout-type.enum';
import { HomePageComponent } from 'src/app/homepage/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },

  { path: 'posts', loadChildren: './base-layout/base-layout.module#BaseLayoutModule' },
  { path: 'account', loadChildren: './account/account.module#AccountModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'authors', loadChildren: './authors/authors.module#AuthorsModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: []
})
export class AppRoutingModule { }
