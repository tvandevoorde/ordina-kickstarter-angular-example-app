import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  ExViewEncapsulationComponent,
  ParentComponent,
  ChildComponent
} from './components';

@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ChildComponent,
    ParentComponent
  ]
})
export class ExViewEncapsulationModule { }
