import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import type { ApiResponse } from 'src/interfaces/response.interface';
import type { Product } from './product.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Get('products')
  findall(): ApiResponse<Product[]> {
    const result = this.ProductService.findall();

    return {
      success: true,
      data: result,
      message: 'Fetched products successfully',
    };
  }
}
