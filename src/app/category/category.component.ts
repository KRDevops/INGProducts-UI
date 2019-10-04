import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category';
import { ProductService } from '../product-details/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  index: number = 0;
  selectedAccordion;

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(res => {
      console.log(res)
      // res.forEach(r => {
      //   this.productService.getProducts(r.category_id).subscribe(x => {
      //     r.products = x;
      //   });
      // });
      this.categories = res['category'];
    });
  }

  convertStringIntoUrl(string) {
    return string.replace(/ /g, '-').toLowerCase();
  }

  onTabClose(event) {
    console.log(event);
  }

  onTabOpen(event) {
    console.log(event);
  }
}
