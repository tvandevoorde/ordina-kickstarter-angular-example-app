import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
  ExDependencyInjectionComponent,
  ParentComponent,
  ChildComponent
} from './components';

import { NumberService } from './services';

const routes: Routes = [
  { path: 'examples/dependency-injection', component: ExDependencyInjectionComponent }
];

@NgModule({
  declarations: [
    ExDependencyInjectionComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    NumberService
  ]
})
export class ExDependencyInjectionModule { }
