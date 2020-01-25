import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, Subject, of } from 'rxjs';
import { LayoutType } from '../layout-type.enum';
import {
  SimplePost,
  GetPostRequest,
  GetPostsRequest,
  GetTopPostsRequest,
  GetRecentPostsRequest
} from '../model/base_pb';
import { PostServiceClient } from '../model/base_pb_service';
import { grpc } from '@improbable-eng/grpc-web';
import { BrowserHeaders } from 'browser-headers';
import { LoginService } from '../login/login.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostNetworkServiceLoader {
  private serviceClient: PostServiceClient;

  private cache = {};
  private vmCache = {};

  constructor(private loginService: LoginService) {
    this.serviceClient = new PostServiceClient(environment.server);
  }

  getService(type: LayoutType): PostNetworkService {
    if (!!!this.cache[type]) {
      this.cache[type] = new PostNetworkService(
        this.serviceClient,
        this.loginService
      );
    }
    return this.cache[type];
  }

  getViewModel(type: LayoutType): PostsVM {
    if (!!!this.vmCache[type]) {
      this.vmCache[type] = new PostsVM(this.getService(type), type);
    }
    return this.vmCache[type];
  }
}

export class PostsVM {
  postsSubject: ReplaySubject<SimplePost[]>;
  topPostsSubject: ReplaySubject<SimplePost[]>;
  latestPostsSubject: ReplaySubject<SimplePost[]>;
  itemSubject: Subject<SimplePost>;

  page = 0;

  constructor(
    private networkService: PostNetworkService,
    private layoutType: LayoutType
  ) { }

  getData(): Observable<SimplePost[]> {
    if (!this.postsSubject) {
      this.postsSubject = new ReplaySubject<SimplePost[]>();
      const sub = this.networkService
        .getPosts(0, this.layoutType)
        .subscribe(data => {
          this.postsSubject.next(data);
          sub.unsubscribe();
        });
    }
    return this.postsSubject;
  }

  getLatestPosts(): Observable<SimplePost[]> {
    if (!this.latestPostsSubject) {
      this.latestPostsSubject = new ReplaySubject<SimplePost[]>();
      const sub = this.networkService
        .getLatestPosts(this.layoutType)
        .subscribe(data => {
          this.latestPostsSubject.next(data);
          sub.unsubscribe();
        });
    }
    return this.latestPostsSubject;
  }

  getTopPosts(): Observable<SimplePost[]> {
    if (!this.topPostsSubject) {
      this.topPostsSubject = new ReplaySubject<SimplePost[]>();
      const sub = this.networkService
        .getLatestPosts(this.layoutType)
        .subscribe(data => {
          this.topPostsSubject.next(data);
          sub.unsubscribe();
        });
    }
    return this.topPostsSubject;
  }

  loadMore() {
    const sub = this.networkService
      .getPosts(++this.page, this.layoutType)
      .subscribe(data => {
        this.postsSubject.next(data);
        sub.unsubscribe();
      });
  }
}

export class PostNetworkService {
  posts = new Subject<SimplePost[]>();
  topPosts = new Subject<SimplePost[]>();
  latestPosts = new Subject<SimplePost[]>();
  item = new Subject<SimplePost>();

  constructor(
    private serviceClient: PostServiceClient,
    private loginService: LoginService
  ) { }

  getPosts(page?: number, type?: LayoutType): Observable<SimplePost[]> {
    const request = new GetPostsRequest();
    request.setPage(page ? page : 0);
    if (!!type) {
      request.setType(type.toString());
    }

    const headers = this.loginService.getHeaders();
    this.serviceClient
      .getPosts(request, headers)
      .on('data', response => this.posts.next(response.getPostList()));
    return this.posts;
  }

  getTopPosts(type?: LayoutType): Observable<SimplePost[]> {
    const request = new GetTopPostsRequest();
    if (!!type) {
      request.setType(type);
    }
    const headers = this.loginService.getHeaders();
    this.serviceClient
      .getTopPosts(request)
      .on('data', response => this.topPosts.next(response.getPostList()));
    return this.topPosts;
  }

  getLatestPosts(type?: LayoutType): Observable<SimplePost[]> {
    const request = new GetRecentPostsRequest();
    if (!!type) {
      request.setType(type);
    }
    const headers = this.loginService.getHeaders();
    this.serviceClient
      .getRecentPosts(request, headers)
      .on('data', response => this.latestPosts.next(response.getPostList()));
    return this.latestPosts;
  }

  getPost(id: number): Observable<SimplePost> {
    const request = new GetPostRequest();
    request.setId('' + id);
    const headers = this.loginService.getHeaders();
    this.serviceClient.getPost(request, headers).on('data', response => {
      this.item.next(response.getPost());
    });
    return this.item;
  }

  savePosts(data: SimplePost[]) { }
  saveItem(data: SimplePost) { }
}
