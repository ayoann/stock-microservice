import { Module } from '@nestjs/common';
import { StocksModule } from './stocks/stocks.module';
import {AMQService} from './amq.service';

@Module({
  imports: [StocksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
