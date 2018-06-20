import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Stock } from './interfaces/stock.interface';
import { CreateStockDto } from './dto/create-stock.dto';

@Injectable()
export class StocksService {
  constructor(
    @Inject('StockModelToken') private readonly stockModel: Model<Stock>,
  ) {}

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
