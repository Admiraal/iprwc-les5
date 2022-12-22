import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItems: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart$
      .subscribe({
        next: (products: Product[]) => {
          this.cartItems = products;
        },
        error: (e: Error) => {
          console.log(e.message);
          throw new Error("oopsiefloopsie");
        },
        complete: () => {
          console.log('completed');
        }
      });
  }

  public get totaalPrijs(): number{
    let totaalPrijs = 0
    this.cartItems.forEach((product: Product) => {
      totaalPrijs += product.price;
    });
    return totaalPrijs;
  }
}
