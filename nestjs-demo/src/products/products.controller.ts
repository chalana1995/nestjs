import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { createProductDTO } from './dto/product.dto';
import { Product } from './interface/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(public productService: ProductsService){}

    @Post()
    async create(@Body() product : createProductDTO): Promise<Product[]> {
      return this.productService.create(product);
    }

    @Get()
    findAll(): string {
        return 'Find All';
    }

    @Put()
    update(): string {
        return 'update endpoint';
    }

    @Delete()
    delete(): string {
        return "delete endpoint id"
    }

    @Get(':id')
    findOne(): string {
        return "find one data"
    }
}
