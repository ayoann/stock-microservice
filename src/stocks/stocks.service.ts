import {Model} from 'mongoose';
import {Injectable, Inject} from '@nestjs/common';
import {Stock} from './interfaces/stock.interface';
import {CreateStockDto} from './dto/create-stock.dto';
import {RabbitMQClient} from '../rabbitmq-client';

@Injectable()
export class StocksService {

    client: RabbitMQClient;

    constructor(@Inject('StockModelToken') private readonly stockModel: Model<Stock>) {
        this.client = new RabbitMQClient('amqp://localhost', 'stock');
        this.client.sendSingleMessage({test: 'ok'}, (err, result, disposed) => {
            console.log(err, result, disposed);
        });
    }

    async create(createStockDto: CreateStockDto): Promise<Stock> {
        const createdStock = new this.stockModel(createStockDto);
        return await createdStock.save();
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
