import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LayoutType } from 'src/app/services/layout-type.enum';
import { PostNetworkService, PostNetworkServiceLoader } from 'src/app/services/post/post-network.service';
import { LayoutUtils } from 'src/app/services/layout-utils';

@Component({
  selector: 'app-posts-overview',
  templateUrl: './posts-overview.component.html',
  styleUrls: ['./posts-overview.component.scss']
})
export class PostsOverviewComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  layoutType: LayoutType;

  title: string;

  private postNetworkService: PostNetworkService;

  constructor(
    route: ActivatedRoute,
    private postNetworkServiceLoader: PostNetworkServiceLoader
  ) {
    this.layoutType = route.snapshot.data.layoutType;
    this.subscription = route.data.subscribe(data => {
      this.layoutType = data.layoutType;
      this.title = LayoutUtils.getTitle(this.layoutType);
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}
