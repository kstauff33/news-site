import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-bottomsheet',
  templateUrl: './subscription-bottomsheet.component.html',
  styleUrls: ['./subscription-bottomsheet.component.scss']
})
export class SubscriptionBottomsheetComponent implements OnInit {

  news = true;
  opinion = true;
  podcasts = true;
  email: string;

  constructor() { }

  ngOnInit() {
  }

  get all(): boolean {
    if (this.news && this.opinion && this.podcasts) {
      return true;
    }
    return false;
  }

  set all(value: boolean) {
    this.news = value;
    this.opinion = value;
    this.podcasts = value;
  }

  get any(): boolean {
    if (this.news && this.opinion && this.podcasts) {
      return false;
    }
    if (this.news || this.opinion || this.podcasts) {
      return true;
    }
    return false;
  }

  set any(value: boolean) { } 

}
