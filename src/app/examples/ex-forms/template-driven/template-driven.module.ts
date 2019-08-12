import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExTemplateDrivenComponent } from './components';
import { HasValidInszDirective } from './directives';

@NgModule({
  declarations: [
    ExTemplateDrivenComponent,
    HasValidInszDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ExTemplateDrivenComponent
  ]
})
export class TemplateDrivenModule { }
