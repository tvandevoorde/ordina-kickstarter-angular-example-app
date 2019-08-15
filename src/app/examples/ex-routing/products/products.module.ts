import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {
  ProductsComponent,
  ProductDetailComponent,
} from './components';

import { InMemoryProductsService } from './services';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'examples/routing/products', component: ProductsComponent },
  { path: 'examples/routing/products/:id', component: ProductDetailComponent }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
  ],
  exports: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(InMemoryProductsService),
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
