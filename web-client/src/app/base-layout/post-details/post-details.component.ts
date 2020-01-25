import { Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { SimplePost } from 'src/app/services/model/base_pb';
import { LayoutType } from 'src/app/services/layout-type.enum';
import { PostNetworkService, PostNetworkServiceLoader } from '../../services/post/post-network.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  post: SimplePost;
  layoutType: LayoutType;
  subscription: Subscription;
  postNetworkService: PostNetworkService;

  constructor(
    route: ActivatedRoute,
    router: Router,
    postNetowrkServiceLoader: PostNetworkServiceLoader
  ) {
    this.postNetworkService = postNetowrkServiceLoader.getService(
      this.layoutType
    );
    this.subscription = router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.layoutType = route.snapshot.data.layoutType;
        const id = route.snapshot.params.id;
        this.postNetworkService.getPost(id).subscribe(post => {
          this.post = post;
        });
      });
  }

  ngOnInit() { }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  scroll() {
    window.scrollTo(0, 0);
  }
}
