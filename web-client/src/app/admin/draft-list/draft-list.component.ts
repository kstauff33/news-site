import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPostNetworkService } from '../service/admin-post-network.service';
import { SimplePost } from 'src/app/services/model/base_pb';
import { PostNetworkServiceLoader } from 'src/app/services/post/post-network.service';
import { LayoutType } from 'src/app/services/layout-type.enum';

@Component({
  selector: 'app-draft-list',
  templateUrl: './draft-list.component.html',
  styleUrls: ['./draft-list.component.scss']
})
export class DraftListComponent implements OnInit {
  drafPosts: SimplePost[];
  posts: SimplePost[];
  displayedColumns: string[] = ['title', 'author', 'tags', 'actions'];

  constructor(
    private adminPostService: AdminPostNetworkService,
    private postServiceLoader: PostNetworkServiceLoader,
    private router: Router) { }

  ngOnInit() {
    this.adminPostService.getDrafts().subscribe(data => {
      this.drafPosts = data;
    });
    this.postServiceLoader.getViewModel(LayoutType.Home).getData().subscribe(posts => {
      this.posts = posts;
    });
  }

  getTags(post: SimplePost): string {
    const tags = post.getTagsList();
    if (tags) {
      return tags.map(tag => tag.getTag()).join(', ');
    }
    return '';
  }
}
