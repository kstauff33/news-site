import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Image } from 'src/app/services/model/base_pb';

@Component({
  selector: 'app-medium-image',
  templateUrl: './medium-image.component.html',
  styleUrls: ['./medium-image.component.scss']
})
export class MediumImageComponent implements OnInit {
  @Input()
  image: Image;

  constructor() { }

  ngOnInit() { }
}
