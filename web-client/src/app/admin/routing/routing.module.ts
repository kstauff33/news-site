import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CreatePostComponent } from '../create-post/create-post.component';
import { RouterModule } from '@angular/router';
import { DraftListComponent } from '../draft-list/draft-list.component';
import { CanActivateAdmin } from './can-activate-route';

const routes: Routes = [
  { path: 'posts', component: DraftListComponent, canActivate: [CanActivateAdmin] },
  { path: 'posts/create', component: CreatePostComponent, canActivate: [CanActivateAdmin] },
  { path: 'posts/:id', component: CreatePostComponent, canActivate: [CanActivateAdmin] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
