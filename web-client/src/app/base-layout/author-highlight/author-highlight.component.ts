import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Author } from 'src/app/services/model/base_pb';
import { AuthorsVM } from 'src/app/services/author/author.service';

@Component({
  selector: 'app-author-highlight',
  templateUrl: './author-highlight.component.html',
  styleUrls: ['./author-highlight.component.scss']
})
export class AuthorHighlightComponent implements OnInit, OnDestroy {
  authors: Author[];
  slice = 4;
  subscription: Subscription;

  constructor(private authorsVM: AuthorsVM) {
    this.authors = [];
  }

  ngOnInit() {
    this.subscription = this.authorsVM.getData().subscribe(data => {
      this.authors = data;
    });
  }

  ngOnDestroy() {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  showMore() {
    this.slice += 4;
  }
}
