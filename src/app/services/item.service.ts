import { Injectable } from '@angular/core';
import { Item } from 'src/models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      id: 0,
      title: "manzana",
      price: 8.25,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: "platano",
      price: 4.5,
      quantity: 2,
      completed: false
    },
    {
      id: 2,
      title: "naranja",
      price: 14,
      quantity: 5,
      completed: true
    }
  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.items.unshift(item);
  }
}
