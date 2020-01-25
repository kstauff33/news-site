import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigPostComponent } from './big-post/big-post.component';
import { SmallPostComponent } from './small-post/small-post.component';
import { MultiPanelComponent } from './multi-panel/multi-panel.component';
import { ListenItemComponent } from './listen-item/listen-item.component';
import { RouterModule } from '@angular/router';
import { ImageHoldersModule } from '../image-holders/image-holders.module';
import { RedlineModule } from '../redline/redline.module';
import { MatIconModule } from '@angular/material/icon';
import { BaseLayoutModule } from '../base-layout/base-layout.module';

@NgModule({
  declarations: [
    BigPostComponent,
    SmallPostComponent,
    MultiPanelComponent,
    ListenItemComponent,
  ],
  exports: [
    BigPostComponent,
    SmallPostComponent,
    ListenItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ImageHoldersModule,
    RedlineModule,
    MatIconModule,
  ]
})
export class PostsModule { }
