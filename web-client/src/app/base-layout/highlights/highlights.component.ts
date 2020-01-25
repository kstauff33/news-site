import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutType } from 'src/app/services/layout-type.enum';
import { PostsVM, PostNetworkServiceLoader } from 'src/app/services/post/post-network.service';
import { SimplePost } from 'src/app/services/model/base_pb';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {
  @Input()
  type: LayoutType;

  postsVM: PostsVM;
  latestPosts: Observable<SimplePost[]>;
  topPosts: Observable<SimplePost[]>;

  constructor(private postNetworkServiceLoader: PostNetworkServiceLoader) { }

  ngOnInit() {
    this.postsVM = this.postNetworkServiceLoader.getViewModel(null);
    this.latestPosts = this.postsVM.getLatestPosts();
    this.topPosts = this.postsVM.getTopPosts();
  }
}
