import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Item } from 'src/models/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();

  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(item: Item) {
    this.deleteItem.emit(item);
  }

  handleToggle(item: Item) {
    item.completed = !item.completed;
  }

}
