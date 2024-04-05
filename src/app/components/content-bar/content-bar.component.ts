import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { categories } from '../../categories';
import { Product } from '../../models/product.model';
import { products } from '../../products';

@Component({
  selector: 'app-content-bar',
  templateUrl: './content-bar.component.html',
  styleUrl: './content-bar.component.css',
})
export class ContentBarComponent implements OnInit {
  productTitle!: string;
  products!: Product[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    /*
    Add the logic to get the categoryId Passed via Route and display the products accordingly
    For Default Route display all the products
     */
    this.activatedRoute.params.subscribe((params: Params) => {
      if (isNaN(parseInt(params['categoryId']))) {
        this.products = products;
        this.productTitle = 'All Products';
      } else {
        this.productTitle = categories[parseInt(params['categoryId']) - 1].name;
        this.products = products.filter(
          (product) => product.categoryId == parseInt(params['categoryId'])
        );
      }
    });
  }
}
