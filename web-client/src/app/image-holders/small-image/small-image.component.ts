import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Image } from 'src/app/services/model/base_pb';

@Component({
  selector: 'app-small-image',
  templateUrl: './small-image.component.html',
  styleUrls: ['./small-image.component.scss']
})
export class SmallImageComponent implements OnInit {
  @Input()
  image: Image;

  constructor() { }

  ngOnInit() { }
}
