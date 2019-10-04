import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category';
import { ProductService } from '../product-details/product.service';
import { Product } from '../product-details/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  index: number = 0;
  products: Product[] = [];
  selectedAccordion;

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(res => this.categories = res['data']);
  }

  onTabClose() {
    this.products = [];
  }

  onTabOpen(event) {
    let category_id = this.categories[event.index].categoryId;
    this.productService.getProducts(category_id).subscribe(res => {
      this.products = res['productInterfaceResponseDto'];
    });
  }
}
