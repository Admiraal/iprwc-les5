import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[] = [];
  public cart$: Subject<Product[]> = new BehaviorSubject<Product[]>([]);  
  
  constructor() { }

  public addToCart(product: Product): void{
    this.cart.push(product);
    this.cart$.next(this.cart.slice());
  }

  public deleteFromCart(index: number): void{
    if(index > -1){
      this.cart.splice(index, 1);
    }
    this.cart$.next(this.cart.slice());
  }
  
}
