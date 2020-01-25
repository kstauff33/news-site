import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { SimplePost } from 'src/app/services/model/base_pb';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit, OnDestroy {
  @Input()
  sectionTitle: string;

  @Input()
  postObserable: Observable<SimplePost[]>;
  posts = [];
  slice = 3;
  private subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.postObserable.subscribe(
      data => (this.posts = data)
    );
  }

  showMore() {
    this.slice += 5;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
