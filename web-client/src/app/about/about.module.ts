import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about-page/about.component';
import { AboutRoutingModule } from './routing.module';
import { ImageHoldersModule } from '../image-holders/image-holders.module';
import { RedlineModule } from '../redline/redline.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  exports: [AboutComponent, AboutRoutingModule],
  imports: [
    CommonModule,
    ImageHoldersModule,
    RedlineModule
  ]
})
export class AboutModule { }
