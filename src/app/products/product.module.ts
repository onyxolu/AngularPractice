import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductDetailComponent } from './product-detail.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},
    ]),
    SharedModule,
  ]
})
export class ProductModule { }
