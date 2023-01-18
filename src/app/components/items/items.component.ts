import { Component, OnInit } from '@angular/core';

import { Item } from 'src/models/Item';

import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();

    this.getTotal();
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(e => e.id != item.id);
    this.getTotal();
  }

  toggleItem(item: Item) {
    this.getTotal();
  }

  getTotal() {
    this.total = this.items.filter(x => !x.completed)
      .map(x => x.quantity * x.price)
      .reduce((acc, cur) => acc += cur, 0);
  }

}
