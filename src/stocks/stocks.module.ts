import {HttpModule, Module} from '@nestjs/common';
import {StocksController} from './stocks.controller';
import {StocksService} from './stocks.service';
import {DatabaseModule} from '../database/database.module';
import {stocksProviders} from './stocks.providers';
import {AMQModule} from '../amq/amq.module';
import {AMQService} from '../amq/amq.service';

@Module({
    imports: [DatabaseModule, HttpModule],
    controllers: [StocksController],
    providers: [AMQService, StocksService, ...stocksProviders],
})
export class StocksModule {
}
