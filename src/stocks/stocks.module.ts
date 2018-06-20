import {Module} from '@nestjs/common';
import {StocksController} from './stocks.controller';
import {StocksService} from './stocks.service';
import {DatabaseModule} from '../database/database.module';
import {stocksProviders} from './stocks.providers';
import {AMQModule} from '../amq/amq.module';

@Module({
    imports: [DatabaseModule, AMQModule],
    controllers: [StocksController],
    providers: [StocksService, ...stocksProviders],
})
export class StocksModule {
}
