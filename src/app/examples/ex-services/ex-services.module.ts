import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceriesModule } from './groceries';
import { Routes, RouterModule } from '@angular/router';
import { GroceriesComponent } from './groceries/components';

const routes: Routes = [
  { path: 'examples/services', component: GroceriesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GroceriesModule,
    RouterModule.forChild(routes)
  ]
})
export class ExServicesModule { }
