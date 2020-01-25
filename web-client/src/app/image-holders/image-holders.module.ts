import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeImageComponent } from './large-image/large-image.component';
import { MediumImageComponent } from './medium-image/medium-image.component';
import { SmallImageComponent } from './small-image/small-image.component';

@NgModule({
  declarations: [LargeImageComponent, MediumImageComponent, SmallImageComponent],
  exports: [LargeImageComponent, MediumImageComponent, SmallImageComponent],
  imports: [
    CommonModule
  ]
})
export class ImageHoldersModule { }
