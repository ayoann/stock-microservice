import {Model} from 'mongoose';
import {Injectable, Inject} from '@nestjs/common';
import {Stock} from './interfaces/stock.interface';
import {CreateStockDto} from './dto/create-stock.dto';
import {RabbitMQClient} from '../amq/rabbitmq-client';
import {AMQService} from '../amq/amq.service';

@Injectable()
export class StocksService {

    client: RabbitMQClient;

    constructor(
        @Inject('StockModelToken')
        private readonly stockModel: Model<Stock>,
        private readonly amqService: AMQService,
    ) {
        this.client = amqService.getClient();
    }

    async create(createStockDto: CreateStockDto): Promise<Stock> {
        const createdStock = new this.stockModel(createStockDto);
        const stock = await createdStock.save();
        this.client.sendSingleMessage({message: 'Stock `${stock._id}` added'}, (err, result, disposed) => {
            console.log(err, result, disposed);
        });
        return stock;
    }

    async find(id = null): Promise<Stock[]> {
        if (id) {
            return await this.stockModel.find(id).exec();
        }
        return await this.stockModel.find().exec();
    }

    async update(id): Promise<Stock> {
        return await this.stockModel.update(id).exec();
    }

    async remove(id) {
        // todo: gerer message retour
        return await this.stockModel.remove(id).exec();
    }

    async count(): Promise<number> {
        return await this.stockModel.count();
    }
}
