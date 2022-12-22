import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  @Input() public cartItems: Product[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  public onDeletePressed($event: number): void{
    console.log('..');
  }

}
