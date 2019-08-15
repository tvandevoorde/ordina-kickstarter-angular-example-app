import { Component, OnInit } from '@angular/core';
import { Product } from '../models';
import { ProductService } from '../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(public productService: ProductService) {
    this.products = [];
  }

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService.getAllProducts()
        .subscribe((products: Product[]) => this.products = products);
  }

}
