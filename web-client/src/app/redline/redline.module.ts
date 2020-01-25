import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedlineComponent } from './redline.component';

@NgModule({
  declarations: [RedlineComponent],
  exports: [RedlineComponent],
  imports: [
    CommonModule
  ]
})
export class RedlineModule { }
