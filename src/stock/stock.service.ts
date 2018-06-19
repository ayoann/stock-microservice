import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stock } from './interfaces/stock.interface';
import { CreateStockDto } from './dto/create-stock.dto';

@Injectable()
export class StockService {
    constructor(
        @InjectModel('StockModelToken')
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