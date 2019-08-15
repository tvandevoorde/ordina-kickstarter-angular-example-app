import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>
      this.productService.getProductById(params.id).subscribe((product: Product) => this.product = product)
    );
  }
}
