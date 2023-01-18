import { Component, OnInit } from '@angular/core';

import { Item } from 'src/models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
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
    ]
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(e => e.id != item.id);
  }

}
