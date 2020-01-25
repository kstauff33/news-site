import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsVM } from 'src/app/services/author/author.service';
import { ImageUploadService } from './image-upload/image-upload.service';
import { InstallService } from './install/install.service';
import { LoginService } from './login/login.service';
import { MenuToggleService } from './menu-toggle/menu-toggle.service';
import { PostNetworkService, PostsVM, PostNetworkServiceLoader } from './post/post-network.service';
import { SubscriptionService } from './subscription/subscription.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  exports: [
    HttpClientModule,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthorsVM,
    ImageUploadService,
    InstallService,
    LoginService,
    MenuToggleService,
    HttpClientModule,
    PostNetworkServiceLoader,
    SubscriptionService,

  ]
})
export class ServicesModule { }
