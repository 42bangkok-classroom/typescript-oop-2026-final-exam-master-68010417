import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Product } from './product.interface';
import * as path from 'path';

@Injectable()
export class ProductService {
  private readonly dataPath = path.join(process.cwd(), 'data', 'products.json');

  findall() {
    const data = fs.readFileSync(this.dataPath, 'utf8');
    const products = JSON.parse(data) as Product[];
    return products;
  }
}
