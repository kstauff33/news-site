import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsRoutingModule } from 'src/app/authors/authors.router';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorsOverviewComponent } from './authors-overview/authors-overview.component';
import { PostsModule } from '../posts/posts.module';
import { BaseLayoutModule } from '../base-layout/base-layout.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AuthorDetailsComponent, AuthorsOverviewComponent],
  exports: [AuthorsRoutingModule, AuthorDetailsComponent, AuthorsOverviewComponent],
  imports: [
    CommonModule,
    PostsModule,
    BaseLayoutModule,
    MatButtonModule
  ]
})
export class AuthorsModule { }
