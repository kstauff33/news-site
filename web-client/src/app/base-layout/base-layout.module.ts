import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout-with-highlights/layout.component';
import { HighlightComponent } from './highlight/highlight.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { RedlineModule } from '../redline/redline.module';
import { AuthorHighlightComponent } from './author-highlight/author-highlight.component';
import { BigPostComponent } from '../posts/big-post/big-post.component';
import { BigPostListComponent } from './big-post-list/big-post-list.component';
import { PostsModule } from '../posts/posts.module';
import { PostDetailsComponent } from './post-details/post-details.component';
import { BaseLayoutRoutingModule } from './base-layout.router';
import { PostsOverviewComponent } from './posts-overview/posts-overview.component';
import { MatIconModule } from '@angular/material/icon';
import { ImageHoldersModule } from '../image-holders/image-holders.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FooterComponent, LayoutComponent,
    PostsOverviewComponent,
    HighlightComponent, HighlightsComponent, AuthorHighlightComponent, BigPostListComponent, PostDetailsComponent,
  ],
  exports: [FooterComponent, LayoutComponent,
    PostsOverviewComponent,
    HighlightComponent, HighlightsComponent, AuthorHighlightComponent, BigPostListComponent, PostDetailsComponent,
    BaseLayoutRoutingModule,
    RedlineModule, PostsModule, ImageHoldersModule
  ],
  imports: [
    CommonModule,
    RedlineModule,
    PostsModule,
    BaseLayoutRoutingModule,
    MatIconModule,
    MatButtonModule,
    ImageHoldersModule,
  ]
})
export class BaseLayoutModule { }
