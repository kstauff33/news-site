import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SimplePost } from 'src/app/services/model/base_pb';

@Component({
  selector: 'app-multi-panel',
  templateUrl: './multi-panel.component.html',
  styleUrls: ['./multi-panel.component.scss']
})
export class MultiPanelComponent implements OnInit {
  @Input()
  post: SimplePost;

  constructor() { }

  ngOnInit() { }
}
