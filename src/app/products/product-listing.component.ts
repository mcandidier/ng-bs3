import { Component, OnInit } from '@angular/core';
import { Product } from './product'; 
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './templates/product.list.html',
})
export class ProductListingComponent implements OnInit {

  currentProduct: Product;
  products: Product [];
  addNewProduct: Product;
  updateProduct: Product;
  isUpdate: boolean = false;

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.getAllProducts();
  }

  addProduct() {
    this.addNewProduct =  new Product;
  }

  displayForm(event: any) {
    this.isUpdate = event;
  }

  updateSelectedProduct(product: Product) {
    this.updateProduct = product;
    this.isUpdate = true;
  }

  onProductUpdate(event) {
    this.updateProduct.name = event.name;
    this.updateProduct.description = event.description;
    this.updateProduct.price = event.price;
  }

  saveProduct(product: Product) {
    this._productService.products.push(product);
    this.addNewProduct = null;
  }

  getAllProducts() {
    return this._productService.products;
  }

  getProduct(selectedProduct: Product) {
    this.currentProduct = selectedProduct;
  }
}
