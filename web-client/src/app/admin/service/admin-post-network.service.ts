import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { grpc } from '@improbable-eng/grpc-web';
import { LoginService } from 'src/app/services/login/login.service';
import { SimplePost } from 'src/app/services/model/base_pb';
import { AdminPostServiceClient } from 'src/app/services/model/admin_pb_service';
import { SavePostRequest, GetDraftPostsRequest, GetPostStatsResponse, GetPostStatsRequest } from 'src/app/services/model/admin_pb';

@Injectable({
  providedIn: 'root'
})
export class AdminPostNetworkService {
  private client = new AdminPostServiceClient(environment.server);

  constructor(private loginService: LoginService) {
  }

  saveItem(post: SimplePost): Observable<SimplePost> {
    const observable = new Subject<SimplePost>();
    const request = new SavePostRequest();
    const headers = this.loginService.getHeaders();

    request.setPost(post);
    this.client
      .savePost(request, headers)
      .on('data', data => observable.next(data.getPost()));
    return observable;
  }

  publishItem(post: SimplePost) {
    const observable = new Subject<SimplePost>();
    const request = new SavePostRequest();
    const headers = this.loginService.getHeaders();

    request.setPost(post);
    this.client
      .publishPost(request, headers)
      .on('data', data => observable.next(data.getPost()));
    return observable;
  }

  getDrafts(): Observable<SimplePost[]> {
    const observable = new Subject<SimplePost[]>();
    const request = new GetDraftPostsRequest();
    const headers = this.loginService.getHeaders();
    this.client
      .getDraftPosts(request, headers)
      .on('data', data => observable.next(data.getPostsList()))
      .on('end', status => {
        if (status.code !== grpc.Code.OK) {
          observable.error('Failed to load drafts');
        }
      });
    return observable;
  }
  callError(observable, message) {
    observable.error(message);
  }

  getStats(): Observable<GetPostStatsResponse> {
    const observable = new Subject<GetPostStatsResponse>();
    const request = new GetPostStatsRequest();
    const headers = this.loginService.getHeaders();
    this.client
      .getPostStats(request, headers)
      .on('data', data => observable.next(data));
    return observable;
  }
}
