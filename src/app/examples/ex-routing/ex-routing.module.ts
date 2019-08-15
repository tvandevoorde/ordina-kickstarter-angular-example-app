import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'examples/routing', redirectTo: '/examples/routing/products' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule.forChild(routes)
  ]
})
export class ExRoutingModule { }
