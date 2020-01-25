import { Routes } from '@angular/router';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AboutComponent } from '../about/about-page/about.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthorsOverviewComponent } from './authors-overview/authors-overview.component';

const routes: Routes = [
  { path: '', component: AuthorsOverviewComponent },
  {
    path: ':id',
    component: AuthorDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
