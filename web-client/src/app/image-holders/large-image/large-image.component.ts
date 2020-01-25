import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/services/model/base_pb';

@Component({
  selector: 'app-large-image',
  templateUrl: './large-image.component.html',
  styleUrls: ['./large-image.component.scss']
})
export class LargeImageComponent implements OnInit {
  @Input()
  image: Image;
  @Input()
  url: string;

  constructor() { }

  ngOnInit() {
  }
}
