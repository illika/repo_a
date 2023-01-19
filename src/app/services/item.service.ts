import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/models/Item';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: string = "http://localhost:3000/items/";
  httpOptions = {
    headers: {
      "Content-Type": "application/json"
    }
  };

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

  constructor(private htpp: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.htpp.get<Item[]>(this.url);

  }

  addItem(item: Item) :Observable<Item> {
    return this.htpp.post<Item>(this.url, item, this.httpOptions);
  }

  toggleItem(item: Item): Observable<Item> {
    return this.htpp.put<Item>(this.url + item.id, item, this.httpOptions);
  }

  deleteItem(item: Item): Observable<Item> {
    return this.htpp.delete<Item>(this.url + item.id);
  }
}
