import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { SwPush } from '@angular/service-worker';
import * as pb from '../../services/model/base_pb_service';
import { environment } from 'src/environments/environment';
import { Subscription, SubscriptionRequest } from 'src/app/services/model/base_pb';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private static readonly VAPID_PUBLIC_KEY =
    'BGq4BA6UlFUUTFP1vm5Qqy_aKTi3QH6lgb73-EdXBh6lejK366c-L6EoOsNfWEy7Oyl-DrFOLVuIq_m5KqizRXA';
  private static readonly STORAGE_KEY = 'subscribed-status';

  private status = false;
  private subscription = new ReplaySubject<Subscription>();
  private statusSubject = new ReplaySubject<boolean>();
  private client: pb.SubscriptionServiceClient;

  constructor(private swPush: SwPush, ) {
    this.client = new pb.SubscriptionServiceClient(environment.server);

    const status = window.localStorage.getItem(SubscriptionService.STORAGE_KEY) === 'true';
    this.statusSubject.next(status);
    this.statusSubject.subscribe((value) => {
      this.status = value;
      window.localStorage.setItem(SubscriptionService.STORAGE_KEY, value + '');
    });
  }

  isSubscribed(): Observable<boolean> {
    return this.statusSubject;
  }

  getSubscription(): Observable<Subscription> {
    return this.subscription;
  }

  private sendToServer(sub: Subscription) {
    const request = new SubscriptionRequest();
    request.setSubscription(sub);
    this.client.subscribe(request)
      .on('data', (response) => {
        this.statusSubject.next(true);
      });
  }

  subscribe(subscription: Subscription) {
    if (!this.status) {
      this.statusSubject.next(true);
    }
    //   this.swPush
    //     .requestSubscription({
    //       serverPublicKey: this.VAPID_PUBLIC_KEY
    //     })
    //     .then((pushSub: PushSubscription) => {
    //       // const key = sub.getKey();
    //       // subscription.setPushNotification();
    //       this.sendToServer(subscription);

    //     })
    //     .catch(err => console.error('Could not subscribe to notifications', err));
  }

}
