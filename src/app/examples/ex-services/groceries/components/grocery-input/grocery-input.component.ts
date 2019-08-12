import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GroceryItem } from '../../models';

@Component({
  selector: 'app-grocery-input',
  templateUrl: './grocery-input.component.html',
  styleUrls: ['./grocery-input.component.css']
})
export class GroceryInputComponent {

  @Input() groceryItem: GroceryItem;
  @Output() addToList = new EventEmitter<GroceryItem>();

  constructor() { }

  addItem(item: GroceryItem): void {
    this.addToList.emit(item);
  }
}
