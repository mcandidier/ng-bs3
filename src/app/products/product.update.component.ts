import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

import * as _ from 'underscore';

@Component({
  selector: 'app-product-update',
  templateUrl: './templates/update.html'
})

export class ProductUpdateComponent implements OnInit {

  @Input() product: Product;
  @Output() isVisible = new EventEmitter<boolean>();
  @Output() updateProduct = new EventEmitter<Product>();


  form: Product;
  item: Product;

  constructor(private _productService: ProductService ) {}

  ngOnInit() {
    this.form = Object.assign({}, this.product);
  }

  update(form: any ):void {
    this.isVisible.emit(false);
    this.updateProduct.emit(form);
  }
}
