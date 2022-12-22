import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListItemComponent } from './cart-list/cart-list-item/cart-list-item.component';
import { CartComponent } from './cart.component';
import { CartListComponent } from './cart-list/cart-list.component';



@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartListItemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    
  ]
})
export class CartModule { }
