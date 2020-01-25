import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthorServiceClient } from 'src/app/services/model/base_pb_service';
import { GetAuthorResponse, Author, GetAuthorRequest, GetAuthorsRequest } from 'src/app/services/model/base_pb';
import { LoginService } from 'src/app/services/login/login.service';

export class AuthorNetworkService {
  serviceClient: AuthorServiceClient;
  data = new Subject<Author[]>();
  item = new Subject<GetAuthorResponse>();

  constructor(private loginService: LoginService) {
    this.serviceClient = new AuthorServiceClient(environment.server);
  }

  getItem(id: number): Observable<GetAuthorResponse> {
    const request = new GetAuthorRequest();
    request.setId('' + id);
    const headers = this.loginService.getHeaders();
    this.serviceClient.getAuthor(request, headers)
      .on('data', response => this.item.next(response));
    return this.item;
  }

  saveItem(data: Author) { }

  getData(page?: number, observable?: Subject<Author[]>): Observable<Author[]> {
    const request = new GetAuthorsRequest();
    if (!!!page) {
      page = 0;
    }
    request.setPage(page);

    const headers = this.loginService.getHeaders();
    this.serviceClient.getAuthors(request, headers).on('data', response => {
      if (observable) {
        observable.next(response.getAuthorsList());
      } else {
        this.data.next(response.getAuthorsList());
      }
    });
    return this.data;
  }

  saveData(data: Author[]) { }
}

@Injectable({
  providedIn: 'root'
})
export class AuthorsVM {
  page = 0;
  data: ReplaySubject<Author[]>;
  private networkService: AuthorNetworkService;

  constructor(loginService: LoginService) {
    this.networkService = new AuthorNetworkService(loginService);
  }

  getData(): Observable<Author[]> {
    if (!!this.data) {
      return this.data;
    }
    this.data = new ReplaySubject<Author[]>();
    this.networkService.getData(0, this.data);
    return this.data;
  }

  loadMore() {
    this.networkService.getData(++this.page, this.data);
  }

  getItem(id: number) {
    return this.networkService.getItem(id);
  }
}
