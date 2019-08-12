import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  TodoListComponent,
  TodoListItemComponent
} from './components';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoListComponent,
    TodoListItemComponent
  ]
})
export class ExComponentsTodoModule { }
