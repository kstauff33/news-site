import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PostCarouselComponent } from './post-carousel/post-carousel.component';
import { ImageHoldersModule } from '../image-holders/image-holders.module';
import { RedlineComponent } from '../redline/redline.component';
import { RedlineModule } from '../redline/redline.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PostsModule } from '../posts/posts.module';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomePageComponent, PostCarouselComponent],
  exports: [HomePageComponent, PostCarouselComponent],
  imports: [
    CommonModule,
    RedlineModule,
    PostsModule,
    RouterModule,
    ImageHoldersModule,
    InfiniteScrollModule,
    NgbCarouselModule,
    MatButtonModule,
  ]
})
export class HomepageModule { }
