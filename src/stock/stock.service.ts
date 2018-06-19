import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Stock } from './interfaces/stock.interface';
import { CreateStockDto } from './dto/create-stock.dto';

@Injectable()
export class StockService {
    constructor(
        @Inject('StockModelToken')
        private readonly stockModel: Model<Stock>,
    ) {}

    async create(createStockDto: CreateStockDto): Promise<Stock> {
        const createdStock = new this.stockModel(createStockDto);
        return await createdStock.save();
    }

    async findAll(): Promise<Stock[]> {
        return await this.stockModel.find().exec();
    }
}