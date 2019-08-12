import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  ExAttributeDirectivesComponent,
  ExStructuralDirectivesComponent,
  ExCustomDirectivesComponent
} from './components';

import {
  AutofocusDirective,
  UppercaseInputDirective
} from './directives';


const routes: Routes = [
  { path: 'examples/directives', redirectTo: 'examples/directives/attribute-directives', pathMatch: 'full' },
  { path: 'examples/directives/attribute-directives', component: ExAttributeDirectivesComponent },
  { path: 'examples/directives/structural-directives', component: ExStructuralDirectivesComponent },
  { path: 'examples/directives/custom-directives', component: ExCustomDirectivesComponent }
];

@NgModule({
  declarations: [
    AutofocusDirective,
    UppercaseInputDirective,
    ExAttributeDirectivesComponent,
    ExStructuralDirectivesComponent,
    ExCustomDirectivesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ExDirectivesModule { }
