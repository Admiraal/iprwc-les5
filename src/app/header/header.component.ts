import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // public cartProducts: Product[] = [];

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    // this.trackCartChanges();
  }

  private trackCartChanges(): void {
    this.cartService.cart$
      .subscribe({
        next: (products: Product[]) => {
          // this.cartProducts = products;
        }
      });
  }

}