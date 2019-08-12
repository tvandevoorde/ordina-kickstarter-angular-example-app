import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GroceryItem } from '../../models';

@Component({
  selector: 'app-grocery-list-item',
  templateUrl: './grocery-list-item.component.html',
  styleUrls: ['./grocery-list-item.component.css']
})
export class GroceryListItemComponent {
  @Input() groceryItem: GroceryItem;
  @Output() removeItem = new EventEmitter();

  constructor() { }

  remove() {
    this.removeItem.emit();
  }

}
