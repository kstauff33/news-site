import { Component, OnInit, SimpleChange } from '@angular/core';
import { Input } from '@angular/core';
import { SimplePost } from 'src/app/services/model/base_pb';

@Component({
  selector: 'app-post-carousel',
  templateUrl: './post-carousel.component.html',
  styleUrls: ['./post-carousel.component.scss']
})
export class PostCarouselComponent implements OnInit {
  @Input()
  posts: SimplePost[];

  constructor() { }

  ngOnInit() { }
}
