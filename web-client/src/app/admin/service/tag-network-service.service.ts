import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginService } from 'src/app/services/login/login.service';
import { TagServiceClient } from 'src/app/services/model/admin_pb_service';
import { Tag } from 'src/app/services/model/base_pb';
import { GetTagsRequest } from 'src/app/services/model/admin_pb';

@Injectable({
  providedIn: 'root'
})
export class TagNetworkService {
  private service: TagServiceClient;
  private observable: ReplaySubject<Tag[]>;

  constructor(private loginService: LoginService) {
    this.service = new TagServiceClient(environment.server);
  }

  getTags(): Observable<Tag[]> {
    if (this.observable) {
      return this.observable;
    }
    this.observable = new ReplaySubject<Tag[]>();
    const headers = this.loginService.getHeaders();
    this.service
      .getTags(new GetTagsRequest(), headers)
      .on('data', data => this.observable.next(data.getTagsList()));
    return this.observable;
  }
}
