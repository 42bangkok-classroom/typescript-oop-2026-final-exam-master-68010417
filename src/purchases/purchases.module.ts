import { Module } from '@nestjs/common';
import { PurchaseService } from './purchases.service';
import { PurchaseController } from './purchases.controller';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
