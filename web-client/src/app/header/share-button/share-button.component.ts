import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.scss']
})
export class ShareButtonComponent implements OnInit {
  subcription: Subscription;
  url: string;
  encodedUrl: string;

  constructor(private bottomSheet: MatBottomSheet, router: Router) {
    this.subcription = router.events.subscribe(params => {
      this.url = document.location.href;
      this.encodedUrl = encodeURIComponent(this.url);
    });
  }

  ngOnInit() {}
}
