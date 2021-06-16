import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { createProductDTO } from './dto/product.dto';
import { Product } from './interface/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
@UseFilters(HttpExceptionFilter)
export class ProductsController {
    constructor(public productService: ProductsService) { }

    @Post()
    async create(@Body() product: createProductDTO): Promise<Product[]> {
        return this.productService.create(product);
    }

    @Get()
    async findAll(@Param() params): Promise<Product[]> {
        return this.productService.findAll()
    }

    @Put()
    update(): string {
        return 'update endpoint';
    }

    @Delete(':id')
    async delete(@Param() params): Promise<Product[]> {
        return this.productService.delete(params.id)
    }

    @Get(':id')
    async findOne(@Param() params): Promise<Product> {
        return this.productService.findOne(params.id);
    }
}
