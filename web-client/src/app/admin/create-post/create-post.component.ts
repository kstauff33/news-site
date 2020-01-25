import { Component, OnInit, OnDestroy, HostListener, Directive, ViewChild } from '@angular/core';
import { TagNetworkService } from '../service/tag-network-service.service';
import { Subscription, Subject } from 'rxjs';
import { AdminPostNetworkService } from '../service/admin-post-network.service';
import { debounce } from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { map } from 'rxjs/internal/operators/map';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmCreationDialogComponent,
  ConfirmDialogData
} from './confirm-creation-dialog/confirm-creation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ElementRef } from '@angular/core';
import { HighlightEvent } from 'src/app/admin/directives/text-input-directive.directive';
import { PostNetworkServiceLoader } from 'src/app/services/post/post-network.service';
import { LayoutType } from 'src/app/services/layout-type.enum';
import { CommentButtonDirective } from 'src/app/admin/directives/comment-button.directive';
import { Image, Tag, SimplePost } from '../../services/model/base_pb';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit, OnDestroy {
  tags: Tag[];
  subscription: Subscription;
  model: FormPost;
  imageModel: Image = null;

  highlightState = new HighlightEvent(0, false, '');

  constructor(
    public dialog: MatDialog,
    private tagService: TagNetworkService,
    private postService: AdminPostNetworkService,
    private postNetworkServiceLoader: PostNetworkServiceLoader,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.model = new FormPost(postService);
  }

  ngOnInit() {
    this.subscription = this.tagService
      .getTags()
      .subscribe(data => (this.tags = data));

    const id = this.route.snapshot.params.id;
    if (id) {
      this.postNetworkServiceLoader
        .getService(LayoutType.Home)
        .getPost(id)
        .subscribe(data => this.model.post = data);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.model.destroy();
  }


  @ViewChild(CommentButtonDirective, { read: ElementRef })
  set foo(foo: ElementRef) {
    if (foo && this.highlightState) {
      foo.nativeElement.style.top = this.highlightState.y + 'px';
    }
  }

  onTextHighlighted(event: HighlightEvent) {
    this.highlightState = event;
  }

  onImage(img: Image) {
    this.model.image = img;
  }

  @HostListener('selectionstart')
  onHighlight() {
    console.log(document.getSelection());
  }

  publish() {
    const dialogRef = this.dialog.open(ConfirmCreationDialogComponent, {
      width: '250px'
    });
    const dialogSub = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const sub = this.postService.publishItem(this.model.post).subscribe(
          nada => {
            sub.unsubscribe();
            this.router.navigate([
              this.model.tags[0].getTag(),
              this.model.post.getId()
            ]);
          },
          error => {
            this.snackBar.open('Failed to publish post, validation failed');
          }
        );
      }
      dialogSub.unsubscribe();
    });
  }

  onSubmit() { }
}


class FormPost {
  private subscription: Subscription;
  post = new SimplePost();
  private subject = new Subject<SimplePost>();

  isSaved = true;
  lastSave: Date;

  constructor(private postService: AdminPostNetworkService, post?: SimplePost) {
    this.subscription = this.subject
      .pipe(
        map(data => {
          this.isSaved = false;
          if (!this.lastSave) {
            this.lastSave = new Date(Date.now());
          }
          return data;
        })
      )
      .pipe(debounceTime(1000))
      .subscribe(data => {
        const sub = this.postService.saveItem(this.post).subscribe(item => {
          this.post.setId(item.getId());
          this.isSaved = true;
          this.lastSave = new Date(Date.now());
          sub.unsubscribe();
        });
      });
  }

  setPost(post: SimplePost) {
    this.post = post;
  }
  get title() {
    return this.post.getTitle();
  }
  set title(title: string) {
    this.post.setTitle(title);
    this.onSet();
  }
  get tags() {
    return this.post.getTagsList();
  }
  set tags(tags: Tag[]) {
    this.post.setTagsList(tags);
    this.onSet();
  }
  get tagline() {
    return this.post.getTagline();
  }
  set tagline(tagline: string) {
    this.post.setTagline(tagline);
    this.onSet();
  }
  get body() {
    return this.post.getText();
  }
  set body(body: string) {
    this.post.setText(body);
    this.onSet();
  }
  get podcastUrl() {
    return this.post.getAudiourl();
  }
  set podcastUrl(podcastUrl: string) {
    this.post.setAudiourl(podcastUrl);
    this.onSet();
  }
  get image() {
    return this.post.getImage();
  }
  set image(image: Image) {
    this.post.setImage(image);
  }

  private onSet() {
    this.subject.next(this.post);
  }

  canPublish(): boolean {
    return (
      !!this.title.trim() &&
      !!this.tagline.trim() &&
      !!this.tags &&
      !!this.image &&
      !!this.body.trim()
    );
  }

  destroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
