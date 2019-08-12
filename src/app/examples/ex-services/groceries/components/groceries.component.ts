import { Component, OnInit } from '@angular/core';
import { GroceryItem } from '../models';
import { GroceriesService } from '../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  itemToAdd: GroceryItem;
  itemsList: GroceryItem[];

  constructor(public groceriesService: GroceriesService) {
    this.itemToAdd = new GroceryItem();
    this.itemsList = [];
  }

  ngOnInit() {
    this.loadGroceryList();
  }

  addToList(item: GroceryItem): void {
    this.groceriesService.addGroceryItem(item).subscribe(() => {
      this.itemToAdd = new GroceryItem();
      this.loadGroceryList();
    });
  }

  removeFromList(item: GroceryItem): void {
    this.groceriesService.deleteGroceryItem(item).subscribe(() => {
      this.loadGroceryList();
    });
  }

  private loadGroceryList(): void {
    this.groceriesService.getAllGroceries()
        .subscribe((groceries: GroceryItem[]) => this.itemsList = groceries);
  }

}
