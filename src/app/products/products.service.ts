import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsList: Product[] = [
    new Product('Eerste product', 20.00), 
    new Product('Tweede product', 25.95)
  ];

  constructor() { }

  public getAll(): Observable<Product[]>{
    return of(this.productsList);
  }
}
