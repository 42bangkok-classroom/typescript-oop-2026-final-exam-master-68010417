import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Purchase } from './purchases.interface';
import { ApiResponse } from 'src/interfaces/response.interface';
import * as path from 'path';

@Injectable()
export class PurchaseService {
  private readonly dataPath = path.join(
    process.cwd(),
    'data',
    'purchases.json',
  );

  findall() {
    const data = fs.readFileSync('data/products.json', 'utf8');
    const purchases = JSON.parse(data) as Purchase[];
    return purchases;
  }
}
