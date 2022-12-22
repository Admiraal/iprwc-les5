import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/products/product.model';


@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss']
})
export class CartListItemComponent implements OnInit {

  @Output() public delete: EventEmitter<number> = new EventEmitter<number>();
  @Input() public index: number;
  @Input() public cartItem: Product;

  
  constructor() { }

  ngOnInit(): void {
  }

  public onDeletePressed(): void{
    console.log('delete: ' + this.index);
    this.delete.next(this.index)
  }

}
