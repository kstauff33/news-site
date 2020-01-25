import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Author } from 'src/app/services/model/base_pb';
import { AuthorsVM } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-authors-overview',
  templateUrl: './authors-overview.component.html',
  styleUrls: ['./authors-overview.component.scss']
})
export class AuthorsOverviewComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  authors: Author[];
  page = 0;

  constructor(private authorsVM: AuthorsVM) {
    this.authors = [];
  }

  ngOnInit() {
    this.subscription = this.authorsVM
      .getData()
      .subscribe(data => this.authors.push(...data));
  }

  showMore() {
    this.authorsVM.loadMore();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
