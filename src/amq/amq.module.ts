import { Module } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import { DatabaseModule } from '../database/database.module';
import { stocksProviders } from './stocks.providers';
import {AMQService} from './amq.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AMQService],
})
export class AMQModule {}
