import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GroceryItem } from '../../models';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {
  @Input() groceryList: GroceryItem[];
  @Output() removeFromList = new EventEmitter<GroceryItem>();

  constructor() { }

  removeItem(item: GroceryItem): void {
    this.removeFromList.emit(item);
  }

}
