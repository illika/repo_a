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
    this.itemService.getItems().subscribe(data => {
      this.items = data;

      this.getTotal();
    });
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(e => e.id != item.id);
    this.itemService.deleteItem(item).subscribe();
    this.getTotal();
  }

  toggleItem(item: Item) {
    this.itemService.toggleItem(item).subscribe();
    this.getTotal();
  }

  getTotal() {
    this.total = this.items.filter(x => !x.completed)
      .map(x => x.quantity * x.price)
      .reduce((acc, cur) => acc += cur, 0);
  }

}
