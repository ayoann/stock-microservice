import {Model} from 'mongoose';
import {Injectable, Inject, HttpService} from '@nestjs/common';
import {Stock} from './interfaces/stock.interface';
import {CreateStockDto} from './dto/create-stock.dto';
import {RabbitMQClient} from '../amq/rabbitmq-client';
import {AMQService} from '../amq/amq.service';
import {AxiosResponse} from '@nestjs/common/http/interfaces/axios.interfaces';

interface User {
    id: number
    name: string
}

@Injectable()
export class StocksService {

    client: RabbitMQClient;

    constructor(
        @Inject('StockModelToken') private readonly stockModel: Model<Stock>,
        private readonly amqService: AMQService,
        private readonly http: HttpService,
    ) {
        this.client = amqService.getClient();
    }

    async create(createStockDto: CreateStockDto): Promise<Stock> {
        let stock = null;
        let message = null;
        this.http.get('http://utilisateurs/api/users').subscribe((user: AxiosResponse<User>) => {
            const createdStock = new this.stockModel(createStockDto);
            stock = createdStock.save().then(s => {
                this.count().then(q =>
                    message = {
                    user: {id: user.data},
                    tracking: {
                        location: 'Nantes',
                        productId: s._id,
                        commandName: s.name,
                        totalQuantity: q,
                    },
                });
            });
            this.client.sendSingleMessage(message, (err, result, disposed) => {
                console.log(err, result, disposed);
            });
        });
        return stock;
    }

    find(id = null): Promise<any> {
        if (id) {
            return this.stockModel.findById(id).exec();
        }
        return this.stockModel.find().exec();
    }

    async update(createStockDto: CreateStockDto): Promise<Stock> {
        return await this.stockModel.findByIdAndUpdate(createStockDto.id, createStockDto).exec();
    }

    async remove(id) {
        // todo: gerer message retour
        return await this.stockModel.remove(id).exec();
    }

    async count(): Promise<number> {
        return await this.stockModel.count({});
    }
}
