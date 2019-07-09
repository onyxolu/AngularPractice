import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';

const routes: Routes = [
  { 
    path: 'products',
    component: ProductListComponent
  },
  { 
    path: 'products/:id', 
    canActivate: [ProductDetailGuard], 
    component: ProductDetailComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
