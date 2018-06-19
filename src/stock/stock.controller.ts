import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { Stock } from './interfaces/stock.interface';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {

    constructor(private readonly stockService: StockService) {
    }

    @Post()
    async create(@Body() createStockDto: CreateStockDto) {
        this.stockService.create(createStockDto);
    }

    @Get()
    async findAll(): Promise<Stock[]> {
        return this.stockService.findAll();
    }
}