import { Injectable } from '@nestjs/common';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductsService {
    products: Product[] = [];

    create(product: Product) {
        this.products.push(product);
        return this.products;
    }
}
