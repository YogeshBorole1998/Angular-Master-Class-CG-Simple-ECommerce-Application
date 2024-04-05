import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list-info',
  templateUrl: './product-list-info.component.html',
  styleUrl: './product-list-info.component.css',
})
export class ProductListInfoComponent implements OnInit {
  /*Add the required code to get the information from the parent compoent */
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}
}
