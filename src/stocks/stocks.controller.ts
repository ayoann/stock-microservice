import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { Stock } from './interfaces/stock.interface';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get('/quantity')
  async getQuantity(): Promise<any> {
    let quantity: number = null;
    await this.stocksService.count().then((q: number) => quantity = q);
    return { quantity };
  }

  @Post()
  async create(@Body() createStockDto: CreateStockDto) {
    this.stocksService.create(createStockDto);
  }

  @Get()
  async findAll(): Promise<Stock[]> {
    return this.stocksService.find();
  }

  @Get('/:id')
  async findOne(id): Promise<Stock> {
    return this.stocksService.find(id);
  }

  @Put('/:id')
  async update(@Body() createStockDto: CreateStockDto): Promise<Stock> {
    return this.stocksService.update(createStockDto);
  }

  @Delete('/:id')
  remove(id): object {
    this.stocksService.remove(id);
    return { message: `Stock ${id} removed successfully` };
  }
}
