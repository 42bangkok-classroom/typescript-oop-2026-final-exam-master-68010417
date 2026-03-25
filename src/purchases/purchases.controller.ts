import { Controller, Get } from '@nestjs/common';
import type { ApiResponse } from 'src/interfaces/response.interface';
import { Purchase } from './purchases.interface';
import { PurchaseService } from './purchases.service';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly PurchaseService: PurchaseService) {}
@Get()
findall():ApiResponse<Purchase>{
    const result = this.PurchaseService.findall()

    return {
        success: true,
        data:result,
        message: 'Fetched products successfully',
      };
}
