import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import type { ApiResponse } from 'src/interfaces/response.interface';
import type { Product } from './product.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Get('products')
  findall(): ApiResponse<Product> {
    return this.ProductService.findall();
  }
}
