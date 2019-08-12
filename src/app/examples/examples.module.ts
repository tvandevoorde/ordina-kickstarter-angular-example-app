import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {
  ExBootstrappingModule,
  ExComponentsModule,
  ExDependencyInjectionModule,
  ExDirectivesModule,
  ExPipesModule,
  ExServicesModule,
  ExFormsModule
} from '.';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'examples', redirectTo: 'examples/home', pathMatch: 'full' },
  { path: 'examples/home', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ExBootstrappingModule,
    ExComponentsModule,
    ExDependencyInjectionModule,
    ExDirectivesModule,
    ExPipesModule,
    ExServicesModule,
    ExFormsModule
  ],
  exports: [HomeComponent, RouterModule]
})
export class ExamplesModule { }
