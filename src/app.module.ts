import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {StockModule} from './stock/stock.module';
 
=======
import {MongooseModule} from '@nestjs/mongoose';
import {StockController} from './stock/stock.controller';
import {StockService} from './stock/stock.service';

>>>>>>> e606529f60de10d887412a9f5e633f5adacc7882
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/stock')],
  controllers: [StockController],
  providers: [StockService],
})
export class AppModule {}
