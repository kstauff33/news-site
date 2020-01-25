import { Component, OnInit, NgZone } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Observable } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SubscriptionBottomsheetComponent } from '../subscription-bottomsheet/subscription-bottomsheet.component';
import { SubscriptionService } from 'src/app/services/subscription/subscription.service';
import { Subscription } from 'src/app/services/model/base_pb';

@Component({
  selector: 'app-subscription-button',
  templateUrl: './subscription-button.component.html',
  styleUrls: ['./subscription-button.component.scss']
})
export class SubscriptionButtonComponent implements OnInit {
  shouldShow: boolean;
  subscribed = false;

  constructor(private service: SubscriptionService, private ngZone: NgZone, private bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this.bottomSheet.open(SubscriptionBottomsheetComponent);
  }


  ngOnInit() {
    this.shouldShow = 'serviceWorker' in navigator && 'PushManager' in window;
    this.service.isSubscribed().subscribe(status => {
      this.ngZone.run(() => {
        this.subscribed = status;
      });
    });
  }

  subscribeToNotifications() {
    this.openBottomSheet();
    if (!this.subscribed) {
      this.service.subscribe(new Subscription());
    }
  }
}
