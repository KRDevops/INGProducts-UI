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
    // 0: {categoryId: 30, categoryName: "Credit Card"}
    // 1: {categoryId: 31, categoryName: "Saving Account"}
    // 2: {categoryId: 32, categoryName: ""}
    this.categoryService.getCategories().subscribe(res => this.categories = res['category']);
  }

  convertStringIntoUrl(string) {
    return string.replace(/ /g, '-').toLowerCase();
  }

  onTabClose(event) {
    console.log(event);
    this.products = [];
  }

  onTabOpen(event) {
    console.log(this.categories);
    console.log(event);
    let category_id = this.categories[event.index].categoryId;
    this.productService.getProducts(category_id).subscribe(res => {
      this.products = res;
    });
  }
}
