import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Product } from './product.interface';
import { ApiResponse } from 'src/interfaces/response.interface';
import * as path from 'path';

@Injectable()
export class ProductService {
  private readonly dataPath = path.join(process.cwd(), 'data', 'products.json');

  findall(): ApiResponse<Product> {
    const data = fs.readFileSync(this.dataPath, 'utf8');
    const products = JSON.parse(data) as Product;
    return {
      success: true,
      data: products,
      message: 'Fetched products successfully',
    };
  }
}
