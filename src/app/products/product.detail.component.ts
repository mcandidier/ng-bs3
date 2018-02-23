import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './templates/detail.html'
})

export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit() {


  }
}
