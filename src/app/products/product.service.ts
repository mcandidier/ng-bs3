import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()

export class ProductService {
    constructor() {}

    products: Product[] = [
        {
          id: 1,
          name: 'product A',
          description: 'descript A',
          price: 1
        },
        {
          id: 2,
          name: 'product B',
          description: 'descript B',
          price: 2
        },
        {
          id: 3,
          name: 'product C',
          description: 'descript C',
          price: 5
        },
        {
          id: 4,
          name: 'product D',
          description: 'descript D',
          price: 3
        }
    ]       
}
