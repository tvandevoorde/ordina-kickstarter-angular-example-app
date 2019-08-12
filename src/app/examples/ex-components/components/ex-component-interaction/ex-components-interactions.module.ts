import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  GroceriesComponent,
  GroceryListComponent,
  GroceryListItemComponent,
  GroceryInputComponent
} from './components';


@NgModule({
  declarations: [
    GroceriesComponent,
    GroceryListComponent,
    GroceryListItemComponent,
    GroceryInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GroceriesComponent,
    GroceryListComponent,
    GroceryListItemComponent,
    GroceryInputComponent
  ]
})
export class ExComponentsInteractionsModule { }
