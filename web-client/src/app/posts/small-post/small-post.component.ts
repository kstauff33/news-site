import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { SimplePost } from 'src/app/services/model/base_pb';

@Component({
  selector: 'app-small-post',
  templateUrl: './small-post.component.html',
  styleUrls: ['./small-post.component.scss']
})
export class SmallPostComponent implements OnInit {
  @Input()
  post: SimplePost;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onclick() {
    window.scrollTo(0, 0);
  }
}
