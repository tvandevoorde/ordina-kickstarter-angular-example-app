import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  ChildComponent
} from './components';


@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ChildComponent
  ]
})
export class ExComponentsTemplateModule { }
