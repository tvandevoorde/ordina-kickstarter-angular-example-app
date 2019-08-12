import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {
  GroceriesComponent,
  GroceryListComponent,
  GroceryListItemComponent,
  GroceryInputComponent
} from './components';

import { InMemoryGroceriesService } from './services';


@NgModule({
  declarations: [
    GroceriesComponent,
    GroceryListComponent,
    GroceryListItemComponent,
    GroceryInputComponent
  ],
  exports: [
    GroceriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(InMemoryGroceriesService),
  ]
})
export class GroceriesModule { }
