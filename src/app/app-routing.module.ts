import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'category', component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
