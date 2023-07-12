import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  addItem() {
    // Call the addItem function from AppComponent
    (window as any).addItem();
  }
  constructor() { }
}
