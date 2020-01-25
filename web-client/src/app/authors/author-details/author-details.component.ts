import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
import { AuthorsVM } from 'src/app/services/author/author.service';
import { Author, SimplePost } from 'src/app/services/model/base_pb';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit {
  private subscription: Subscription;
  author: Author;
  posts: SimplePost[];

  constructor(router: Router, route: ActivatedRoute, authorsVM: AuthorsVM) {
    this.subscription = router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const id = route.snapshot.params.id;
        authorsVM.getItem(id).subscribe(response => {
          this.author = response.getAuthor();
          this.posts = response.getPostsList();
        });
      });
  }

  ngOnInit() { }
}
