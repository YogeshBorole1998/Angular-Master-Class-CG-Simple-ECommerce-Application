import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../models/product.model';
import { products } from '../../products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product?: Product; // Use optional chaining to handle potential undefined value

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.product = products.find(
        (product) => product.productId == parseInt(params['productId'])
      );
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart..!!');
  }
}
