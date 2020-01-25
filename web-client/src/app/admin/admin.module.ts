import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { AdminRoutingModule } from './routing/routing.module';
import { MatInputModule } from '@angular/material/input';
import { DraftListComponent } from './draft-list/draft-list.component';
import { RouterModule } from '@angular/router';
import { ConfirmCreationDialogComponent } from './create-post/confirm-creation-dialog/confirm-creation-dialog.component';
import { MatListModule } from '@angular/material/list';
import { RedlineModule } from '../redline/redline.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ImageHoldersModule } from '../image-holders/image-holders.module';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommentButtonDirective } from './directives/comment-button.directive';
import { TextInputDirectiveDirective } from './directives/text-input-directive.directive';


@NgModule({
  declarations: [
    CreatePostComponent,
    DraftListComponent,
    ConfirmCreationDialogComponent,
    ImageUploaderComponent,
    TextInputDirectiveDirective,
    CommentButtonDirective
  ],
  exports: [CreatePostComponent, DraftListComponent, ConfirmCreationDialogComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ImageHoldersModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    RedlineModule,
  ],
  entryComponents: [ConfirmCreationDialogComponent]
})
export class AdminModule { }
