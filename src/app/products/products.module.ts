import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductThumbnailComponent  
  ],
  exports:[
    ProductThumbnailComponent 
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
