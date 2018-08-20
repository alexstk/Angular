import { Injectable } from '@angular/core';

@Injectable({ // this registers the provider at the injector
  providedIn: 'root' // injector
})
export class MessageService { // provider
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
