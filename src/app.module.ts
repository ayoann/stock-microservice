import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {StockController} from './stock/stock.controller';
import {StockService} from './stock/stock.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/stock')],
  controllers: [StockController],
  providers: [StockService],
})
export class AppModule {}
