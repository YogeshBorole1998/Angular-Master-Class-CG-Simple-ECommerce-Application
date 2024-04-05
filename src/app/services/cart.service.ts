import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[];

  constructor() {
    this.items = [];
  }

  addToCart(product: Product) {
    this.items.push(product);
    // window.alert('Your product has been added to the cart..!!');
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
