import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExReactiveComponent } from './components';
import { HasValidInszDirective } from './directives';

@NgModule({
  declarations: [
    ExReactiveComponent,
    HasValidInszDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ExReactiveComponent
  ]
})
export class ReactiveModule { }
