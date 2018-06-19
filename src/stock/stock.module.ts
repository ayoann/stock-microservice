import { Module } from '@nestjs/common';
import {StockController} from './stock.controller';
import {StockService} from './stock.service';
import {DatabaseModule} from '../database/database.module';
import {stockProviders} from './stock.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [StockController],
  providers: [StockService, ...stockProviders],
})
export class StockModule {}
