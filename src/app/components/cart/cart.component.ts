import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerData } from '../../models/customer.model';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  items!: Product[];
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private route: Router,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  clearCart(): void {
    this.items = this.cartService.clearCart();
  }

  navigateHome() {
    this.route.navigate(['/']);
  }

  onSubmit(customerData: CustomerData, items: Product[]) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    window.alert(
      'Your order has been submitted. Open console to see the details...'
    );
    console.warn('Order Details', customerData);
    console.warn('Product Details', items);
  }
}
