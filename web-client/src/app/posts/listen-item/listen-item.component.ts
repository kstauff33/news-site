import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { SimplePost } from 'src/app/services/model/base_pb';

@Component({
  selector: 'app-listen-item',
  templateUrl: './listen-item.component.html',
  styleUrls: ['./listen-item.component.scss']
})
export class ListenItemComponent implements OnInit {
  @Input()
  post: SimplePost;
  element: HTMLAudioElement;

  constructor() { }

  ngOnInit() {
    this.element = document.getElementsByClassName(
      'audio'
    )[0] as HTMLAudioElement;

    this.element.currentTime = +window.localStorage.getItem(this.getKey());
    this.element.addEventListener('timeupdate', event => {
      window.localStorage.setItem(
        this.getKey(),
        this.element.currentTime.toString()
      );
    });
  }
  private getKey() {
    return 'listen/' + this.post.getId() + '/time';
  }
}
