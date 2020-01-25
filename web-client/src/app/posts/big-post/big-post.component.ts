import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SimplePost } from 'src/app/services/model/base_pb';

@Component({
  selector: 'app-big-post',
  templateUrl: './big-post.component.html',
  styleUrls: ['./big-post.component.scss']
})
export class BigPostComponent implements OnInit {
  @Input()
  post: SimplePost;

  ngOnInit() {
  }

  onclick() {
    window.scrollTo(0, 0);
  }
}
