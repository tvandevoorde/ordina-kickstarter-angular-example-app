import { Component, OnInit } from '@angular/core';
import { GroceryItem } from '../models';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  itemToAdd: GroceryItem;
  itemsList: GroceryItem[];

  constructor() {
    this.itemToAdd = new GroceryItem();
    this.itemsList = [];
  }

  ngOnInit() {
  }

  addToList(item: GroceryItem): void {
    this.itemsList.push(item);
    this.itemToAdd = new GroceryItem();
  }

  removeFromList(item: GroceryItem): void {
    const itemIndex = this.itemsList.indexOf(item);
    this.itemsList.splice(itemIndex, 1);
  }

}
