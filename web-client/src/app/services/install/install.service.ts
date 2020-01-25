import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstallService {
  private deferredPrompt;

  constructor() { }

  setEvent($event) {
    this.deferredPrompt = $event;
    this.deferredPrompt.preventDefault();

    this.deferredPrompt.userChoice.then(result => {
      this.deferredPrompt = null;
    });
  }

  install() {
    this.deferredPrompt.prompt();
  }
  canInstall(): boolean {
    return !!this.deferredPrompt;
  }
}
