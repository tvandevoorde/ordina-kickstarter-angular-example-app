import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExFormsComponent } from './components';
import { TemplateDrivenModule } from './template-driven/template-driven.module';
import { ReactiveModule } from './reactive/reactive.module';
import { RouterModule, Routes } from '@angular/router';
import { ExTemplateDrivenComponent } from './template-driven/components';
import { ExReactiveComponent } from './reactive/components';

const routes: Routes = [
  { path: 'examples/forms', component: ExFormsComponent },
  { path: 'examples/forms/template-driven', component: ExTemplateDrivenComponent },
  { path: 'examples/forms/reactive', component: ExReactiveComponent }
];

@NgModule({
  declarations: [ExFormsComponent],
  imports: [
    CommonModule,
    TemplateDrivenModule,
    ReactiveModule,
    RouterModule.forChild(routes),
  ]
})
export class ExFormsModule { }
