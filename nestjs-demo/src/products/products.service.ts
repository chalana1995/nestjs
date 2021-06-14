import { Injectable } from '@nestjs/common';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductsService {
    products: Product[] = [];

    create(product: Product) {
        this.products.push(product);
        return this.products;
    }

    findAll(): Product[] {
        return this.products;
    }

    findOne(id: string): Product {
        return this.products.find(p => p.id === id);
    }

    delete(id: string): Product[] {
       const index = this.products.findIndex(p => p.id === id);
       this.products.splice(index, 1);
       return this.products;
    }
}
