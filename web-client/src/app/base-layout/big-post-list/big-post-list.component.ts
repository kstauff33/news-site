import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutType } from 'src/app/services/layout-type.enum';
import { SimplePost } from 'src/app/services/model/base_pb';
import { PostsVM, PostNetworkServiceLoader } from 'src/app/services/post/post-network.service';

@Component({
  selector: 'app-big-post-list',
  templateUrl: './big-post-list.component.html',
  styleUrls: ['./big-post-list.component.scss']
})
export class BigPostListComponent implements OnInit, OnDestroy {
  @Input()
  title: string;

  @Input()
  type: LayoutType;

  posts: SimplePost[];

  page = 0;

  private subscription: Subscription;
  private postsVM: PostsVM;

  constructor(private postNetworkServiceLoader: PostNetworkServiceLoader) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.postsVM = this.postNetworkServiceLoader.getViewModel(this.type);
    this.subscription = this.postsVM
      .getData()
      .subscribe(data => this.posts.push(...data));
  }

  showMore() {
    this.postsVM.loadMore();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
