import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  userForm: boolean = false;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let product_id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProduct(product_id).subscribe(res => this.product = res);
  }

  openForm() {
    this.userForm = true;
  }

}
