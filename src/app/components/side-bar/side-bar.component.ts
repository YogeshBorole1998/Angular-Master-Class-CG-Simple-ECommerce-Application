import { Component, OnInit } from '@angular/core';
import { categories } from '../../categories';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  categories: Category[];

  constructor() {
    this.categories = categories;
  }

  ngOnInit(): void {}
}
