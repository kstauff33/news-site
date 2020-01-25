import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { SimplePost } from 'src/app/services/model/base_pb';
import { PostNetworkServiceLoader } from 'src/app/services/post/post-network.service';
import { LayoutType } from 'src/app/services/layout-type.enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private subscription: Subscription;
  posts: SimplePost[];
  page = 0;

  scrollContainer: HTMLElement;

  constructor(private postServiceLoader: PostNetworkServiceLoader) {
    this.posts = [];
  }

  ngOnInit() {
    this.scrollContainer = document.getElementById('scroll-container');
    this.subscription = this.postServiceLoader
      .getViewModel(LayoutType.Home)
      .getData()
      .subscribe(data => {
        this.posts.push(...data);
      });
  }
  onScroll() {
    this.showMore();
  }

  showMore() {
    this.postServiceLoader.getViewModel(LayoutType.Home).loadMore();
  }
}
