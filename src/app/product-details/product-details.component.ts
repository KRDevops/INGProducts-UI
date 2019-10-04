import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
    let product_id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProduct(product_id).subscribe(res => {
      this.categoryService.getCategory(res.category_id).subscribe(x => {
        res.category_id = x.category_id;
        res.category_name = x.category_name;
      });
      this.product = res;
    });
  }

}
