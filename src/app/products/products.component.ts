import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Product } from './product.model';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  public constructor(private productsService: ProductsService, private cartService: CartService) { }

  public ngOnInit(): void {
    this.trackProductsChanges();
  }

  private trackProductsChanges(): void{
    this.productsService
      .getAll()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  public onAddToCart($event: Product): void{
    this.cartService.addToCart($event);
  }

}