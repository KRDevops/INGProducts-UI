import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category_id: number;
  categories: Category[] = [];
  constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.category_id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.category_id);

    this.categoryService.getCategories().subscribe(res => {
      res.forEach(r => {
        r.category_link_name = this.convertStringIntoUrl(r.category_name);
      });
      this.categories = res;
    });
  }

  convertStringIntoUrl(string) {
    return string.replace(/ /g, '-').toLowerCase();
  }

}
