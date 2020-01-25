import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuToggleService {
  private subject: ReplaySubject<void>;

  constructor() {
    this.subject = new ReplaySubject<void>();
  }

  toggle() {
    this.subject.next();
  }

  subscribe(onToggle: () => void) {
    this.subject.subscribe(() => onToggle());
  }
}
